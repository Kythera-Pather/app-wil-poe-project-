import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Alert, Image, Pressable, PressableStateCallbackType } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// Corrected imports from a central data file
import { sixMonthCourses, sixWeekCourses } from './courses';
import { RootStackParamList } from '../App';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavBar from '../screens/BottomNavBar';


type CourseSelectionScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CourseSelection'>;
type CourseSelectionScreenRouteProp = RouteProp<RootStackParamList, 'CourseSelection'>;
type PressableState = { pressed: boolean; hovered?: boolean };

const CourseSelectionScreen: React.FC = () => {
  const navigation = useNavigation<CourseSelectionScreenNavigationProp>();
  const route = useRoute<CourseSelectionScreenRouteProp>();

  // State for the user's personal information form.
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // State to keep track of which courses are selected. We store an array of course IDs.
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  // State to hold the running total price of selected courses.
  const [total, setTotal] = useState(0);
  // State for filtering courses (though currently only used for pre-selection from other screens).
  const [filteredSixMonthCourses, setFilteredSixMonthCourses] = useState(sixMonthCourses);
  const [filteredSixWeekCourses, setFilteredSixWeekCourses] = useState(sixWeekCourses);
  // State to manage the focused style on text inputs.
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  // This effect checks if a `searchQuery` was passed via navigation params.
  // It's used to pre-select a course if the user comes from a specific course page.
  useEffect(() => {
    const { searchQuery } = route.params || {};
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      setFilteredSixMonthCourses(
        sixMonthCourses.filter(course => course.title.toLowerCase().includes(lowerCaseQuery))
      );
      setFilteredSixWeekCourses(
        sixWeekCourses.filter(course => course.title.toLowerCase().includes(lowerCaseQuery))
      );
    }
  }, [route.params]);

  /**
   * Toggles the selection of a course.
   * Adds or removes the course ID from the `selectedCourses` array and updates the `total` price.
   */
  const toggleCourseSelection = (courseId: string, price: number, isSelected: boolean) => {
    if (isSelected) {
      setSelectedCourses(selectedCourses.filter(id => id !== courseId));
      setTotal(total - price);
    } else {
      setSelectedCourses([...selectedCourses, courseId]);
      setTotal(total + price);
    }
  };

  /**
   * Handles the calculation logic when the user presses the "Calculate" button.
   * It validates inputs, calculates discounts and VAT, and navigates to the results screen.
   */
  const handleCalculate = () => {
    if (!name.trim() || !phone.trim() || !email.trim()) {
      Alert.alert('Missing Information', 'Please fill in all your personal information.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // Validates for a 10-digit South African number starting with 0.
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit phone number starting with 0.');
      return;
    }

    if (selectedCourses.length === 0) {
      Alert.alert('Error', 'Please select at least one course.');
      return;
    }

    // --- Fee Calculation Logic ---
    const count = selectedCourses.length;
    let discount = 0;
    if (count === 2) discount = 0.05;
    else if (count === 3) discount = 0.1;
    else if (count > 3) discount = 0.15;

    const subtotal = total;
    const discountAmount = subtotal * discount;
    const discountedSubtotal = subtotal - discountAmount;
    const vatAmount = discountedSubtotal * 0.15;
    const finalTotal = discountedSubtotal + vatAmount;

    // We need to pass detailed course info to the next screen, not just IDs.
    const allCourses = [...sixMonthCourses, ...sixWeekCourses];
    const detailedSelectedCourses = selectedCourses.map(id => {
      const course = allCourses.find(c => c.id === id);
      return { id: course!.id, name: course!.title, price: course!.price };
    });

    // Navigate to the results screen, passing all the calculated data and user info
    // as route parameters.
    const { userName } = route.params || {};
    navigation.navigate('FeeCalculationResults', {
      personalInfo: { name, phone, email },
      selectedCourses: detailedSelectedCourses,
      subtotal,
      discount,
      discountAmount,
      discountedSubtotal,
      vatAmount,
      total: finalTotal,
      userName,
    });
  };

  // Placeholder for a future enrollment function.
  const handleEnroll = () => {
    if (selectedCourses.length === 0) {
      Alert.alert('Error', 'Please select at least one course before enrolling.');
      return;
    }

    Alert.alert('Enrollment', 'Enrollment functionality would be implemented here. This would typically redirect to a payment gateway or enrollment form.');
  };

  return (
    <View style={{ flex: 1 }}>
    <ScrollView style={styles.container}>
      {/* Main Content */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Selection & Fee Calculator</Text>
        <Text style={styles.introText}>
          Select your desired courses below to calculate your total fees. Discounts are automatically applied for multiple courses.
        </Text>

        {/* Form Container */}
        <View style={styles.formContainer}>
          {/* This section clearly explains the discount structure to the user. */}
          <View style={styles.discountSection}>
            <Text style={styles.discountSectionTitle}>Discount Information</Text>
            <Text style={styles.discountText}>
              We offer discounts for multiple course enrollments to make our programs more accessible:
            </Text>
            <View style={styles.discountGrid}>
              <View style={styles.discountCard}>
                <Text style={styles.discountPercent}>5%</Text>
                <Text style={styles.discountDesc}>Discount for 2 courses</Text>
              </View>
              <View style={styles.discountCard}>
                <Text style={styles.discountPercent}>10%</Text>
                <Text style={styles.discountDesc}>Discount for 3 courses</Text>
              </View>
              <View style={styles.discountCard}>
                <Text style={styles.discountPercent}>15%</Text>
                <Text style={styles.discountDesc}>Discount for 4+ courses</Text>
              </View>
            </View>
            <Text style={styles.discountNote}>
              All fees include 15% VAT. Discounts are applied before VAT calculation.
            </Text>
          </View>

          {/* Input fields for the user's personal details. */}
          {/* Personal Information */}
          <View style={styles.formSection}>
            <Text style={styles.formSectionTitle}>Your Information</Text>
            <TextInput
              style={[styles.formInput, focusedInput === 'name' && styles.inputFocused]}
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
              onFocus={() => setFocusedInput('name')}
              onBlur={() => setFocusedInput(null)}
            />
            <TextInput
              style={[styles.formInput, focusedInput === 'phone' && styles.inputFocused]}
              placeholder="Phone Number"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              onFocus={() => setFocusedInput('phone')}
              onBlur={() => setFocusedInput(null)}
            />
            <TextInput
              style={[styles.formInput, focusedInput === 'email' && styles.inputFocused]}
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              onFocus={() => setFocusedInput('email')}
              onBlur={() => setFocusedInput(null)}
            />
          </View>

          {/* A list of all available courses, rendered as custom checkboxes. */}
          {/* Six-Month Courses */}
          <View style={styles.formSection}>
            <Text style={styles.formSectionTitle}>Six-Month Courses (R1500 each)</Text>
            {filteredSixMonthCourses.map((course) => {
              const isSelected = selectedCourses.includes(course.id);
              return (
                <Pressable
                  key={course.id}
                  style={({ hovered }: PressableState) => [
                    styles.checkboxItem,
                    isSelected && styles.checkboxItemSelected,
                    hovered && styles.checkboxItemHover,
                  ]}
                  onPress={() => toggleCourseSelection(course.id, course.price, isSelected)}
                >
                  <View style={styles.checkbox}>
                    <View style={[styles.checkboxBox, isSelected && styles.checkboxBoxSelected]}>
                      {isSelected && <Icon name="check" style={styles.checkmark} />}
                    </View>
                  </View>
                  <View style={styles.checkboxLabel}>
                    <Text style={styles.courseName}>{course.title}</Text>
                    <Text style={styles.coursePrice}>R{course.price}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>

          {/* Six-Week Courses */}
          <View style={styles.formSection}>
            <Text style={styles.formSectionTitle}>Six-Week Courses (R750 each)</Text>
            {filteredSixWeekCourses.map((course) => {
              const isSelected = selectedCourses.includes(course.id);
              return (
                <Pressable
                  key={course.id}
                  style={({ hovered }: PressableState) => [
                    styles.checkboxItem,
                    isSelected && styles.checkboxItemSelected,
                    hovered && styles.checkboxItemHover,
                  ]}
                  onPress={() => toggleCourseSelection(course.id, course.price, isSelected)}
                >
                  <View style={styles.checkbox}>
                    <View style={[styles.checkboxBox, isSelected && styles.checkboxBoxSelected]}>
                      {isSelected && <Icon name="check" style={styles.checkmark} />}
                    </View>
                  </View>
                  <View style={styles.checkboxLabel}>
                    <Text style={styles.courseName}>{course.title}</Text>
                    <Text style={styles.coursePrice}>R{course.price}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>

          {/* Calculate Button */}
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ hovered }: PressableState) => [styles.calculateButton, hovered && styles.calculateButtonHover]}
              onPress={handleCalculate}
            >
              <Icon name="calculator" size={20} color="#fff" style={styles.buttonIcon} />
              <Text style={styles.calculateButtonText}>Calculate Total Fees</Text>
            </Pressable>
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
    resizeMode: 'contain',
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
    fontSize: 20, // Reduced from 18
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
  section: {
    padding: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000ff',
    textAlign: 'center',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#CFB53B',
    alignSelf: 'center',
    width: '50%',
  },
  introText: {
    fontSize: 18,
    color: '#002a18',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 26,
    maxWidth: 800,
  },
  // Form Styles
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 30,
    marginBottom: 20,
    width: '100%',
    maxWidth: 800,
  },
  formSection: {
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  formSectionTitle: {
    fontSize: 22,
    color: '#004225',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#CFB53B',
  },
  formInput: {
    width: '100%',
    padding: 15,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 4,
    fontSize: 18,
    marginBottom: 15,
  },
  inputFocused: {
    borderColor: '#004225',
    backgroundColor: '#fff',
  },
  // Checkbox Styles
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  checkboxItemSelected: {
    backgroundColor: '#e6f0f7',
  },
  checkboxItemHover: {
    backgroundColor: '#e9ecef',
  },
  checkbox: {
    marginRight: 15,
  },
  checkboxBox: {
    width: 24,
    height: 24,
    borderWidth: 3,
    borderColor: '#004225',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxBoxSelected: {
    backgroundColor: '#004225',
  },
  checkmark: {
    color: '#fff',
    // fontWeight: 'bold', // Icon handles its own weight
    fontSize: 14,
  },
  checkboxLabel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#002a18',
    flexShrink: 3, // Allow the item to shrink but prevent word breaking
    marginRight: 4, // Add some space between name and price
  },
  coursePrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#CFB53B',
    minWidth: 80, // Set a minimum width for alignment
    textAlign: 'right', // Align the price to the right within its container
  },
  // Button Styles
  buttonContainer: {
    alignItems: 'center',
  },
  calculateButton: {
    backgroundColor: '#004225',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 300,
    height: 60,
  },
  calculateButtonHover: {
    backgroundColor: '#002a18',
  },
  buttonIcon: {
    marginRight: 12,
  },
  calculateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  // Discount Section - MOVED INSIDE FORM CONTAINER
  discountSection: {
    backgroundColor: 'rgba(207, 181, 59, 0.1)',
    padding: 30,
    marginBottom: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  discountSectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000ff',
    textAlign: 'center',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#CFB53B',
    alignSelf: 'center',
    width: '100%',
  },
  discountText: {
    fontSize: 16,
    color: '#002a18',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
    maxWidth: 800,
  },
  discountGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 20,
    width: '100%',
  },
  discountCard: {
    backgroundColor: '#004225',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    minWidth: 150,
    flex: 1,
    maxWidth: 200,
  },
  discountPercent: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#CFB53B',
    marginBottom: 8,
  },
  discountDesc: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 20,
  },
  discountNote: {
    fontSize: 14,
    color: '#002a18',
    textAlign: 'center',
    fontStyle: 'italic',
    maxWidth: 800,
  },
  // Footer Styles
  footer: {
    backgroundColor: '#002a18',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  footerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  footerColumn: {
    marginBottom: 20,
    flex: 1,
    minWidth: 250,
    left: 100,
    right: 100,
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
  // Dropdown styles - UPDATED TO MATCH HOMESCREEN
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

export default CourseSelectionScreen;