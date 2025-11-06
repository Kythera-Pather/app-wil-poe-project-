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