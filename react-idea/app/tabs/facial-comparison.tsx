import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native';
import { Camera, CameraType, FlashMode, useCameraPermissions, PermissionStatus, CameraCapturedPicture } from 'expo-camera';
import AWS from 'aws-sdk';

// Configuración de AWS Rekognition
AWS.config.update({
  region: 'us-east-1',  // Ajusta a la región donde se encuentran tus servicios
  accessKeyId: 'TU_ACCESS_KEY_ID',  // Reemplaza con tu Access Key ID
  secretAccessKey: 'TU_SECRET_ACCESS_KEY'  // Reemplaza con tu Secret Access Key
});

const rekognition = new AWS.Rekognition();

export default function FaceComparisonTab() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isComparing, setIsComparing] = useState(false);
  
  // Corregir el tipo del ref
  const cameraRef = useRef<Camera | null>(null);

  // Solicitar permisos de cámara
  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();  // Usar el método de solicitud de permisos
      setHasPermission(status === 'granted');
    };

    getPermissions();
  }, []);

  // Función para comparar rostros usando Amazon Rekognition
  const compareFaces = async (sourceImageBytes: Uint8Array, targetImageBytes: Uint8Array) => {
    setIsComparing(true);
    const params = {
      SourceImage: {
        Bytes: sourceImageBytes,
      },
      TargetImage: {
        Bytes: targetImageBytes,
      },
      SimilarityThreshold: 80,
    };

    try {
      const response = await rekognition.compareFaces(params).promise();
      const faceMatches = response.FaceMatches;
      if (faceMatches && faceMatches.length > 0) {
        const similarity = faceMatches[0].Similarity;
        Alert.alert(`Similitud: ${similarity}%`);
      } else {
        Alert.alert('No se encontró una coincidencia significativa.');
      }
    } catch (error) {
      console.error('Error comparando rostros:', error);
      Alert.alert('Error comparando rostros.');
    } finally {
      setIsComparing(false);
    }
  };

  // Función para tomar una foto con la cámara
  const takePicture = async () => {
    if (cameraRef.current) { // Eliminar la 'z' extra
      const photo: CameraCapturedPicture = await cameraRef.current.takePictureAsync();  // Tomar la foto
      setImageUri(photo.uri);

      // Ejemplo de cómo cargar la imagen registrada y compararla con la capturada
      const registeredResponse = await fetch('https://example.com/your-registered-image.jpg');
      const registeredBlob = await registeredResponse.blob();
      const registeredImageBytes = new Uint8Array(await registeredBlob.arrayBuffer());

      const capturedResponse = await fetch(photo.uri);
      const capturedBlob = await capturedResponse.blob();
      const capturedImageBytes = new Uint8Array(await capturedBlob.arrayBuffer());

      compareFaces(registeredImageBytes, capturedImageBytes);  // Comparar los rostros
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No hay acceso a la cámara</Text>;
  }

  return (
    <View style={styles.container}>
      {/* Componente Camera JSX */}
      <Camera style={styles.camera} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <Button title="Tomar Foto y Comparar" onPress={takePicture} disabled={isComparing} />
        </View>
      </Camera>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      {isComparing && <Text>Comparando Rostros...</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '60%',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
