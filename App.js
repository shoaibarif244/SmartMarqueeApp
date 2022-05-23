import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { COLORS, FONTS } from './src/CONSTANTS';
import LoginScreen from './src/screens/LoginScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import SplashScreen from './src/screens/SplashScreen';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import UploadBankSlipScreen from './src/screens/UploadBankSlipScreen';
import PlaceOrderRequestScreen from './src/screens/PlaceOrderRequestScreen';
import BookNowScreen from './src/screens/BookNowScreen';
import BookingsScreen from './src/screens/BookingsScreen';
import BookingsScreen_1 from './src/screens/BookingsScreen_1';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import SettingScreen from './src/screens/SettingScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import MarqueeDetailsScreen from './src/screens/MarqueeDetailsScreen';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    text: COLORS.primary,
    // placeholder: '#fff',
  },
  fonts: {
    regular: {
      fontFamily: FONTS.regular
    }
  }
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <PaperProvider theme={theme}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle='light-content' backgroundColor={COLORS.primary} />
          {/* <SplashScreen /> */}
          {/* <OnBoardingScreen /> */}
          {/* <LoginScreen /> */}
          {/* <ForgotPasswordScreen /> */}
          {/* <ResetPasswordScreen /> */}
          {/* <UploadBankSlipScreen /> */}
          {/* <PlaceOrderRequestScreen /> */}
          {/* <BookNowScreen /> */}
          {/* <BookingsScreen /> */}
          {/* <BookingsScreen_1 /> */}
          {/* <PrivacyPolicy /> */}
          {/* <SettingScreen /> */}
          {/* <SignupScreen /> */}
          <HomeScreen />
          {/* <MarqueeDetailsScreen /> */}
        </View>
      </PaperProvider>
    );
  }
}