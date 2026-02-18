# Mobile App

A React Native mobile application built with **Expo**, **expo-router**, and **NativeWind** (TailwindCSS). It features an onboarding carousel, authentication flows (login, sign-up, phone/OTP verification), and a protected dashboard.

## Tech Stack

- **React Native** 0.81 + **React** 19
- **Expo** SDK 54 with **expo-router** (file-based routing)
- **NativeWind** 4 (TailwindCSS for React Native)
- **React Hook Form** + **Zod** (form validation)
- **Jest** 30 + **React Testing Library** (testing)
- **TypeScript** 5.9

## Project Structure

```
app/
├── _layout.tsx              # Root layout – fonts, splash screen, Stack navigator
├── index.tsx                # Onboarding carousel (initial route)
├── welcome.tsx              # Post-verification welcome screen
├── (auth)/
│   ├── _layout.tsx          # Auth group layout
│   ├── login.tsx            # Login form (email + password)
│   ├── sign-up.tsx          # Sign-up form (username + email + password)
│   └── verification.tsx     # Phone number + OTP verification
└── (protected)/
    ├── _layout.tsx          # Protected group layout
    └── dashboard.tsx        # Dashboard screen

components/
├── Auth/
│   ├── AuthHeaders.tsx      # Logo + title/subtitle header
│   ├── AuthInput.tsx        # Styled text input with password toggle
│   ├── CustomKeypad.tsx     # Numeric keypad (verification screen)
│   ├── OtpInput.tsx         # 4-digit OTP display boxes
│   ├── PhoneInputDisplay.tsx # Formatted phone number display
│   └── SocialLoginButton.tsx # Google/Apple social login button
├── ui/
│   ├── button.tsx           # CVA-based Button with variants
│   ├── input.tsx            # Generic styled TextInput
│   └── text.tsx             # Semantic Text component (h1–h4, p, etc.)
└── Welcome/
    ├── Paginator.tsx        # Animated dot indicators
    └── SlideItem.tsx        # Onboarding slide card

lib/
├── utils.ts                 # cn() – clsx + tailwind-merge
└── validations.ts           # Zod schemas (login, signUp, phone, otp)

utils/
└── slides.ts                # Onboarding slide data
```

## Getting Started

### Prerequisites

- Node.js 18+
- iOS Simulator (macOS) or Android Emulator

### Install Dependencies

```bash
npm install
```

### Start the App

```bash
npx expo start
```

Then open in a [development build](https://docs.expo.dev/develop/development-builds/introduction/), [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/), [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/), or [Expo Go](https://expo.dev/go).

### Run on a Specific Platform

```bash
npm run ios        # iOS simulator
npm run android    # Android emulator
npm run web        # Web browser
```

## Testing

```bash
npm test           # Run all tests once
npm run test:watch # Run tests in watch mode
```

### Test Structure

```
__tests__/
├── components/     # AuthHeaders, AuthInput, Button, CustomKeypad,
│                   # OtpInput, Paginator, PhoneInputDisplay,
│                   # SlideItem, SocialLoginButton, Text
├── lib/            # Zod validation schemas
└── screens/        # Dashboard, Login, SignUp, Verification, Welcome
```

## Linting

```bash
npm run lint
```

## App Flow

1. **Onboarding** – Swipeable carousel with skip option
2. **Auth** – Login or Sign Up with form validation
3. **Verification** – Enter phone number → receive & enter 4-digit OTP
4. **Welcome** – Success screen with "I'm ready to start!" CTA
5. **Dashboard** – Protected home screen
