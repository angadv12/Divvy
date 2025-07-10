import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { auth } from '../../FirebaseConfig';
import { router } from 'expo-router';
import { Text, View, SafeAreaView } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.name_logo}>
        <Text style={styles.title}>divvy</Text>
        <Image
          style={styles.logo}
          source={require('../../assets/images/Divvy_logo.png')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  name_logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
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

