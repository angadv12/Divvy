import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import { auth } from '../../FirebaseConfig';
import { router } from 'expo-router';
import { useRef, useState, useEffect } from 'react';
import { Text, View } from '@/components/Themed';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import PhotoPreviewSection from '@/components/PhotoPreviewSection';

export default function Camera() {
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<any>(null);
  const cameraRef = useRef<CameraView | null>(null);
  
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        base64: true,
        exif: false,
      }
      const takePhoto = await cameraRef.current.takePictureAsync(options);

      setPhoto(takePhoto);
    }
  }

  const handleRetakePhoto = () => setPhoto(null);

  if(photo) return (<PhotoPreviewSection photo={photo} handleRetakePhoto={handleRetakePhoto} />);

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
            {/* <MaterialIcons style={styles.icon} name="photo-camera" size={44} color="white" /> */}
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  icon: {
    color: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#bbb',
    borderRadius: 999,
    padding: 10,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    padding: 40,
    backgroundColor: 'white',
    borderRadius: 999,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
