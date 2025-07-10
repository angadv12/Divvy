import { StyleSheet, TouchableOpacity} from 'react-native';
import { auth } from '../../FirebaseConfig';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Text, View, SafeAreaView } from '@/components/Themed';

export default function ProfilePage() {
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>profile</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/settings')}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    paddingTop: 20,
    fontSize: 36,
    fontWeight: '600',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
