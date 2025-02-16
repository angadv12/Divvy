import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { CameraCapturedPicture } from 'expo-camera';
import React from 'react'
import { SafeAreaView, Text, View } from '@/components/Themed';

const PhotoPreviewSection = ({
    photo,
    handleRetakePhoto,
}: {
    photo: CameraCapturedPicture;
    handleRetakePhoto: () => void;
}) => (
    <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                style={styles.previewContainer}
                source={{ uri: 'data:image/jpg;base64,' + photo.base64 }}
            />
            {/* Overlay the close icon at the top left corner */}
            <TouchableOpacity style={styles.button} onPress={handleRetakePhoto}>
                <AntDesign name="close" size={36} color="white" />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        marginTop: '20%',
        width: '100%',
        height: '100%',
        // borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
      },
    previewContainer: {
        width: '95%',
        height: '90%',
        alignSelf: 'center'
    },
    button: {
        position: 'absolute',
        top: '2%',
        left: '5%',
        zIndex: 1,
        padding: 5,
        borderRadius: 20,
    }

});

export default PhotoPreviewSection;