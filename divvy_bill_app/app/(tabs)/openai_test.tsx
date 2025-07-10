import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { getChatResponse } from '../../services/openai';
import { Text, View, SafeAreaView } from '../../components/Themed';
import { useColorScheme } from '../../components/useColorScheme';

export default function TabOneScreen() {
    const colorScheme = useColorScheme();
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;
        setLoading(true);
        const reply = await getChatResponse(input);
        setResponse(reply);
        setLoading(false);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ask AI Anything</Text>

            <TextInput
                style={[styles.input, { color: colorScheme === 'dark' ? 'white' : 'black' }]}
                placeholder="Type your question..."
                value={input}
                onChangeText={setInput}
            />

            <TouchableOpacity style={styles.askButton} onPress={handleSend} disabled={loading}>
                <Text style={styles.askButtonText}>{loading ? 'Thinking...' : 'Ask'}</Text>
            </TouchableOpacity>

            <ScrollView style={styles.responseBox}>
                <Text style={styles.responseText}>{response}</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
  },
  responseBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  responseText: {
    fontSize: 16,
  },
  askButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  askButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

