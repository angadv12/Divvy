import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { auth } from '../FirebaseConfig';
import { useEffect } from 'react';
import { router } from 'expo-router';


export default function Settings() {
  const handleSignOut = async () => {
      try {
        await auth.signOut();
        router.replace('/');
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };
  
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          console.log('User is signed out (detected by listener)');
          router.replace('/'); // Ensure redirection if not already handled
        }
      });
  
      return () => unsubscribe();
    }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
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
    padding: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
