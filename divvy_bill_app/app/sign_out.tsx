import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { auth } from '../FirebaseConfig';
import { router } from 'expo-router';
import { useEffect } from 'react';

export default function SignOutPage() {
  
  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Wait for sign-out
      console.log('User signed out');
      router.replace('/'); // Redirect immediately after sign-out
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
      <Text style={styles.title}>Sign Out</Text>
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
