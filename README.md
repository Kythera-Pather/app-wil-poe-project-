# Empowering the Nation
## Web and Mobile App Project – README Overview

---

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

---

+## detail of each screen +
### +* App.tsx: The root component of the application. It initializes the StackNavigator from React Navigation, defining all possible routes and linking them to their respective screen components. It also configures the global header style for the app.
### +* HomeScreen.tsx: The main landing page and dashboard. It displays a welcome message to logged-in users or an "Account" dropdown for guests. The screen features an overview of the organization, key statistics, popular courses, and multiple calls-to-action to encourage user engagement.
### +* SignUpScreen.tsx: A form for new users to create an account. It captures the user's full name, email, and password, performs validation, and provides feedback on success or failure. +* LoginScreen.tsx: A form for existing users to sign in. It authenticates users based on email and password and, upon success, navigates them to the home screen with a personalized state.
###  +* AboutScreen.tsx: Provides a comprehensive overview of the "Empowering the Nation" organization. It details the founder's story, the company's mission, and showcases its impact through statistics and key values.
### +* ContactScreen.tsx: A multi-functional contact page. It includes a form for sending inquiries, detailed contact information (address, phone, email), office hours, an interactive map link, and a Frequently Asked Questions (FAQ) section to address common queries. ### +* CourseOptionsScreen.tsx: Acts as a simple navigation hub for the course catalogue. It presents users with two clear choices: exploring the 6-Week Short Courses or the 6-Month Learnerships.
### +* SixMonthCoursesScreen.tsx / SixWeekCoursesScreen.tsx: These screens serve as catalogues, displaying all available courses within their respective categories. Each course is presented in a detailed card format with an image, description, price, and a button to view more information. ### +* FirstAidCourseScreen.tsx (and other individual course screens): Each course has its own dedicated detail page. These screens provide an in-depth program overview, curriculum highlights, benefits, target audience, and a direct call-to-action to enroll.
### +* CourseSelectionScreen.tsx: A crucial interactive screen where users can select one or more courses to generate a quote. It includes fields for personal information, a complete list of selectable courses, and a button to trigger the fee calculation.
### +* FeeCalculationResultsScreen.tsx: Displays a detailed breakdown of the costs after a user submits their course selection. It clearly lists the subtotal, any applicable discounts, VAT, and the final total. This screen also contains the "Enroll Now" button, which generates a modal invoice.
### +* BottomNavBar.tsx: A persistent navigation component that appears at the bottom of most screens. It provides quick and easy access to the main sections of the app: Home, Courses, About, and Contact. +

---

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

---

