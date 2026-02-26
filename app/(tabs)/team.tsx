import { StyleSheet, Text, View } from 'react-native';

export default function TabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Em breve...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});