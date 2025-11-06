import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavBar from '../screens/BottomNavBar';


type CourseOptionsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CourseOptions'>;

type PressableState = {
  pressed: boolean;
  hovered?: boolean;
};

interface Props {
  navigation: CourseOptionsScreenNavigationProp;
}

const CourseOptionsScreen: React.FC<Props> = ({ navigation }) => {
  // This screen acts as a simple navigation hub.
  // It directs users to either the six-week or six-month course catalogue.
  return (
    <View style={{ flex: 1 }}>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Our Courses</Text>
        <Text style={styles.subtitle}>Choose a category to see the available courses.</Text>
      </View>
      <View style={styles.optionsContainer}>
        {/* Card to navigate to the 6-Week Courses screen. */}
        <Pressable
          style={({ pressed, hovered }: PressableState) => [styles.optionCard, pressed && styles.cardPressed, hovered && styles.cardHovered]}
          onPress={() => navigation.navigate('SixWeekCourses')}
        >
          <Icon name="calendar-o" size={40} color="#CFB53B" style={styles.icon} />
          <Text style={styles.optionTitle}>6-Week Courses</Text>
          <Text style={styles.optionDescription}>Focused short courses to quickly boost your skills.</Text>
        </Pressable>
        {/* Card to navigate to the 6-Month Courses screen. */}
        <Pressable
          style={({ pressed, hovered }: PressableState) => [styles.optionCard, pressed && styles.cardPressed, hovered && styles.cardHovered]}
          onPress={() => navigation.navigate('SixMonthCourses')}
        >
          <Icon name="calendar" size={40} color="#CFB53B" style={styles.icon} />
          <Text style={styles.optionTitle}>6-Month Courses</Text>
          <Text style={styles.optionDescription}>In-depth programs for comprehensive skill development.</Text>
        </Pressable>
      </View>
    </ScrollView>
    <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    marginBottom: 60, // Space for BottomNavBar
  },
  header: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004225',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  optionsContainer: {
    padding: 20,
  },
  optionCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 25,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardPressed: {
    backgroundColor: '#e9ecef',
  },
  cardHovered: {
    transform: [{ translateY: -5 }],
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  icon: { marginBottom: 15 },
  optionTitle: { fontSize: 22, fontWeight: 'bold', color: '#004225', marginBottom: 8 },
  optionDescription: { fontSize: 14, color: '#555', textAlign: 'center' },
});

export default CourseOptionsScreen;