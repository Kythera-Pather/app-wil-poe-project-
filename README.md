# Empowering the Nation
## Web and Mobile App Project – README Overview

--

# Overview of the WIL POE
Empowering the Nation is a small-to-medium enterprise (SME) founded by Precious Radebe in 2022. The organisation provides skills training for domestic workers and gardeners in Johannesburg, South Africa. The goal of this digital project is to design and develop a responsive website and mobile application that helps the business reach a wider audience, advertise training programmes, and allow potential customers to request quotes or information directly online.

- We were given a scenario and needed to give a solution to it, and that was making a Website and App for Empowering the nation
- We had to code in typescript react natie and develop these 2 projects

# Project Purpose
## The website and mobile app aim to:
- Advertise training courses offered by Empowering the Nation.
- Allow customers (employers or employees) to select and request quotes for one or more courses.
- Provide an automated discount system based on the number of courses selected.
- Maintain a professional design that reflects the company’s mission and values.
- Had to have a calculator that calculates the discounds, vat and total amount at the end
- Need to have a discription of each course and whats to be expected

## Key Features

*   **Course Catalogue**: Browse detailed descriptions of all available courses, including what to expect from each program.
*   **Course Selection & Fee Calculator**: Users can select one or more courses and see the total cost calculated in real-time.
*   **Automated Discounts**: A discount system is automatically applied based on the number of courses selected:
    *   **5%** discount for 2 courses.
    *   **10%** discount for 3 courses.
    *   **15%** discount for 4 or more courses.
*   **VAT Calculation**: All fees include a 15% VAT, which is calculated on the discounted subtotal.
*   **User Authentication**: Secure sign-up and login functionality for a personalized experience.
*   **Quote & Enrollment Request**: After calculating the fees, users can submit their information to receive a formal quote or begin the enrollment process.
*   **Invoice Generation**: A simple invoice is displayed upon enrollment request, providing a summary and a unique reference number.
*   **Contact Form**: A dedicated contact page with a form for inquiries and detailed contact information.
*   **Responsive Design**: The UI is designed to be accessible and user-friendly across both web and mobile platforms.


## Discount Structure
Number of Courses	Discount
One course	0%
Two courses	5%
Three courses	10%
More than three	15%

## Courses Offered
### Six-Month Learnerships (R1500 each)

*   **First Aid**: Comprehensive training in basic life support, CPR, and emergency care.
*   **Sewing**: Learn garment tailoring, stitching, and alteration techniques.
*   **Landscaping**: Master the art of designing and maintaining beautiful, sustainable gardens.
*   **Life Skills**: Develop essential skills in literacy, basic finance, and personal management.

### Six-Week Short Courses (R750 each)

*   **Child Minding**: Covers the fundamentals of infant and toddler care, safety, and development.
*   **Cooking & Nutrition**: Learn to prepare nutritious and delicious family meals.
*   **Garden Maintenance**: Focuses on practical skills like pruning, watering, and plant propagation.

## System Features
- Homepage: Displays business overview and available courses.
- Course Selection Page: Allows customers to choose multiple courses.
- Quote Calculator: Automatically applies discounts.
- Contact Form: Enables potential customers to request information or a quote.
- Responsive Design: Ensures accessibility across web and mobile platforms.
- Invoice: A form that tell the user they be given a quote or message to pay

## Technology Stack
*   **Framework**: React Native
*   **Language**: TypeScript
*   **Navigation**: React Navigation (`@react-navigation/stack`)
*   **Icons**: React Native Vector Icons (`react-native-vector-icons/FontAwesome`)
*   **Platform**: Configured for cross-platform deployment (iOS/Android)

## Project Structure

The project follows a standard React Native structure. Key directories include:

```
/
├── android/              # Android native project
├── ios/                  # iOS native project
├── assets/               # Images, logos, and other static assets
└── screens/              # All application screens and components
    ├── AboutScreen.tsx
    ├── BottomNavBar.tsx
    ├── ContactScreen.tsx
    ├── CourseSelectionScreen.tsx
    ├── FeeCalculationResultsScreen.tsx
    ├── HomeScreen.tsx
    ├── LoginScreen.tsx
    ├── SignUpScreen.tsx
    ├── ... (and other screen components)
└── App.tsx               # Main application component with navigation stack
