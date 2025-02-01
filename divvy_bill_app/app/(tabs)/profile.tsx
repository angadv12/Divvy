import { StyleSheet, TouchableOpacity} from 'react-native';
import { auth } from '../../FirebaseConfig';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from '@/components/Themed';

export default function ProfilePage() {
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
