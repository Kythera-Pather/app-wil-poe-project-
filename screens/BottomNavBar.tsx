import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import Icon from 'react-native-vector-icons/FontAwesome';

type NavigationProp = StackNavigationProp<RootStackParamList>;

type NavItem = {
  name: string;
  icon: string;
  screen: keyof RootStackParamList;
};

const BottomNavBar: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();

  // By defining the type for navItems, TypeScript understands the shape of `item` inside the map function.
  const navItems: NavItem[] = [
    { name: 'Home', icon: 'home', screen: 'Home' },
    { name: 'Courses', icon: 'book', screen: 'CourseOptions' },
    { name: 'About', icon: 'info-circle', screen: 'AboutScreen' },
    { name: 'Contact', icon: 'phone', screen: 'Contact' },
  ];

  return (
    <View style={styles.bottomNav}>
      {navItems.map((item) => (
        <Pressable
          key={item.name}
          style={({ pressed }) => [styles.navItem, pressed && styles.buttonPressed]}
          onPress={() => {
            // The 'navigate' function is correctly typed, but TypeScript can get confused
            // with complex signatures inside a loop. This explicit call resolves it.
            // The error occurs because some screens take parameters and others don't.
            navigation.navigate(item.screen as any);
          }}
        >
          <Icon name={item.icon} style={[styles.navIcon, route.name === item.screen && styles.navIconActive]} />
          <Text style={[styles.navText, route.name === item.screen && styles.navTextActive]}>{item.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#004225',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#CFB53B',
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navIcon: {
    fontSize: 24,
    color: '#CFB53B',
  },
  navIconActive: {
    color: '#FFFFFF',
  },
  navText: {
    color: '#CFB53B',
    fontSize: 12,
    marginTop: 3,
  },
  navTextActive: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttonPressed: {
    opacity: 0.7,
  },
});

export default BottomNavBar;