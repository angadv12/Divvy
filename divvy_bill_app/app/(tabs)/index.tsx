import { StyleSheet, TouchableOpacity } from 'react-native';
import { auth } from '../../FirebaseConfig';
import { router } from 'expo-router';
import { Text, View, SafeAreaView } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>divvy</Text>
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
    fontStyle: 'italic',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

