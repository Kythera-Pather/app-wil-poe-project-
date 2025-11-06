import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homescreen';
import SignupScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import ContactScreen from './screens/ContactScreen';
import AboutScreen from './screens/AboutScreen';
import CourseSelectionScreen from './screens/CourseSelectionScreen';
import SixMonthCoursesScreen from './screens/SixMonthCoursesScreen';
import SixWeekCoursesScreen from './screens/SixWeekCoursesScreen';
import CourseOptionsScreen from './screens/CourseOptionsScreen';
import FirstAidCourseScreen from './screens/FirstAidCourseScreen';
import SewingCourseScreen from './screens/SewingCourseScreen';
import LandscapingCourseScreen from './screens/LandscapingCourseScreen';
import LifeSkillsCourseScreen from './screens/LifeSkillsCourseScreen';
import ChildMindingCourseScreen from './screens/ChildMindingCourseScreen';
import CookingCourseScreen from './screens/CookingCourseScreen';
import GardenMaintenanceCourseScreen from './screens/GardenMaintenanceCourseScreen';
import FeeCalculationResultsScreen from './screens/FeeCalculationResultsScreen';
import { View, Text } from 'react-native';

// This is a placeholder component for a screen that hasn't been built yet.
// It's a good practice to have placeholders like this to keep the navigation structure intact.
const MeetTheTeamScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Meet The Team Screen</Text></View>
);


/**
 * This is the heart of our navigation's type-safety.
 * `RootStackParamList` defines all the screens available in our stack navigator
 * and specifies the parameters (`params`) each screen expects to receive.
 * Using `undefined` means the screen doesn't expect any parameters.
 */
export type RootStackParamList = {
  Home: { userName?: string } | undefined; // Can be undefined or an object with an optional userName
  Signup: undefined;
  Login: {
    from?: string;
    params?: any;
  } | undefined;
  Contact: undefined;
  SixMonthCourses: undefined;
  SixWeekCourses: undefined;
  AboutScreen: undefined;
  CourseOptions: undefined;
  CourseSelection: { searchQuery?: string; userName?: string } | undefined;
  FeeCalculationResults: {
    personalInfo: {
      name: string;
      phone: string;
      email: string;
    };
    selectedCourses: { id: string; name: string; price: number }[];
    subtotal: number;
    discount: number;
    discountAmount: number;
    discountedSubtotal: number;
    vatAmount: number;
    total: number;
    userName?: string;
  };
  FirstAidCourse: undefined;
  SewingCourse: undefined;
  LandscapingCourse: undefined;
  LifeSkillsCourse: undefined;
  ChildMindingCourse: undefined;
  CookingCourse: undefined;
  GardenMaintenanceCourse: undefined;
};

// We create a stack navigator instance using our defined param list.
// This ensures that when we call `navigation.navigate`, TypeScript will check
// if we're using a valid screen name and providing the correct parameters.
const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    // The NavigationContainer is the root component that manages our navigation tree.
    <NavigationContainer>
      {/* Stack.Navigator is what provides the stack-based navigation.
          It allows users to move between screens and manages the navigation history. */}
      <Stack.Navigator
        initialRouteName="Home"
        // These are global screen options, applying a consistent style to the header of every screen.
        screenOptions={{
          headerStyle: { backgroundColor: '#002a18' },
          headerTintColor: '#CFB53B',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          // Each Stack.Screen defines a route in our navigator.
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ title: 'Create Account' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{ title: 'Contact Us' }}
        />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{ title: 'About Us' }}
        />
        <Stack.Screen
          name="CourseSelection"
          component={CourseSelectionScreen}
          options={{ title: 'Course Selection' }}
        />
        <Stack.Screen
          name="SixMonthCourses"
          component={SixMonthCoursesScreen}
          options={{ title: '6-Month Courses' }}
        />
        <Stack.Screen
          name="SixWeekCourses"
          component={SixWeekCoursesScreen}
          options={{ title: '6-Week Courses' }}
        />
        <Stack.Screen
          name="CourseOptions"
          component={CourseOptionsScreen}
          options={{ title: 'Our Courses' }}
        />
        <Stack.Screen
          name="FeeCalculationResults"
          component={FeeCalculationResultsScreen}
          options={{ title: 'Fee Calculation Results' }}
        />
        <Stack.Screen
          name="FirstAidCourse"
          component={FirstAidCourseScreen}
          options={{ title: 'First Aid Course' }}
        />
        <Stack.Screen
          name="SewingCourse"
          component={SewingCourseScreen}
          options={{ title: 'Sewing Course' }}
        />
        <Stack.Screen
          name="LandscapingCourse"
          component={LandscapingCourseScreen}
          options={{ title: 'Landscaping Course' }}
        />
        <Stack.Screen
          name="LifeSkillsCourse"
          component={LifeSkillsCourseScreen}
          options={{ title: 'Life Skills Course' }}
        />
        <Stack.Screen
          name="ChildMindingCourse"
          component={ChildMindingCourseScreen}
          options={{ title: 'Child Minding Course' }}
        />
        <Stack.Screen
          name="CookingCourse"
          component={CookingCourseScreen}
          options={{ title: 'Cooking Course' }}
        />
        <Stack.Screen
          name="GardenMaintenanceCourse"
          component={GardenMaintenanceCourseScreen}
          options={{ title: 'Garden Maintenance Course' }}
        />
      
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
