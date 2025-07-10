import React from 'react';
import { ScrollView, StyleSheet, TextInput, TextStyle } from 'react-native';
import { Text, SafeAreaView, View} from '@/components/Themed';
import { useScanResult } from '@/context/ScanResultContext';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

interface ReceiptItem {
  item: string;
  price: string | number;
}

export default function ResultsTab() {
  const theme = (useColorScheme() ?? 'light') as 'light' | 'dark';

  const headerTextStyle: TextStyle = {
    color: Colors[theme].text,
    fontWeight: '700',
    fontSize: 16,
  };

  const { lastScan } = useScanResult();

  // Attempt to parse JSON array from the string
  const parsedItems: ReceiptItem[] | null = React.useMemo(() => {
    if (!lastScan) return null;
    try {
      // Find first '[' and last ']'
      const start = lastScan.indexOf('[');
      const end = lastScan.lastIndexOf(']') + 1;
      const jsonStr = start !== -1 && end !== -1 ? lastScan.slice(start, end) : lastScan;
      const data = JSON.parse(jsonStr);
      if (Array.isArray(data)) return data as ReceiptItem[];
      return null;
    } catch (e) {
      return null;
    }
  }, [lastScan]);

  if (!lastScan) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>No scan yet.</Text>
      </SafeAreaView>
    );
  }

  if (!parsedItems) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text selectable style={styles.resultText}>{lastScan}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const [items, setItems] = React.useState<ReceiptItem[]>(parsedItems);

  const updateItem = (index: number, key: keyof ReceiptItem, value: string) => {
    setItems(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [key]: value } as ReceiptItem;
      return copy;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.tableHeader}>
          <Text
            style={[styles.cell, styles.headerText, headerTextStyle]}
          >
            Item
          </Text>
          <Text style={[styles.cell, styles.headerText, headerTextStyle]}>Price</Text>
        </View>
        {items.map((row, idx) => (
          <View key={idx} style={styles.row}>
            <TextInput
              style={[styles.input, { color: Colors[theme].text }]}
              value={String(row.item)}
              onChangeText={(txt) => updateItem(idx, 'item', txt)}
            />
            <TextInput
              style={[styles.input, { color: Colors[theme].text }]}
              value={String(row.price)}
              keyboardType="numeric"
              onChangeText={(txt) => updateItem(idx, 'price', txt)}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { padding: 16 },
  resultText: { fontSize: 14, lineHeight: 20 },
  tableHeader: { flexDirection: 'row', marginBottom: 8 },
  row: { flexDirection: 'row', marginBottom: 4 },
  cell: { flex: 1, fontWeight: 'bold' },
  headerText: { fontWeight: 'bold', fontSize: 16 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 6,
    borderRadius: 4,
    marginRight: 8,
  },
}); 