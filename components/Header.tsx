import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export function Header() {
  return (
    <View style={styles.headerContainer}>
      {/* 1. Selector de Contexto (Estilo Select) */}
      <Pressable style={styles.contextSelector}>
        <Ionicons name="storefront-outline" size={16} color="#00d2ff" />
        <Text style={styles.contextText}>Shop Overview</Text>
        <FontAwesome5 name="chevron-down" size={10} color="#555" />
      </Pressable>

      {/* 2. Input de Busca Centralizado e Menor */}
      <View style={styles.searchSection}>
        <FontAwesome5 name="search" size={12} color="#555" style={styles.searchIcon} />
        <TextInput 
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#555"
        />
      </View>

      {/* 3. Ações: Notificação e New Booking */}
      <View style={styles.actionGroup}>
        <Pressable style={styles.notificationButton}>
          <View style={styles.dot} />
          <FontAwesome5 name="bell" size={16} color="#fff" />
        </Pressable>

        <Pressable style={styles.newBookingButton}>
          <FontAwesome5 name="plus" size={12} color="#000" />
          <Text style={styles.bookingText}>New Booking</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60, 
    paddingHorizontal: 15,
    backgroundColor: '#0a0a0a',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#222222',
  },
  contextSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161616',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    gap: 8,
    borderWidth: 1,
    borderColor: '#222222',
  },
  contextText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#161616',
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    height: 38,
    borderWidth: 1,
    borderColor: '#222222',
  },
  searchIcon: { marginRight: 6 },
  input: { flex: 1, color: '#fff', fontSize: 13 },
  actionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  notificationButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#222222',
    position: 'relative',
  },
  newBookingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00d2ff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    gap: 6,
    // Efeito de brilho neon (Sombra funciona melhor em iOS, Android usa elevation)
    shadowColor: '#00d2ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  bookingText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 13,
  },
  dot: { 
    position: 'absolute', 
    top: 8, right: 10, 
    width: 6, height: 6, 
    backgroundColor: '#ff4b4b', 
    borderRadius: 3, zIndex: 1,
    borderWidth: 1,
    borderColor: '#161616'
  },
});