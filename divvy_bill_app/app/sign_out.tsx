import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { auth } from '../FirebaseConfig';
// import { getAuth } from '@firebase/auth';
import { router } from 'expo-router';
import { useEffect } from 'react';

export default function SignOutPage() {

    useEffect(() => {
      const sign_out = auth.onAuthStateChanged((user) => {
        if (!user) {
          console.log('User is signed out');
          router.replace('/(tabs)/two')
        }
      });
      return () => {
        sign_out();
      }
    }, []);
    

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Out</Text>
      <TouchableOpacity onPress={() => auth.signOut()}>
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
