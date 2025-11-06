import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavBar from '../screens/BottomNavBar';



type ChildMindingCourseScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ChildMindingCourse'>;
type PressableState = { pressed: boolean; hovered?: boolean };

const ChildMindingCourseScreen: React.FC = () => {
  const navigation = useNavigation<ChildMindingCourseScreenNavigationProp>();

  const handleEnroll = () => {
    navigation.navigate('CourseSelection');
  };

  return (
    <View style={{ flex: 1 }}>
    <ScrollView style={styles.container}>
      {/* Main Content */}
      <View style={styles.section}>
        {/* Overview Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>Program Overview</Text>
          <Text style={styles.description}>
            Our 6-week Child Minding Training Program is designed to provide caregivers, parents, and professionals with the skills and knowledge needed to ensure the well-being, safety, and development of children. 
            This program combines practical experience with theoretical understanding in child care, development, and emergency response.
          </Text>
        </View>

        {/* Course Highlights Grid */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>Course Highlights</Text>
          <View style={styles.highlightsGrid}>
            <Pressable style={({ hovered }: PressableState) => [styles.highlightItem, hovered && styles.highlightItemHover]}>
              <Icon name="child" size={40} color="#CFB53B" style={styles.highlightIcon} />
              <Text style={styles.highlightTitle}>Child Development</Text>
              <Text style={styles.highlightDescription}>Understand child development stages and needs</Text>
            </Pressable>
            <Pressable style={({ hovered }: PressableState) => [styles.highlightItem, hovered && styles.highlightItemHover]}>
              <Icon name="medkit" size={40} color="#CFB53B" style={styles.highlightIcon} />
              <Text style={styles.highlightTitle}>Safety & First Aid</Text>
              <Text style={styles.highlightDescription}>Essential safety practices and emergency response</Text>
            </Pressable>
            <Pressable style={({ hovered }: PressableState) => [styles.highlightItem, hovered && styles.highlightItemHover]}>
              <Icon name="cutlery" size={40} color="#CFB53B" style={styles.highlightIcon} />
              <Text style={styles.highlightTitle}>Nutrition</Text>
              <Text style={styles.highlightDescription}>Healthy meal planning and dietary requirements</Text>
            </Pressable>
            <Pressable style={({ hovered }: PressableState) => [styles.highlightItem, hovered && styles.highlightItemHover]}>
              <Icon name="certificate" size={40} color="#CFB53B" style={styles.highlightIcon} />
              <Text style={styles.highlightTitle}>Certification</Text>
              <Text style={styles.highlightDescription}>Nationally recognized qualification</Text>
            </Pressable>
          </View>
        </View>

      
   
     

        {/* Benefits Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>Why Choose Our Child Minding Program</Text>
          <View style={styles.benefitsGrid}>
            <Pressable style={({ hovered }: PressableState) => [styles.benefitCard, hovered && styles.benefitCardHover]}>
              <Icon name="graduation-cap" size={50} color="#000000ff" style={styles.benefitIcon} />
              <Text style={styles.benefitTitle}>Expert Instructors</Text>
              <Text style={styles.benefitText}>Learn from experienced child care professionals with years of practical experience in child development and care.</Text>
            </Pressable>
            <Pressable style={({ hovered }: PressableState) => [styles.benefitCard, hovered && styles.benefitCardHover]}>
              <Icon name="handshake-o" size={50} color="#000000ff" style={styles.benefitIcon} />
              <Text style={styles.benefitTitle}>Hands-On Learning</Text>
              <Text style={styles.benefitText}>Practical exercises and real-life scenarios that prepare you for actual child-minding situations.</Text>
            </Pressable>
            <Pressable style={({ hovered }: PressableState) => [styles.benefitCard, hovered && styles.benefitCardHover]}>
              <Icon name="user" size={50} color="#000000ff" style={styles.benefitIcon} />
              <Text style={styles.benefitTitle}>Personalized Guidance</Text>
              <Text style={styles.benefitText}>Feedback and support tailored to your specific needs and learning style throughout the program.</Text>
            </Pressable>
            <Pressable style={({ hovered }: PressableState) => [styles.benefitCard, hovered && styles.benefitCardHover]}>
              <Icon name="calendar" size={50} color="#000000ff" style={styles.benefitIcon} />
              <Text style={styles.benefitTitle}>Flexible Scheduling</Text>
              <Text style={styles.benefitText}>Classes available at various times to accommodate your work and personal commitments.</Text>
            </Pressable>
          </View>
        </View>

        {/* Target Audience */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>Who Should Enroll</Text>
          <Text style={styles.audienceText}>
            This program is suitable for parents, caregivers, child care professionals, and anyone interested in enhancing their skills in child-minding. 
            Equip yourself with essential child-minding skills and provide exceptional care!
          </Text>
          <Text style={styles.audienceText}>
            Join us to become a confident and skilled child caregiver!
          </Text>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <Pressable
            style={({ hovered }: PressableState) => [styles.enrollButton, hovered && styles.enrollButtonHover]}
            onPress={handleEnroll}
          >
            <Text style={styles.enrollButtonText}>ENROLL NOW - R750</Text>
          </Pressable>
          <Text style={styles.ctaSubtext}>Limited spots available for next intake</Text>
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
  section: {
    padding: 20,
    alignItems: 'center',
  },
  contentSection: {
    marginBottom: 40,
    width: '100%',
    maxWidth: 1200,
    alignItems: 'center',
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
  description: {
    fontSize: 18,
    lineHeight: 28,
    color: '#002a18',
    marginBottom: 20,
    textAlign: 'center',
    maxWidth: 800,
  },
  // Course Highlights
  highlightsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    rowGap: 20,
    gap: 30,
    width: '100%',
  },
  highlightItem: {
    backgroundColor: '#004225',
    flex: 1,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    textAlign: 'center',
    borderTopWidth: 4,
    borderTopColor: '#121212',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    minWidth: 250,
    maxWidth: 260,
    height: 230,
  },
  highlightItemHover: {
    transform: [{ translateY: -5 }],
    shadowOpacity: 0.2,
    shadowRadius: 8,
    borderTopColor: '#CFB53B',
  },
  highlightIcon: {
    marginBottom: 20,
  },
  highlightTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CFB53B',
    marginBottom: 15,
    textAlign: 'center',
  },
  highlightDescription: {
    fontSize: 16,
    color: '#CFB53B',
    textAlign: 'center',
    lineHeight: 22,
  },
  // Curriculum
  curriculumContainer: {
    width: '100%',
    maxWidth: 800,
    alignItems: 'center',
  },
  curriculumItem: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: '#004225',
    width: '100%',
  },
  curriculumTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004225',
    marginBottom: 10,
    textAlign: 'center',
  },
  curriculumDescription: {
    fontSize: 16,
    color: '#002a18',
    marginBottom: 15,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  curriculumPoints: {
    marginLeft: 10,
  },
  curriculumPoint: {
    fontSize: 16,
    color: '#002a18',
    marginBottom: 8,
    lineHeight: 24,
  },
  // Benefits Section
  benefitsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 30,
    width: '100%',
  },
  benefitCard: {
    backgroundColor: '#D9D9D9',
    flex: 1,
    padding: 30,
    borderRadius: 8,
    alignItems: 'center',
    textAlign: 'center',
    borderTopWidth: 4,
    borderTopColor: '#121212',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 320,
    minWidth: 250,
    maxWidth: 280,
  },
  benefitCardHover: {
    transform: [{ translateY: -5}],
    shadowOpacity: 0.5,
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
    borderTopColor: '#CFB53B',
    backgroundColor: '#c4c4c4',
  },
  benefitIcon: {
    marginBottom: 25,
  },
  benefitTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004225',
    marginBottom: 15,
    textAlign: 'center',
  },
  benefitText: {
    fontSize: 16,
    color: '#004225',
    textAlign: 'center',
    lineHeight: 24,
  },
  // Target Audience
  audienceText: {
    fontSize: 18,
    lineHeight: 28,
    color: '#002a18',
    marginBottom: 20,
    textAlign: 'center',
    maxWidth: 800,
  },
  // CTA Section
  ctaSection: {
    backgroundColor: '#f8f9fa',
    padding: 40,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
    maxWidth: 800,
  },
  enrollButton: {
    backgroundColor: '#004225',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
    minWidth: 300,
    height: 60,
  },
  enrollButtonHover: {
    backgroundColor: '#002a18',
  },
  enrollButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  ctaSubtext: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
  },
});

export default ChildMindingCourseScreen;