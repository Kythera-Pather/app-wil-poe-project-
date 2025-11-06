import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Linking, Pressable, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavBar from '../screens/BottomNavBar';



type AboutScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AboutScreen'>;
type PressableState = { pressed: boolean };

const AboutScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <View style={{ flex: 1 }}>
    <ScrollView style={styles.container}>
      {/* Our Impact Section */}
      <View style={styles.impactSection}>
        <Text style={styles.heroTitle}>Our Impact</Text>
          <View style={styles.statsGrid}>
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
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>Years of Excellence</Text>
            </View>
          </View>
      </View>

      {/* Main Content - Who We Are section */}
      <View style={styles.content}>
        <Text style={styles.title}>Who We Are</Text>

        <Text style={styles.sectionText}>
          Founded in 2022 by Precious Radebe, Empowering the Nation was born from personal experience—watching
          family members struggle due to lack of formal education and skills training. Our initiative provides
          the chances they never had: opportunities to rise above circumstances and create better futures.
        </Text>

        <Text style={styles.sectionText}>
          We believe that education and practical skills are the cornerstones of empowerment. Our mission is to provide accessible, high-quality training that equips individuals with the tools they need to secure employment, start businesses, and build self-sufficient lives. We are more than just a training center; we are a community dedicated to fostering growth, resilience, and hope across the nation.
        </Text>

        {/* Why Choose Us */}
        <View style={styles.features}>
          <Text style={styles.sectionTitle}>Why Choose Us</Text>
          <View style={styles.featuresGrid}>
            <Pressable style={({ pressed }: PressableState) => [styles.featureCard, pressed && styles.featureCardHover]}>
              <Icon name="graduation-cap" size={50} color="#CFB53B" style={styles.featureIcon} />
              <Text style={styles.featureTitle}>Quality Education</Text>
              <Text style={styles.featureText}>
                Our courses are designed by industry experts to provide practical, real-world skills.
              </Text>
            </Pressable>
            <Pressable style={({ pressed }: PressableState) => [styles.featureCard, pressed && styles.featureCardHover]}>
              <Icon name="users" size={50} color="#CFB53B" style={styles.featureIcon} />
              <Text style={styles.featureTitle}>Expert Instructors</Text>
              <Text style={styles.featureText}>
                Learn from professionals with years of experience in their respective fields.
              </Text>
            </Pressable>
            <Pressable style={({ pressed }: PressableState) => [styles.featureCard, pressed && styles.featureCardHover]}>
              <Icon name="heart" size={50} color="#CFB53B" style={styles.featureIcon} />
              <Text style={styles.featureTitle}>Community Impact</Text>
              <Text style={styles.featureText}>
                Join a movement that's transforming lives and uplifting communities across South Africa.
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={[styles.footer, { marginTop: 40 }]}>
        <View style={styles.footerGrid}>
          <View style={styles.footerColumn}>
            <View style={styles.socialLinks}>
              <Pressable style={({ pressed }: PressableState) => [styles.socialLink, pressed && styles.socialLinkHover]} onPress={() => openLink('https://facebook.com')}>
                <Icon name="facebook-f" size={16} color="#fff" />
              </Pressable>
              <Pressable style={({ pressed }: PressableState) => [styles.socialLink, pressed && styles.socialLinkHover]} onPress={() => openLink('https://twitter.com')}>
                <Icon name="twitter" size={16} color="#fff" />
              </Pressable>
              <Pressable style={({ pressed }: PressableState) => [styles.socialLink, pressed && styles.socialLinkHover]} onPress={() => openLink('https://instagram.com')}>
                <Icon name="instagram" size={16} color="#fff" />
              </Pressable>
              <Pressable style={({ pressed }: PressableState) => [styles.socialLink, pressed && styles.socialLinkHover]} onPress={() => openLink('https://linkedin.com')}>
                <Icon name="linkedin" size={16} color="#fff" />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
    <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    marginBottom: 60, // Space for BottomNavBar
  },
  topBar: {
    backgroundColor: '#004225',
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    minHeight: 40,
    zIndex: 1000,
  },
  topBarText: {
    color: '#fff',
    fontSize: 15,
    left: 120,
    top: 8,
  },
  topBarLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBarLinkText: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 15,
    right: 200,
    top: 8,
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 80, // Increased from 60
    height: 80, // Increased from 60
    marginRight: 15,
  },
  orgName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#004225',
  },
  navMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    flex: 2,
  },
  navLinkContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginHorizontal: 4,
    marginVertical: 2,
  },
  navLinkHoverActive: {
    backgroundColor: '#e6f0f7',
  },
  navLink: {
    fontSize:20, // Reduced from 18
    color: '#000000ff',
    fontWeight: '500',
    textAlign: 'center',
  },
  navLinkTextHoverActive: {
    color: '#1F6357',
  },
  breadcrumb: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  breadcrumbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  breadcrumbLink: {
    fontSize: 14,
    color: '#004225',
    fontWeight: '500',
  },
  breadcrumbSeparator: {
    fontSize: 14,
    color: '#6c757d',
    marginHorizontal: 5,
  },
  breadcrumbCurrent: {
    fontSize: 14,
    color: '#000000ff',
  },
  // Our Impact Section
  impactSection: {
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#004225',
    textAlign: 'center',
    marginBottom: 40,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 20,
    width: '100%', // Use full width to allow wrapping
    maxWidth: 800, // Adjust max width if needed
  },
  statCard: {
    backgroundColor: '#004225',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 140, // Made the squares smaller
    height: 140, // Made the squares smaller
    flexGrow: 1, // Allow cards to grow
    maxWidth: '45%', // Ensure two cards fit per row with gap
  },
  statNumber: {
    fontSize: 32, // Adjusted font size for smaller card
    fontWeight: 'bold',
    color: '#CFB53B',
  },
  statLabel: {
    fontSize: 14, // Adjusted font size for smaller card
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#004225',
    textAlign: 'center',
    marginBottom: 30,
    paddingBottom: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#CFB53B',
    alignSelf: 'center',
    width: '50%',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000ff',
    marginBottom: 30,
    paddingBottom: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#CFB53B',
    alignSelf: 'center',
    textAlign: 'center',
    width: '50%',
  },
  sectionText: {
    fontSize: 18,
    lineHeight: 28,
    color: '#002a18',
    marginBottom: 20,
    textAlign: 'center',
    maxWidth: 800,
    alignSelf: 'center',
  },
  features: {
    marginTop: 40,
    marginBottom: 40,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center',
  },
  featureCard: {
    backgroundColor: '#D9D9D9',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    borderTopWidth: 4,
    borderTopColor: '#121212',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 250,
    height: 250,
    justifyContent: 'center',
  },
  featureCardHover: {
    transform: [{ translateY: -5}],
    shadowOpacity: 0.5,
    borderTopColor: '#CFB53B',
    backgroundColor: '#c4c4c4',
  },
  featureIcon: {
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004225',
    marginBottom: 15,
    textAlign: 'center',
  },
  featureText: {
    fontSize: 16,
    color: '#004225',
    textAlign: 'center',
    lineHeight: 22,
  },
  footer: {
    backgroundColor: '#002a18',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  footerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 40,
  },
  footerColumn: {
    marginBottom: 20,
    flex: 1,
  },
  footerHeading: {
    color: '#fff',
    marginBottom: 20,
    paddingBottom: 10,
    fontSize: 18, 
    fontWeight: 'bold',
    borderBottomWidth: 3,
    borderBottomColor: '#CFB53B',
    width: 200,
  },
  footerText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 20,
    marginBottom: 5,
  },
  socialLinks: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    gap: 12,
  },
  socialLink: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialLinkHover: {
    backgroundColor: '#CFB53B',
  },
  footerLink: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 8,
  },
  footerLinkHover: {
    color: '#CFB53B',
  },
  contactInfoItem: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 20,
    marginBottom: 15,
  },
  copyright: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: 20,
    marginTop: 10,
  },
  copyrightText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  dropdownContainer: {
    position: 'relative',
    zIndex: 1001,
  },
  dropdownTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    right: 200,
    top: 8,
  },
  dropdownCaret: {
    marginLeft: 5,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 35,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    minWidth: 120,
    borderWidth: 1,
    borderColor: '#eee',
    zIndex: 1002,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dropdownItemText: {
    fontSize: 14,
    color: '#004225',
    fontWeight: '500',
  },
});

export default AboutScreen;