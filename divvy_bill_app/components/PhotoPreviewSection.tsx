import { TouchableOpacity, Image, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { CameraCapturedPicture } from 'expo-camera';
import React from 'react'
import { SafeAreaView, Text, View } from '@/components/Themed';
import { analyzeReceiptImage } from '@/services/openai';
import { router } from 'expo-router';
import { useScanResult } from '@/context/ScanResultContext';

interface PhotoPreviewSectionProps {
    photo: CameraCapturedPicture;
    handleRetakePhoto: () => void;
}

const PhotoPreviewSection: React.FC<PhotoPreviewSectionProps> = ({ photo, handleRetakePhoto }) => {
    const [loading, setLoading] = React.useState(false);
    const { setLastScan } = useScanResult();

    const handleScanReceipt = async () => {
        setLoading(true);
        try {
            const result = await analyzeReceiptImage(photo.base64 as string);
            setLastScan(result ?? '');
            // Navigate to results tab
            router.push('/(tabs)/results');
        } catch (err) {
            console.error(err);
            Alert.alert('Error', 'Failed to analyze receipt. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.previewContainer}
                    source={{ uri: 'data:image/jpg;base64,' + photo.base64 }}
                />
                <TouchableOpacity style={styles.closeButton} onPress={handleRetakePhoto}>
                    <AntDesign name="close" size={36} color="white" />
                </TouchableOpacity>
            </View>

            {loading ? (
                <ActivityIndicator size="large" style={styles.loading} />
            ) : (
                <TouchableOpacity style={styles.scanButton} onPress={handleScanReceipt}>
                    <Text style={styles.scanButtonText}>Scan Receipt</Text>
                </TouchableOpacity>
            )}
        </SafeAreaView>
    );
};

export default PhotoPreviewSection;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        // borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
      },
    previewContainer: {
        width: '95%',
        height: '90%',
        alignSelf: 'center'
    },
    closeButton: {
        position: 'absolute',
        top: '2%',
        left: '5%',
        zIndex: 1,
        padding: 5,
        borderRadius: 20,
    },
    scanButton: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    scanButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    loading: {
        marginTop: 20,
    },

});