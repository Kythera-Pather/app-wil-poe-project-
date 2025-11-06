import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Linking, Alert, Image, Pressable, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import Icon from 'react-native-vector-icons/FontAwesome';import BottomNavBar from '../screens/BottomNavBar';



type ContactScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Contact'>;
type PressableState = { pressed: boolean; hovered?: boolean };

const ContactScreen: React.FC = () => {
  const navigation = useNavigation<ContactScreenNavigationProp>();
  // State for managing the contact form inputs.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // State for the FAQ accordion functionality. `null` means all are closed.
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  // State for UI enhancements and feedback.
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Data for the Frequently Asked Questions section.
  const faqs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'You can enroll in our courses by visiting our Course Selection page, choosing your desired courses, and following the enrollment process. Alternatively, you can visit our campus during office hours or contact us for assistance.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including cash, bank transfers, and credit/debit cards. We also offer payment plans for certain courses.'
    },
    {
      question: 'Do you offer any financial assistance?',
      answer: 'Yes, we offer financial assistance and scholarships for eligible students. Please contact our admissions office for more information about available options and eligibility criteria.'
    },
    {
      question: 'Can I visit the campus before enrolling?',
      answer: 'Absolutely! We encourage prospective students to visit our campus. Please contact us to schedule a campus tour at your convenience.'
    }
  ];


  const handleSubmit = () => {
    setError(null); // Clear previous errors on a new submission.

    // --- Input Validation ---
    if (!name || !email || !subject || !message) {
      setError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Phone number validation (if provided)
    if (phone) {
      const phoneRegex = /^0\d{9}$/;
      if (!phoneRegex.test(phone)) {
        setError('Please enter a valid 10-digit phone number starting with 0.');
        return;
      }
    }

    setIsLoading(true);

    // Simulate an API call to send the message.
    setTimeout(() => {
      setIsLoading(false);

      // Show success message
      Alert.alert('Thank You!', 'Your message has been sent. We will get back to you soon.');

      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    }, 2000); // Simulate a 2-second network request
  };

  // Helper function to open the location in the device's default map application.
  const openMap = () => {
    const address = '123 Education St, Johannesburg, South Africa';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    Linking.openURL(url).catch(err => Alert.alert('Error', 'Could not open maps.'));
  };

  // Helper function to initiate a phone call.
  const callPhone = () => {
    Linking.openURL('tel:+27111234567').catch(err => Alert.alert('Error', 'Could not make a call.'));
  };

  // Helper function to open the user's default email client.
  const sendEmail = () => {
    const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=info@empoweringthenation.org.za';
    Linking.openURL(gmailUrl).catch(err => Alert.alert('Error', 'Could not open email client.'));
  };

  // This is a placeholder for a real map component (like react-native-maps).
  // It provides a safe fallback with a button to open Google Maps.
  const SimpleMapView = () => {
    return (
      <View style={styles.mapPlaceholder}>
        <Icon name="map" size={50} color="#004225" />
        <Text style={styles.mapPlaceholderText}>Interactive Map</Text>
        <Text style={styles.mapPlaceholderSubtext}>Location: Johannesburg, South Africa</Text>
        <Pressable style={styles.mapButton} onPress={openMap}>
          <Text style={styles.mapButtonText}>Open in Google Maps</Text>
        </Pressable>
      </View>
    );
  };


  return (
    <View style={{ flex: 1 }}>
    {/* KeyboardAvoidingView helps prevent the keyboard from covering input fields. */}
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#f8f9fa' }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Main Content */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get In Touch With Us</Text>
          <Text style={styles.introText}>
            We're here to answer any questions you may have about our courses, enrollment process, or anything else.
            Reach out to us and we'll respond as soon as we can.
          </Text>

          {/* Contact Container */}
          <View style={styles.contactContainer}>
            {/* The form for users to send a direct message. */}
            {/* Contact Form */}
            <View style={styles.contactForm}>
              <Text style={styles.contactFormTitle}>Send Us a Message</Text>

              {error && <Text style={styles.errorText}>{error}</Text>}

              <TextInput
                style={[styles.formInput, focusedInput === 'name' && styles.inputFocused]}
                placeholder="Full Name *"
                value={name}
                onChangeText={setName}
                onFocus={() => setFocusedInput('name')}
                onBlur={() => setFocusedInput(null)}
                placeholderTextColor="#888"
              />

              <TextInput
                style={[styles.formInput, focusedInput === 'email' && styles.inputFocused]}
                placeholder="Email Address *"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
                placeholderTextColor="#888"
              />

              <TextInput
                style={[styles.formInput, focusedInput === 'phone' && styles.inputFocused]}
                placeholder="Phone Number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                onFocus={() => setFocusedInput('phone')}
                onBlur={() => setFocusedInput(null)}
                placeholderTextColor="#888"
              />

              <TextInput
                style={[styles.formInput, focusedInput === 'subject' && styles.inputFocused]}
                placeholder="Subject *"
                value={subject}
                onChangeText={setSubject}
                onFocus={() => setFocusedInput('subject')}
                onBlur={() => setFocusedInput(null)}
                placeholderTextColor="#888"
              />

              <TextInput
                style={[
                  styles.formInput,
                  styles.messageInput,
                  focusedInput === 'message' && styles.inputFocused,
                ]}
                placeholder="Your Message *"
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                onFocus={() => setFocusedInput('message')}
                onBlur={() => setFocusedInput(null)}
                placeholderTextColor="#888"
              />

              <Pressable
                style={({ pressed }) => [styles.submitButton, (pressed || isLoading) && styles.buttonPressed]}
                onPress={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : (
                  <Text style={styles.submitButtonText}>SEND MESSAGE</Text>
                )}
              </Pressable>
            </View>

            {/* A section displaying all the ways a user can get in touch. */}
            {/* Contact Information */}
            <View style={styles.contactInfo}>
              <Text style={styles.contactInfoTitle}>Contact Information</Text>

              <Pressable
                style={({ pressed }) => [styles.contactItem, pressed && styles.contactItemPressed]}
                onPress={openMap}
              >
                <Icon name="map-marker" size={24} color="#CFB53B" style={styles.contactIcon} />
                <View style={styles.contactDetails}>
                  <Text style={styles.contactType}>Address</Text>
                  <Text style={styles.contactValue}>123 Education St</Text>
                  <Text style={styles.contactValue}>Johannesburg, South Africa</Text>
                </View>
              </Pressable>

              <Pressable
                style={({ pressed }) => [styles.contactItem, pressed && styles.contactItemPressed]}
                onPress={callPhone}
              >
                <Icon name="phone" size={24} color="#CFB53B" style={styles.contactIcon} />
                <View style={styles.contactDetails}>
                  <Text style={styles.contactType}>Phone</Text>
                  <Text style={styles.contactValue}>+27 11 123 4567</Text>
                  <Text style={styles.contactValue}>+27 82 123 4567 (Mobile)</Text>
                </View>
              </Pressable>

              <Pressable
                style={({ pressed }) => [styles.contactItem, pressed && styles.contactItemPressed]}
                onPress={sendEmail}
              >
                <Icon name="envelope" size={24} color="#CFB53B" style={styles.contactIcon} />
                <View style={styles.contactDetails}>
                  <Text style={styles.contactType}>Email</Text>
                  <Text style={styles.contactValue}>info@empoweringthenation.org.za</Text>
                  <Text style={styles.contactValue}>admissions@empoweringthenation.org.za</Text>
                </View>
              </Pressable>

              <View style={styles.contactItem}>
                <Icon name="clock-o" size={24} color="#CFB53B" style={styles.contactIcon} />
                <View style={styles.contactDetails}>
                  <Text style={styles.contactType}>Office Hours</Text>
                  <Text style={styles.contactValue}>Monday - Friday: 8:00 AM - 5:00 PM</Text>
                  <Text style={styles.contactValue}>Saturday: 9:00 AM - 1:00 PM</Text>
                  <Text style={styles.contactValue}>Sunday: Closed</Text>
                </View>
              </View>
            </View>
          </View>

          {/* The map section with our placeholder component. */}
          {/* Map Section */}
          <View style={styles.mapSection}>
            <Text style={styles.sectionTitle}>Find Us</Text>
            <Text style={styles.mapDescription}>
              Visit our campus or training centers. See the map below for directions.
            </Text>
            <SimpleMapView />
          </View>
        </View>

        {/* An accordion-style FAQ section to answer common questions. */}
        {/* FAQ Section */}
        <View style={styles.faqSection}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>

          <View style={styles.faqContainer}>
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <View key={index} style={styles.faqItem}>
                  <TouchableOpacity onPress={() => setOpenFaqIndex(isOpen ? null : index)} style={styles.faqQuestionContainer}>
                    <Text style={styles.faqQuestion}>{faq.question}</Text>
                    <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} size={16} color="#004225" />
                  </TouchableOpacity>
                  {isOpen && <Text style={styles.faqAnswer}>{faq.answer}</Text>}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, // Add some padding to the top
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
    alignSelf: 'center', // Keeps the title centered
  },
  introText: {
    fontSize: 18,
    color: '#002a18',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 26,
    maxWidth: 800,
  },
  // Contact Container
  contactContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 30,
    marginBottom: 30,
    justifyContent: 'center',
    width: '100%',
  },
  // Contact Information
  contactInfo: {
    flex: 1,
    minWidth: 300,
    maxWidth: 400,
    backgroundColor: '#D9D9D9',
    padding: 30,
    borderRadius: 8,
  },
  contactInfoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004225',
    marginBottom: 25,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#CFB53B',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 25,
  },
  contactItemPressed: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 8,
  },
  contactIcon: {
    marginRight: 15,
    marginTop: 2,
  },
  contactDetails: {
    flex: 1,
  },
  contactType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004225',
    marginBottom: 8,
  },
  contactValue: {
    fontSize: 16,
    color: '#002a18',
    marginBottom: 3,
    lineHeight: 20,
  },
  // Contact Form
  contactForm: {
    flex: 1,
    minWidth: 300,
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactFormTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004225',
    marginBottom: 25,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#CFB53B',
  },
  errorText: {
    color: '#D32F2F',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 15,
    fontWeight: '600',
  },
  formInput: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    color: '#333',
  },
  inputFocused: {
    borderColor: '#004225',
  },
  messageInput: {
    height: 120,
  },
  submitButton: {
    backgroundColor: '#004225',
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    height: 55,
  },
  buttonPressed: {
    backgroundColor: '#005a34', // A darker green for pressed state
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  // Map Section
  mapSection: {
    marginTop: 30,
    alignItems: 'center',
    width: '100%',
  },
  mapDescription: {
    fontSize: 18,
    color: '#002a18',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
    maxWidth: 800,
  },
  mapPlaceholder: {
    height: 300,
    width: '100%',
    maxWidth: 800,
    borderRadius: 8,
    backgroundColor: '#e9ecef',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  mapPlaceholderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004225',
    marginTop: 15,
  },
  mapPlaceholderSubtext: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    marginBottom: 20,
  },
  mapButton: {
    backgroundColor: '#004225',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  mapButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // FAQ Section
  faqSection: {
    backgroundColor: '#f8f9fa',
    padding: 40,
    margin: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  faqContainer: {
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  faqItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  faqQuestionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 66, 37, 0.1)',
  },
  faqQuestion: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004225',
  },
  faqAnswer: {
    padding: 20,
    fontSize: 16,
    color: '#002a18',
    lineHeight: 24,
  },
});

export default ContactScreen;