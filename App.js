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
          <SettingScreen />
        </View>
      </PaperProvider>
    );
  }
}


// import { Text, View, SafeAreaView, StyleSheet, Image, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
// import React, { Component } from 'react'
// import SubHeader from '../reuseable/SubHeader'
// const SCREEN_WIDTH = Dimensions.get('window').width;
// const SCREEN_HEIGHT = Dimensions.get('window').height;
// import { BG, backBtn, emaill, website, phone } from '../../assets/constant'
// import { COLOR } from '../CONSTANTS/Colors';
// import { fonts } from '../CONSTANTS/fonts';
// export default class TermsConditionPolicy extends Component {

//     render() {
//         return (
//             <SafeAreaView style={{ flex: 1, }}>
//                 <ImageBackground
//                     source={BG}
//                     style={{ flex: 1, paddingHorizontal: 16 }}
//                 >
//                     <SubHeader navi={this.props.navigation} text='Terms & Condition Policy' />
//                     <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
//                         <View style={{ marginTop: 20 }}>
//                             <Text style={styles.txtHeading}>
//                                 Terms of Service Policy
//                             </Text>
//                             <Text style={styles.txtPara}>
//                                 Nec quisque dui egestas magna laoreet pellentesque eleifend. Ultricies viverra eget donec curabitur feugiat pretium id sit. Cras sit imperdiet et ut at sit diam et. Egestas urna, amet, dictum fermentum neque posuere. Nec quisque dui egestas magna laoreet pellentesque eleifend. Ultricies viverra eget donec curabitur feugiat pretium id sit. Cras sit imperdiet et ut at sit diam et. Egestas urna, amet, dictum fermentum neque posuere.Nec quisque dui egestas magna laoreet pellentesque eleifend. Ultricies viverra eget donec curabitur feugiat pretium id sit. Cras sit imperdiet et ut at sit diam et. Egestas urna, amet, dictum fermentum neque posuere.
//                             </Text>

//                             <Text style={styles.txtPara}>
//                                 Nec quisque dui egestas magna laoreet pellentesque eleifend. Ultricies viverra eget donec curabitur feugiat pretium id sit. Cras sit imperdiet et ut at sit diam et.
//                             </Text>
//                         </View>
//                         <View style={{ marginBottom: 80 }} />

//                     </ScrollView>
//                 </ImageBackground>
//             </SafeAreaView >
//         )
//     }
// }


// const styles = StyleSheet.create({
//     txtPara: { color: '#666666', fontSize: 14, fontFamily: fonts.regular },
//     txtHeading: { color: COLOR.secondary, fontSize: 14, fontFamily: fonts.medium, marginTop: 15, },

// });

