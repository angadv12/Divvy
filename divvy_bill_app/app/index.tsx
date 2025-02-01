import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { auth } from '../FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { router } from 'expo-router'
import { StyleSheet } from 'react-native'


const index = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            if (user) router.replace('/(tabs)');
        } catch (error: any) {
            console.log(error)
            alert('Sign in failed: ' + error.message)
        }
    }
    
    const signUp = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            if (user) router.replace('/(tabs)');
        } catch (error: any) {
            console.log(error)
            alert('Sign in failed: ' + error.message)
        }
    }
    
    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput placeholder='email' value={email} onChangeText={setEmail} />
        <TextInput placeholder='password' value={password} onChangeText={setPassword} secureTextEntry />
        <TouchableOpacity onPress={signIn}>
            <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={signUp}>
            <Text>Create Account</Text>
        </TouchableOpacity>
    </SafeAreaView>
    )
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

export default index