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
      <View style={styles.subsection}>
        <Text style={styles.subsectionTitle}>Account</Text>
        <Text>Email: {auth.currentUser?.email} </Text>
      </View>

      <View style={styles.subsection}>
        <Text style={styles.subsectionTitle}>Preferences</Text>
        <Text>Notifications</Text>
        <Text>Security</Text>
      </View>

      <View style={styles.subsection}>
        <Text style={styles.subsectionTitle}>Feedback</Text>
        <TouchableOpacity style={styles.feedbackButton}>
          <Text>Rate divvy</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  signOutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
  container: {
    paddingTop: 25,
    paddingBottom: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  subsectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subsection: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  feedbackButton: {
    width: '100%',
    backgroundColor: '#222222',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: -10,
  },
});
