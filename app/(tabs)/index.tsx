import { Header } from '@/components/Header';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        {/* Aqui entram seus Metric Cards e a Team List */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a' },
  content: { padding: 20 }
});