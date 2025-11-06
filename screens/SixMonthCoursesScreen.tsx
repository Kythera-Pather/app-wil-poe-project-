import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Linking, Pressable, ImageBackground, PressableStateCallbackType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { sixMonthCourses } from './courses';
import { RootStackParamList } from '../App';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavBar from '../screens/BottomNavBar';


type SixMonthCoursesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SixMonthCourses'>;
type PressableState = { pressed: boolean; hovered?: boolean };

const SixMonthCoursesScreen: React.FC = () => {
  const navigation = useNavigation<SixMonthCoursesScreenNavigationProp>();

  const handleCoursePress = (courseId: string) => {
    if (courseId === 'first-aid') {
      navigation.navigate('FirstAidCourse');
    } else if (courseId === 'sewing') {
      navigation.navigate('SewingCourse');
    } else if (courseId === 'landscaping') {
      navigation.navigate('LandscapingCourse');
    } else if (courseId === 'life-skills') {
      navigation.navigate('LifeSkillsCourse');
    } else {
      // Navigate to the course selection screen, which can handle filtering or pre-selection
      navigation.navigate('CourseSelection', { searchQuery: courseId });
    }
  };

  // Custom Course Card Component for Six-Month Courses
  const CourseCard = ({ course, onPress }: { course: any; onPress: () => void }) => (
    <Pressable 
      style={({ hovered }: PressableState) => [styles.courseCard, hovered && styles.courseCardHover]}
      onPress={onPress}
    >
      <View style={styles.courseImageContainer}>
        <Image source={course.image} style={styles.courseImage} />
      </View>
      <View style={styles.courseContent}>
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Text style={styles.courseDescription}>{course.description}</Text>
        <Text style={styles.coursePrice}>R{course.price}</Text>
        <View style={styles.courseDetails}>
          <View style={styles.detailItem}>
            <Icon name="clock-o" size={16} color="#004225" />
            <Text style={styles.detailText}>6 Months Duration</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon name="certificate" size={16} color="#004225" />
            <Text style={styles.detailText}>Certificate Provided</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon name="graduation-cap" size={16} color="#004225" />
            <Text style={styles.detailText}>
              {course.title === 'First Aid' && 'Practical Training'}
              {course.title === 'Sewing' && 'Hands-on Projects'}
              {course.title === 'Landscaping' && 'Practical Garden Work'}
              {course.title === 'Life Skills' && 'Interactive Workshops'}
            </Text>
          </View>
        </View>
        <Pressable
          style={({ hovered }: PressableState) => [styles.courseBtn, hovered && styles.courseBtnHover]}
          onPress={onPress}
        >
          <Text style={styles.courseBtnText}>View more details</Text>
        </Pressable>
      </View>
    </Pressable>
  );

  return (
    <View style={{ flex: 1 }}>
    <ScrollView style={styles.container}>
      {/* Main Content */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Six-Month Courses</Text>
        <Text style={styles.introText}>
          Our comprehensive six-month courses provide in-depth training and practical skills to help you excel in your chosen field. Each course is designed to give you the knowledge and confidence to succeed.
        </Text>

        {/* Course List - Matching HTML Layout */}
        <View style={styles.courseList}>
          {sixMonthCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onPress={() => handleCoursePress(course.id)}
            />
          ))}
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
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000ff',
    textAlign: 'center',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#CFB53B',
    alignSelf: 'center',
    width: 'auto', // Let the width be determined by content
  },
  introText: {
    fontSize: 16,
    color: '#002a18',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
    maxWidth: 800,
    alignSelf: 'center',
    width: '90%',
  },
  // Course List Styles
  courseList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 30,
    marginTop: 30,
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 300,
    marginBottom: 30,
    overflow: 'hidden',
  },
  courseCardHover: {
    transform: [{ translateY: -5 }],
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  courseImageContainer: {
    height: 200,
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
  },
  courseImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  courseContent: {
    padding: 20,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004225',
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 14,
    color: '#002a18',
    marginBottom: 15,
    lineHeight: 20,
  },
  coursePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#CFB53B',
    marginBottom: 15,
  },
  courseDetails: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 14,
    color: '#002a18',
    marginLeft: 10,
  },
  courseBtn: {
    backgroundColor: '#004225',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  courseBtnHover: {
    backgroundColor: '#002a18',
  },
  courseBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default SixMonthCoursesScreen;