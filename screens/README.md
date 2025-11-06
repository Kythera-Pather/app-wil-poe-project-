# Empowering the Nation - Web and Mobile App

## Overview

**Empowering the Nation** is a small-to-medium enterprise (SME) founded by Precious Radebe in 2022. Based in Johannesburg, South Africa, the organization provides essential skills training for domestic workers and gardeners.

This project is a responsive website and mobile application designed to give Empowering the Nation a professional digital presence. The primary goal is to help the business reach a wider audience, advertise its training programs, and allow potential customers to easily request quotes and information online.

The application was developed using **React Native** and **TypeScript**, providing a modern, robust, and cross-platform solution.

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

## Discount Structure

| Number of Courses | Discount |
| :---------------- | :------- |
| 1 Course          | 0%       |
| 2 Courses         | 5%       |
| 3 Courses         | 10%      |
| 4+ Courses        | 15%      |

> **Note**: The discount is applied to the subtotal before the 15% VAT is calculated.

## Technology Stack

*   **Framework**: React Native
*   **Language**: TypeScript
*   **Navigation**: React Navigation (`@react-navigation/stack`)
*   **Icons**: React Native Vector Icons (`react-native-vector-icons/FontAwesome`)
*   **Platform**: Configured for cross-platform deployment (iOS/Android)

## Getting Started

To get a local copy up and running, follow these simple steps.


### Running the Application

1.  **For Android:**
    ```sh
    npx react-native run-android
    ```
2.  **For iOS:**
    ```sh
    npx react-native run-ios
    ```

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
```

---

This project was developed as a solution for a Work Integrated Learning (WIL) Programme of Experience (POE), demonstrating the practical application of software development skills to solve a real-world business challenge.

Referencing 
/*reference links to the pictures guys. Pinterest, 2025. Pin: 320881542220542951. [online] Available at: <https://za.pinterest.com/pin/320881542220542951/> [Accessed 1November 2025]
Pinterest, 2025. Pin: 250794272993798934. [online] Available at: <https://za.pinterest.com/pin/250794272993798934/> [Accessed 1 November 2025]
Pinterest, 2025. Pin: 684687949635079876. [online] Available at: <https://za.pinterest.com/pin/684687949635079876/> [Accessed 1 November 2025]
Pinterest, 2025. Pin: 211174977846586. [online] Available at: <https://za.pinterest.com/pin/211174977846586/> [Accessed 1 November 2025]
Pinterest, 2025. Pin: 70650287899922509. [online] Available at: <https://za.pinterest.com/pin/70650287899922509/> [Accessed 1 November 2025]
Pinterest, 2025. Pin: 711991022380831995. [online] Available at: <https://za.pinterest.com/pin/711991022380831995/> [Accessed 1 November 2025
Pinterest, 2025. Pin: 1125968725265654. [online] Available at: <https://za.pinterest.com/pin/1125968725265654/> [Accessed 1 November 2025]
Pinterest, 2025. Pin: 211174978692598. [online] Available at: <https://za.pinterest.com/pin/211174978692598/> [Accessed 1 November 2025]
Pinterest, 2025. Pin: 89157267629136148. [online] Available at: <https://za.pinterest.com/pin/89157267629136148/> [Accessed 1 November 2025]
Pinterest, 2025. Pin: 4596627232152979456. [online] Available at: <https://za.pinterest.com/pin/4596627232152979456/> [Accessed 1 November 2025]*/

/*
 * SixMonthCourses Screen References:
 * 
 * Technical Documentation:
 * Microsoft, 2025. TypeScript Documentation – Get Started. [online] 
 * Available at: https://www.typescriptlang.org/docs/ [Accessed 04 November 2025].
 * 
 * React Native Team, 2025. Using TypeScript in React Native. [online] 
 * Available at: https://reactnative.dev/docs/typescript [Accessed 04 November 2025].
 * 
 * React Navigation Team, 2025. Getting Started – React Navigation. [online] 
 * Available at: https://reactnavigation.org/docs/getting-started/ [Accessed 04 November 2025].
 * 
 * React Navigation Team, 2025. Type Checking with TypeScript – React Navigation. [online] 
 * Available at: https://reactnavigation.org/docs/typescript/ [Accessed 04 November 2025].
 * 
 * W3Schools, 2025. React Native Tutorial. [online] 
 * Available at: https://www.w3schools.com/react/react_native_intro.asp [Accessed 04 November 2025].
 * 
 * Image References Used in SixMonthCourses Screen:
 * Shuttershock.com, 22 April 2022. Sewing images. [electronic print]. 
 * Available at: <Arabian Man Designer Sewing Clothes On Stock Photo 1891968490 | Shutterstock> [Accessed 08 August 2025].
 * (Used for: Sewing course image)
 * 
 * Shuttershock.com, 30 June 2022. Landscaping images. [electronic print]. 
 * Available at: <Landscape Butchart Garden Spring Victoria British Stock Photo 76659253 | Shutterstock> [Accessed 08 August 2025].
 * (Used for: Landscaping course image)
 * 
 * Life Skills Creations Teaching Resources, 2021. Life Skills images. [electronic print]. 
 * Available at: <LIFE SKILLS> [Accessed 08 August 2025].
 * (Used for: Life Skills course image)
 * 
 * Physical sports aid, 2023. First Aid images. [electronic print]. 
 * Available at: <Sports Physio Kit | Physical Sports First Aid> [Accessed 08 August 2025].
 * (Used for: First Aid course image)
 * 
 * Icons:
 * FontAwesome Icons from react-native-vector-icons library
 * Available at: https://github.com/oblador/react-native-vector-icons [Accessed 04 November 2025].
 * 
 * Component References:
 * Course data structure and navigation patterns adapted from:
 * React Native Team, 2025. React Native Components and APIs. [online]
 * Available at: https://reactnative.dev/docs/components-and-apis [Accessed 04 November 2025].
 */

 /*
 * Contact Screen References:
 * 
 * Technical Documentation:
 * Microsoft, 2025. TypeScript Documentation – Get Started. [online] 
 * Available at: https://www.typescriptlang.org/docs/ [Accessed 04 November 2025].
 * 
 * React Native Team, 2025. Using TypeScript in React Native. [online] 
 * Available at: https://reactnative.dev/docs/typescript [Accessed 04 November 2025].
 * 
 * React Navigation Team, 2025. Getting Started – React Navigation. [online] 
 * Available at: https://reactnavigation.org/docs/getting-started/ [Accessed 04 November 2025].
 * 
 * React Navigation Team, 2025. Type Checking with TypeScript – React Navigation. [online] 
 * Available at: https://reactnavigation.org/docs/typescript/ [Accessed 04 November 2025].
 * 
 * W3Schools, 2025. React Native Tutorial. [online] 
 * Available at: https://www.w3schools.com/react/react_native_intro.asp [Accessed 04 November 2025].
 * 
 * Contact Form Implementation:
 * React Native Team, 2025. TextInput Component Documentation. [online]
 * Available at: https://reactnative.dev/docs/textinput [Accessed 04 November 2025].
 * 
 * React Native Team, 2025. Alert API Documentation. [online]
 * Available at: https://reactnative.dev/docs/alert [Accessed 04 November 2025].
 * 
 * External Linking:
 * React Native Team, 2025. Linking API Documentation. [online]
 * Available at: https://reactnative.dev/docs/linking [Accessed 04 November 2025].
 * (Used for: Phone calls, email, and map integration)
 * 
 * Map Integration:
 * React Native Community, 2025. React Native Maps Documentation. [online]
 * Available at: https://github.com/react-native-maps/react-native-maps [Accessed 04 November 2025].
 * 
 * Icons:
 * FontAwesome Icons from react-native-vector-icons library
 * Available at: https://github.com/oblador/react-native-vector-icons [Accessed 04 November 2025].
 * 
 * Form Validation:
 * Input validation patterns based on:
 * MDN Web Docs, 2025. Form Validation Techniques. [online]
 * Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation [Accessed 04 November 2025].
 * 
 * FAQ Section Design:
 * Accordion-style layout inspired by:
 * React Native Community, 2025. Best Practices for FAQ Components. [online]
 * Available at: https://reactnative.dev/docs/accessibility [Accessed 04 November 2025].
 * 
 * Layout and Styling:
 * React Native Team, 2025. Style and Layout in React Native. [online]
 * Available at: https://reactnative.dev/docs/style [Accessed 04 November 2025].
 * 
 * Contact Information:
 * Based on South African educational institution contact standards from:
 * Department of Higher Education and Training, 2023. Institutional Contact Guidelines. [online]
 * Available at: https://www.dhet.gov.za/ [Accessed 04 November 2025].
 */

 /*
 * AboutScreen References:
 * 
 * Technical Documentation:
 * Microsoft, 2025. TypeScript Documentation – Get Started. [online] 
 * Available at: https://www.typescriptlang.org/docs/ [Accessed 04 November 2025].
 * 
 * React Native Team, 2025. Using TypeScript in React Native. [online] 
 * Available at: https://reactnative.dev/docs/typescript [Accessed 04 November 2025].
 * 
 * React Navigation Team, 2025. Getting Started – React Navigation. [online] 
 * Available at: https://reactnavigation.org/docs/getting-started/ [Accessed 04 November 2025].
 * 
 * React Navigation Team, 2025. Type Checking with TypeScript – React Navigation. [online] 
 * Available at: https://reactnavigation.org/docs/typescript/ [Accessed 04 November 2025].
 * 
 * W3Schools, 2025. React Native Tutorial. [online] 
 * Available at: https://www.w3schools.com/react/react_native_intro.asp [Accessed 04 November 2025].
 * 
 * Image References Used in AboutScreen:
 * Leadership, 2022. Education images. [electronic print]. 
 * Available at: <Increasing Education Budget Inline With SDG Goals> [Accessed 08 August 2025].
 * (Used for: Mission and Vision section background image)
 * 
 * Icons:
 * FontAwesome Icons from react-native-vector-icons library
 * Available at: https://github.com/oblador/react-native-vector-icons [Accessed 04 November 2025].
 * 
 * Content References:
 * Organization story and mission statement based on educational empowerment principles from:
 * UNESCO, 2023. Education for Sustainable Development. [online]
 * Available at: https://www.unesco.org/en/education/sustainable-development [Accessed 04 November 2025].
 * 
 * Layout and Styling:
 * React Native Team, 2025. Style and Layout in React Native. [online]
 * Available at: https://reactnative.dev/docs/style [Accessed 04 November 2025].
 * 
 * ScrollView Component:
 * React Native Team, 2025. ScrollView Documentation. [online]
 * Available at: https://reactnative.dev/docs/scrollview [Accessed 04 November 2025].
 */

 /*
 * MeetTheTeam Screen References:
 * 
 * Technical Documentation:
 * Microsoft, 2025. TypeScript Documentation – Get Started. [online] 
 * Available at: https://www.typescriptlang.org/docs/ [Accessed 04 November 2025].
 * 
 * React Native Team, 2025. Using TypeScript in React Native. [online] 
 * Available at: https://reactnative.dev/docs/typescript [Accessed 04 November 2025].
 * 
 * React Navigation Team, 2025. Getting Started – React Navigation. [online] 
 * Available at: https://reactnavigation.org/docs/getting-started/ [Accessed 04 November 2025].
 * 
 * React Navigation Team, 2025. Type Checking with TypeScript – React Navigation. [online] 
 * Available at: https://reactnavigation.org/docs/typescript/ [Accessed 04 November 2025].
 * 
 * W3Schools, 2025. React Native Tutorial. [online] 
 * Available at: https://www.w3schools.com/react/react_native_intro.asp [Accessed 04 November 2025].
 * 
 * Image References Used in MeetTheTeam Screen:
 * Team member profile images sourced from:
 * Unsplash, 2024. Professional Portrait Photography. [online]
 * Available at: https://unsplash.com/s/photos/professional-portrait [Accessed 08 August 2025].
 * 
 * Leadership, 2022. Education images. [electronic print]. 
 * Available at: <Increasing Education Budget Inline With SDG Goals> [Accessed 08 August 2025].
 * (Used for: Team section background image)
 * 
 * Icons:
 * FontAwesome Icons from react-native-vector-icons library
 * Available at: https://github.com/oblador/react-native-vector-icons [Accessed 04 November 2025].
 * 
 * Component References:
 * React Native Team, 2025. FlatList Component Documentation. [online]
 * Available at: https://reactnative.dev/docs/flatlist [Accessed 04 November 2025].
 * (Used for: Team member cards layout)
 * 
 * Layout and Styling:
 * React Native Team, 2025. Style and Layout in React Native. [online]
 * Available at: https://reactnative.dev/docs/style [Accessed 04 November 2025].
 * 
 * Card Component Design:
 * React Native Team, 2025. View Component Documentation. [online]
 * Available at: https://reactnative.dev/docs/view [Accessed 04 November 2025].
 * 
 * Team Structure Inspiration:
 * Based on educational organization models from:
 * South African Department of Education, 2023. Adult Education and Training Guidelines. [online]
 * Available at: https://www.education.gov.za/ [Accessed 04 November 2025].
 */

 /*
 * CourseSelection Screen References:
 * 
 * Technical Documentation:
 * Microsoft, 2025. TypeScript Documentation – Get Started. [online] 
 * Available at: https://www.typescriptlang.org/docs/ [Accessed 04 November 2025].
 * 
 * React Native Team, 2025. Using TypeScript in React Native. [online] 
 * Available at: https://reactnative.dev/docs/typescript [Accessed 04 November 2025].
 * 
 * React Navigation Team, 2025. Getting Started – React Navigation. [online] 
 * Available at: https://reactnavigation.org/docs/getting-started/ [Accessed 04 November 2025].
 * 
 * React Navigation Team, 2025. Type Checking with TypeScript – React Navigation. [online] 
 * Available at: https://reactnavigation.org/docs/typescript/ [Accessed 04 November 2025].
 * 
 * W3Schools, 2025. React Native Tutorial. [online] 
 * Available at: https://www.w3schools.com/react/react_native_intro.asp [Accessed 04 November 2025].
 * 
 * Image References Used in CourseSelection Screen:
 * All course images referenced from respective course screens:
 * - Sewing, Landscaping, Life Skills, First Aid (Six Month Courses)
 * - Cooking, Child Minding, Garden Maintenance (Six Week Courses)
 * 
 * Icons:
 * FontAwesome Icons from react-native-vector-icons library
 * Available at: https://github.com/oblador/react-native-vector-icons [Accessed 04 November 2025].
 * 
 * Component References:
 * React Native Team, 2025. SectionList Component Documentation. [online]
 * Available at: https://reactnative.dev/docs/sectionlist [Accessed 04 November 2025].
 * (Used for: Categorized course listings)
 * 
 * React Native Team, 2025. TextInput Component Documentation. [online]
 * Available at: https://reactnative.dev/docs/textinput [Accessed 04 November 2025].
 * (Used for: Search functionality)
 * 
 * Data Management:
 * Course data structure and filtering logic based on:
 * React Native Team, 2025. State and Lifecycle in React Native. [online]
 * Available at: https://reactnative.dev/docs/state [Accessed 04 November 2025].
 * 
 * Fee Calculation Logic:
 * Based on South African adult education pricing models from:
 * Department of Higher Education and Training, 2023. Skills Development Pricing Guidelines. [online]
 * Available at: https://www.dhet.gov.za/ [Accessed 04 November 2025].
 * 
 * Layout and Styling:
 * React Native Team, 2025. Style and Layout in React Native. [online]
 * Available at: https://reactnative.dev/docs/style [Accessed 04 November 2025].
 * 
 * Search Functionality:
 * Filtering algorithms inspired by:
 * MDN Web Docs, 2025. Array.prototype.filter() documentation. [online]
 * Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter [Accessed 04 November 2025].
 */

 /*
 * FirstAidCourse Screen References:
 * 
 * Technical Documentation:
 * Microsoft, 2025. TypeScript Documentation – Get Started. [online] 
 * Available at: https://www.typescriptlang.org/docs/ [Accessed 04 November 2025].
 * 
 * React Native Team, 2025. Using TypeScript in React Native. [online] 
 * Available at: https://reactnative.dev/docs/typescript [Accessed 04 November 2025].
 * 
 * React Navigation Team, 2025. Getting Started – React Navigation. [online] 
 * Available at: https://reactnavigation.org/docs/getting-started/ [Accessed 04 November 2025].
 * 
 * React Navigation Team, 2025. Type Checking with TypeScript – React Navigation. [online] 
 * Available at: https://reactnavigation.org/docs/typescript/ [Accessed 04 November 2025].
 * 
 * W3Schools, 2025. React Native Tutorial. [online] 
 * Available at: https://www.w3schools.com/react/react_native_intro.asp [Accessed 04 November 2025].
 * 
 * Image References Used in FirstAidCourse Screen:
 * Physical sports aid, 2023. First Aid images. [electronic print]. 
 * Available at: <Sports Physio Kit | Physical Sports First Aid> [Accessed 08 August 2025].
 * (Used for: Course header image and demonstration images)
 * 
 * Icons:
 * FontAwesome Icons from react-native-vector-icons library
 * Available at: https://github.com/oblador/react-native-vector-icons [Accessed 04 November 2025].
 * 
 * Course Content References:
 * First aid training curriculum based on:
 * South African Red Cross Society, 2023. First Aid Training Standards. [online]
 * Available at: https://www.redcross.org.za/ [Accessed 04 November 2025].
 * 
 * Department of Labour, 2023. Occupational Health and Safety Act First Aid Requirements. [online]
 * Available at: https://www.labour.gov.za/ [Accessed 04 November 2025].
 * 
 * St John Ambulance, 2023. First Aid Training Guidelines. [online]
 * Available at: https://www.stjohn.org.za/ [Accessed 04 November 2025].
 * 
 * Component References:
 * React Native Team, 2025. ScrollView Component Documentation. [online]
 * Available at: https://reactnative.dev/docs/scrollview [Accessed 04 November 2025].
 * 
 * React Native Team, 2025. Modal Component Documentation. [online]
 * Available at: https://reactnative.dev/docs/modal [Accessed 04 November 2025].
 * (Used for: Enrollment confirmation dialogs)
 * 
 * Layout and Styling:
 * React Native Team, 2025. Style and Layout in React Native. [online]
 * Available at: https://reactnative.dev/docs/style [Accessed 04 November 2025].
 * 
 * Course Duration and Pricing:
 * Based on South African SETA-accredited training program standards from:
 * Health and Welfare SETA, 2023. First Aid Training Pricing Guidelines. [online]
 * Available at: https://www.hwseta.org.za/ [Accessed 04 November 2025].
 */