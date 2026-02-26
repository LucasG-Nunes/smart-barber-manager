import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

// Componente para o ícone com efeito Neon
const NeonIcon = ({ focused, name, library: Library }: any) => (
  <View style={focused ? styles.activeIconContainer : null}>
    <Library name={name} size={20} color={focused ? '#00d2ff' : '#555'} />
  </View>
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#00d2ff',
        tabBarInactiveTintColor: '#555',
        tabBarShowLabel: false, // Opcional: design mais clean como no protótipo
        tabBarStyle: {
          backgroundColor: '#0a0a0a',
          borderTopWidth: 1,
          borderTopColor: '#222222',
          height: 70, // Um pouco mais alto para o efeito de brilho
          paddingBottom: 10,
        },
        headerShown: false,
      }}>
      
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <NeonIcon focused={focused} library={MaterialCommunityIcons} name="layers-outline" />
          ),
        }}
      />

      <Tabs.Screen
        name="agenda" // Lembre-se de renomear two.tsx para agenda.tsx depois
        options={{
          tabBarIcon: ({ focused }) => (
            <NeonIcon focused={focused} library={Ionicons} name="calendar-clear-outline" />
          ),
        }}
      />

      <Tabs.Screen
        name="team"
        options={{
          tabBarIcon: ({ focused }) => (
            <NeonIcon focused={focused} library={Ionicons} name="people-outline" />
          ),
        }}
      />

      <Tabs.Screen
        name="analytics"
        options={{
          tabBarIcon: ({ focused }) => (
            <NeonIcon focused={focused} library={Ionicons} name="pie-chart-outline" />
          ),
        }}
      />

      {/* Aba de Perfil com o Avatar do Protótipo */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.avatarContainer, focused && styles.avatarActive]}>
              <Image 
                source={{ uri: 'https://github.com/github.png' }} // Substitua pelo seu avatar
                style={styles.avatarImage}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  activeIconContainer: {
    // Brilho neon atrás do ícone
    shadowColor: '#00d2ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  avatarContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#555',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarActive: {
    borderColor: '#00d2ff',
    borderWidth: 2,
    shadowColor: '#00d2ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  }
});