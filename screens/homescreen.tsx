import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../App'; // Import from App.tsx
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavBar from '../screens/BottomNavBar';


type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const route = useRoute<HomeScreenRouteProp>();
  // We get the `userName` from the route's parameters.
  // This is passed from the Login screen upon successful authentication.
  const { userName } = route.params || {};

  // This state controls the visibility of the "Account" dropdown menu for non-logged-in users.
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      {/* This top bar provides a different view depending on whether a user is logged in or not. */}
      <View style={styles.topBar}>
        {userName ? (
          // If a user is logged in, we show a friendly welcome message.
          <Text style={styles.welcomeText}>Welcome, {userName}!</Text>
        ) : (
          // If no user is logged in, we show an "Account" button with a dropdown for Login/Sign Up.
          <View>
            <Pressable style={styles.authButton} onPress={() => setDropdownVisible(!isDropdownVisible)}>
              <Text style={styles.authButtonText}>Account ▾</Text>
            </Pressable>

            {isDropdownVisible && (
              <View style={styles.dropdownContainer}>
                <Pressable style={({ pressed }) => [styles.dropdownItem, pressed && styles.buttonPressed]} onPress={() => { navigation.navigate('Login'); setDropdownVisible(false); }}>
                  <Text style={styles.dropdownText}>Login</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [styles.dropdownItem, pressed && styles.buttonPressed]} onPress={() => { navigation.navigate('Signup'); setDropdownVisible(false); }}>
                  <Text style={styles.dropdownText}>Sign Up</Text>
                </Pressable>
              </View>
            )}
          </View>
        )}
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header / Logo */}
        <View style={styles.header}>
          <Image source={require('../assets/LOGO.png')} style={styles.logo} />
          <Text style={styles.title}>Empowering the Nation</Text>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.overlay}>
            <Text style={styles.heroText}>Empower Yourself Through Quality Education</Text>
            <Pressable
              onPress={() => navigation.navigate('CourseSelection', { userName })}
              style={({ pressed }) => [styles.ctaButton, { backgroundColor: pressed ? '#b39c36' : '#CFB53B' }]}
            >
              <Text style={styles.ctaText}>Explore Our Courses</Text>
            </Pressable>
          </View>
        </View>

        {/* Statistics Section */}
        <View style={styles.statsSection}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>500+</Text>
            <Text style={styles.statLabel}>Students Trained</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Courses Offered</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>95%</Text>
            <Text style={styles.statLabel}>Success Rate</Text>
          </View>
        </View>

        {/* Why Choose Us */}
        <Text style={styles.sectionHeader}>Why Choose Us</Text>
        <View style={styles.cardRow}>
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Quality Education</Text>
            <Text style={styles.featureText}>
              Courses designed by industry experts to ensure practical learning.
            </Text>
          </View>
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Expert Instructors</Text>
            <Text style={styles.featureText}>
              Learn from professionals with years of experience and passion for teaching.
            </Text>
          </View>
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Community Impact</Text>
            <Text style={styles.featureText}>
              Join a movement that’s transforming lives across South Africa.
            </Text>
          </View>
        </View>

        {/* Popular Courses */}
        <Text style={styles.sectionHeader}>Our Popular Courses</Text>
        <View style={styles.cardRow}>
          <View style={styles.courseCard}>
            <Text style={styles.courseTitle}>First Aid Training</Text>
            <Pressable
              onPress={() => navigation.navigate('FirstAidCourse')}
              style={({ pressed }) => [styles.learnMoreBtn, { backgroundColor: pressed ? '#005a34' : '#004225' }]}
            >
              <Text style={styles.learnMoreText}>Learn More</Text>
            </Pressable>
          </View>
          <View style={styles.courseCard}>
            <Text style={styles.courseTitle}>Cooking & Nutrition</Text>
            <Pressable
              onPress={() => navigation.navigate('CookingCourse')}
              style={({ pressed }) => [styles.learnMoreBtn, { backgroundColor: pressed ? '#005a34' : '#004225' }]}
            >
              <Text style={styles.learnMoreText}>Learn More</Text>
            </Pressable>
          </View>
          <View style={styles.courseCard}>
            <Text style={styles.courseTitle}>Child Minding</Text>
            <Pressable
              onPress={() => navigation.navigate('ChildMindingCourse')}
              style={({ pressed }) => [styles.learnMoreBtn, { backgroundColor: pressed ? '#005a34' : '#004225' }]}
            >
              <Text style={styles.learnMoreText}>Learn More</Text>
            </Pressable>
          </View>
        </View>

        {/* Our Story */}
        <Text style={styles.sectionHeader}>Our Story</Text>
        <Text style={styles.storyText}>
          Founded in 2022 by Precious Radebe, Empowering the Nation was built to help individuals gain
          skills that change their lives. Our mission is to provide accessible, affordable education to
          communities across South Africa.
        </Text>
        <Pressable style={({ pressed }) => [styles.ctaButton, { backgroundColor: pressed ? '#b39c36' : '#CFB53B', borderRadius: 5, alignSelf: 'center' }]} onPress={() => navigation.navigate('AboutScreen')}>
          <Text style={styles.ctaText}>Learn More About Us</Text>
        </Pressable>

        {/* Success Stories */}
        <Text style={styles.sectionHeader}>Success Stories</Text>
        <View style={styles.successRow}>
          <View style={styles.successCard}>
            <Text style={styles.successText}>
              "I gained confidence and found a new career path!"
            </Text>
          </View>
          <View style={styles.successCard}>
            <Text style={styles.successText}>
              "The instructors were amazing and supportive."
            </Text>
          </View>
          <View style={styles.successCard}>
            <Text style={styles.successText}>
              "Empowering the Nation truly changed my life!"
            </Text>
          </View>
        </View>

        {/* Final CTA */}
        <View style={styles.finalCTA}>
          <Text style={styles.finalTitle}>Ready to Transform Your Future?</Text>
          <Text style={styles.finalSubtitle}>
            Join hundreds who already started their journey!
          </Text>
          <Pressable style={({ pressed }) => [styles.fullWidthBtn, { backgroundColor: pressed ? '#b39c36' : '#CFB53B' }]} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.fullWidthText}>ENROLL TODAY</Text>
          </Pressable>
        </View>
      </ScrollView>

      <BottomNavBar />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginBottom: 60, // space for bottom nav
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004225',
    marginTop: 10,
  },
  heroSection: {
    backgroundColor: '#004225',
    borderRadius: 12,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  overlay: {
    alignItems: 'center',
    padding: 20,
  },
  heroText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '600',
  },
  ctaButton: {
    backgroundColor: '#CFB53B',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  ctaText: {
    fontWeight: 'bold',
    color: '#004225',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  statCard: {
    backgroundColor: '#CFB53B',
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004225',
  },
  statLabel: {
    fontSize: 12,
    color: '#004225',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004225',
    textAlign: 'center',
    marginVertical: 15,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featureCard: {
    backgroundColor: '#D4E1D4',
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 10,
  },
  featureTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
    color: '#004225',
  },
  featureText: {
    fontSize: 12,
    color: '#333',
  },
  courseCard: {
    backgroundColor: '#E0E5E0',
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  courseTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#004225',
    marginBottom: 10,
  },
  learnMoreBtn: {
    backgroundColor: '#004225',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  learnMoreText: {
    color: '#CFB53B',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fullWidthBtn: {
    backgroundColor: '#CFB53B',
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 12,
    marginVertical: 20,
    alignSelf: 'center',
    paddingHorizontal: 40,
  },
  fullWidthText: {
    fontWeight: 'bold',
    color: '#004225',
  },
  storyText: {
    fontSize: 13,
    color: '#333',
    lineHeight: 18,
    marginHorizontal: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  successRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  successCard: {
    backgroundColor: '#004225',
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 10,
  },
  successText: {
    color: '#CFB53B',
    fontSize: 12,
    textAlign: 'center',
  },
  finalCTA: {
    alignItems: 'center',
    marginVertical: 30,
  },
  finalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004225',
    textAlign: 'center',
  },
  
  finalSubtitle: {
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 10,
    zIndex: 10, // Ensure top bar is above scroll content
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  authButton: {
    marginLeft: 15,
  },
  authButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#004225',
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#004225',
    alignSelf: 'center',
  },
  dropdownContainer: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginTop: 5,
    width: 120,
    elevation: 5, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dropdownItem: {
    padding: 12,
  },
  dropdownText: {
    fontSize: 14,
    color: '#004225',
  },
  buttonPressed: {
    backgroundColor: '#062b11ff', // A subtle background color for pressed state
  },
});
