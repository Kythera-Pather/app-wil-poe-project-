import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert, Image, Pressable, PressableStateCallbackType, Modal } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavBar from '../screens/BottomNavBar';


type FeeCalculationResultsScreenRouteProp = RouteProp<RootStackParamList, 'FeeCalculationResults'>;
type FeeCalculationResultsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'FeeCalculationResults'>;
type PressableState = { pressed: boolean; hovered?: boolean };

interface Props {
  route: FeeCalculationResultsScreenRouteProp;
  navigation: FeeCalculationResultsScreenNavigationProp;
}

const FeeCalculationResultsScreen: React.FC<Props> = ({ route, navigation }) => {
  const {
    personalInfo,
    selectedCourses,
    subtotal,
    discount,
    discountAmount,
    discountedSubtotal,
    vatAmount,
    total,
    userName,
  } = route.params;

  const [isInvoiceVisible, setInvoiceVisible] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  const generateReferenceNumber = () => {
    // Simple reference number generator
    const prefix = 'ETN-ENROLL';
    const timestamp = Date.now();
    return `${prefix}-${timestamp}`;
  };

  const handleEnroll = () => {
    const refNum = generateReferenceNumber();
    setReferenceNumber(refNum);
    setInvoiceVisible(true);
  };

  const handleCloseInvoice = () => {
    setInvoiceVisible(false);
    Alert.alert(
      'Enrollment Submitted',
      `Thank you, ${personalInfo.name}! We will be in contact shortly to finalize your enrollment. Your reference is ${referenceNumber}.`
    );
    // Optional: Navigate to home screen after enrollment
    // navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isInvoiceVisible}
        onRequestClose={handleCloseInvoice}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ScrollView contentContainerStyle={styles.modalScrollView}>
              <View style={styles.invoiceHeader}>
                <Image source={require('../assets/LOGO.png')} style={styles.invoiceLogo} />
                <Text style={styles.invoiceTitle}>Enrollment Invoice</Text>
              </View>

              <View style={styles.invoiceSection}>
                <View style={styles.invoiceRow}>
                  <Text style={styles.invoiceLabel}>Reference #:</Text>
                  <Text style={styles.invoiceValue}>{referenceNumber}</Text>
                </View>
                <View style={styles.invoiceRow}>
                  <Text style={styles.invoiceLabel}>Date:</Text>
                  <Text style={styles.invoiceValue}>{new Date().toLocaleDateString()}</Text>
                </View>
              </View>

              <View style={styles.invoiceSection}>
                <Text style={styles.invoiceSectionTitle}>Bill To</Text>
                <Text style={styles.invoiceText}>{personalInfo.name}</Text>
                <Text style={styles.invoiceText}>{personalInfo.email}</Text>
                <Text style={styles.invoiceText}>{personalInfo.phone}</Text>
              </View>

              <View style={styles.invoiceSection}>
                <Text style={styles.invoiceSectionTitle}>Course Summary</Text>
                <View style={styles.tableHeader}>
                  <Text style={[styles.tableHeaderText, { flex: 3 }]}>Course Name</Text>
                  <Text style={[styles.tableHeaderText, { flex: 1, textAlign: 'right' }]}>Price</Text>
                </View>
                {selectedCourses.map(course => (
                  <View key={course.id} style={styles.tableRow}>
                    <Text style={[styles.tableCell, { flex: 3 }]}>{course.name}</Text>
                    <Text style={[styles.tableCell, { flex: 1, textAlign: 'right' }]}>R{course.price.toFixed(2)}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.invoiceTotals}>
                <View style={styles.invoiceRow}>
                  <Text style={styles.invoiceLabel}>Subtotal</Text>
                  <Text style={styles.invoiceValue}>R{subtotal.toFixed(2)}</Text>
                </View>
                {discount > 0 && (
                  <View style={styles.invoiceRow}>
                    <Text style={styles.invoiceLabel}>Discount ({discount * 100}%)</Text>
                    <Text style={styles.invoiceValue}>-R{discountAmount.toFixed(2)}</Text>
                  </View>
                )}
                <View style={styles.invoiceRow}>
                  <Text style={styles.invoiceLabel}>VAT (15%)</Text>
                  <Text style={styles.invoiceValue}>R{vatAmount.toFixed(2)}</Text>
                </View>
                <View style={[styles.invoiceRow, styles.invoiceFinalTotal]}>
                  <Text style={styles.invoiceTotalLabel}>Total Due</Text>
                  <Text style={styles.invoiceTotalValue}>R{total.toFixed(2)}</Text>
                </View>
              </View>

              <View style={styles.paidStamp}>
                <Text style={styles.paidStampText}>NOT PAID</Text>
              </View>

              <Text style={styles.thankYouMessage}>Thank you for your enrollment! A copy of this invoice and further instructions will be sent to your email.</Text>

              <Pressable style={styles.closeButton} onPress={handleCloseInvoice}>
                <Text style={styles.closeButtonText}>CLOSE</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>

    <ScrollView style={styles.container}>
      {/* Main Content */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fee Calculation Results</Text>
        
        {/* Content Container */}
        <View style={styles.contentContainer}>
          {/* Personal Information */}
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Personal Information</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Name:</Text>
              <Text style={styles.infoValue}>{personalInfo.name}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Phone:</Text>
              <Text style={styles.infoValue}>{personalInfo.phone}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Email:</Text>
              <Text style={styles.infoValue}>{personalInfo.email}</Text>
            </View>
          </View>
          
          {/* Selected Courses */}
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Selected Courses</Text>
            {selectedCourses.map((course: { id: string; name: string; price: number }) => (
              <View key={course.id} style={styles.courseRow}>
                <Text style={styles.courseName}>{course.name}</Text>
                <Text style={styles.coursePrice}>R{course.price.toFixed(2)}</Text>
              </View>
            ))}
          </View>
          
          {/* Fee Breakdown */}
          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Fee Breakdown</Text>
            
            <View style={styles.calculationRow}>
              <Text style={styles.calculationLabel}>Subtotal</Text>
              <Text style={styles.calculationValue}>R{subtotal.toFixed(2)}</Text>
            </View>
            
            {discount > 0 && (
              <>
                <View style={[styles.calculationRow, styles.discountRow]}>
                  <Text style={styles.calculationLabel}>Discount ({discount * 100}%)</Text>
                  <Text style={[styles.calculationValue, styles.discountValue]}>-R{discountAmount.toFixed(2)}</Text>
                </View>
                
                <View style={styles.calculationRow}>
                  <Text style={styles.calculationLabel}>Discounted Subtotal</Text>
                  <Text style={styles.calculationValue}>R{discountedSubtotal.toFixed(2)}</Text>
                </View>
              </>
            )}
            
            <View style={styles.calculationRow}>
              <Text style={styles.calculationLabel}>VAT (15%)</Text>
              <Text style={styles.calculationValue}>R{vatAmount.toFixed(2)}</Text>
            </View>
            
            <View style={[styles.calculationRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Total Fee</Text>
              <Text style={styles.totalValue}>R{total.toFixed(2)}</Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonsContainer}>
            <Pressable
              style={({ hovered }: PressableState) => [styles.enrollButton, hovered && styles.enrollButtonHover]}
              onPress={handleEnroll}
            >
              <Icon name="check-circle" size={20} color="#fff" style={styles.buttonIcon} />
              <Text style={styles.enrollButtonText}>ENROLL NOW</Text>
            </Pressable>

            <Pressable
              style={({ hovered }: PressableState) => [styles.backButton, hovered && styles.backButtonHover]}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>BACK TO COURSE SELECTION</Text>
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
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
    fontSize: 20,
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
    marginBottom: 30,
    paddingBottom: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#CFB53B',
    alignSelf: 'center',
    width: '50%',
  },
  // Content Container for Centralization
  contentContainer: {
    width: '100%',
    maxWidth: 800,
    alignItems: 'center',
  },
  // Info Cards
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 25,
    marginBottom: 25,
    width: '100%',
    maxWidth: 600,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004225',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#CFB53B',
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#002a18',
  },
  infoValue: {
    fontSize: 16,
    color: '#002a18',
    fontWeight: '500',
  },
  courseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  courseName: {
    fontSize: 16,
    color: '#002a18',
    flex: 1,
    marginRight: 10,
  },
  coursePrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#CFB53B',
    minWidth: 80,
    textAlign: 'right',
  },
  calculationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  calculationLabel: {
    fontSize: 16,
    color: '#002a18',
    fontWeight: '500',
  },
  calculationValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#002a18',
  },
  discountRow: {
    backgroundColor: 'rgba(207, 181, 59, 0.1)',
    borderRadius: 4,
    marginHorizontal: 5,
  },
  discountValue: {
    color: '#CFB53B',
    fontWeight: 'bold',
  },
  totalRow: {
    borderTopWidth: 2,
    borderTopColor: '#004225',
    marginTop: 15,
    paddingTop: 15,
    backgroundColor: 'rgba(0, 66, 37, 0.05)',
    borderRadius: 4,
    marginHorizontal: 5,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004225',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004225',
  },
  // Buttons
  buttonsContainer: {
    marginTop: 20,
    width: '100%',
    maxWidth: 600,
    alignItems: 'center',
  },
  enrollButton: {
    backgroundColor: '#004225',
    padding: 16,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    width: '100%',
    maxWidth: 400,
  },
  enrollButtonHover: {
    backgroundColor: '#002a18',
  },
  buttonIcon: {
    marginRight: 10,
  },
  enrollButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    backgroundColor: 'transparent',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#004225',
    width: '100%',
    maxWidth: 400,
  },
  backButtonHover: {
    backgroundColor: 'rgba(0, 66, 37, 0.1)',
  },
  backButtonText: {
    color: '#004225',
    fontWeight: 'bold',
    fontSize: 16,
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
  // Dropdown styles
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
  // Modal & Invoice Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '100%',
    maxWidth: 500,
    maxHeight: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  modalScrollView: {
    padding: 25,
  },
  invoiceHeader: {
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  invoiceLogo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  invoiceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004225',
  },
  invoiceSection: {
    marginBottom: 20,
  },
  invoiceSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004225',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#CFB53B',
  },
  invoiceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  invoiceLabel: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  invoiceValue: {
    fontSize: 14,
    color: '#002a18',
    fontWeight: '600',
  },
  invoiceText: {
    fontSize: 14,
    color: '#002a18',
    lineHeight: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  tableHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#004225',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  tableCell: {
    fontSize: 14,
    color: '#333',
  },
  invoiceTotals: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: '#eee',
  },
  invoiceFinalTotal: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: '#004225',
  },
  invoiceTotalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004225',
  },
  invoiceTotalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004225',
  },
  paidStamp: {
    position: 'absolute',
    top: 100,
    right: 20,
    borderWidth: 4,
    borderColor: '#dc3545',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    transform: [{ rotate: '-15deg' }],
    opacity: 0.8,
  },
  paidStampText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#dc3545',
    textTransform: 'uppercase',
  },
  thankYouMessage: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 30,
  },
  closeButton: {
    backgroundColor: '#004225',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FeeCalculationResultsScreen;