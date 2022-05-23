import { Text, SafeAreaView, View, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { COLORS, FONTS } from '../CONSTANTS'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export class PrivacyPolicy extends Component {
    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, alignItems: 'center', paddingHorizontal: 16 }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/back.png')}
                            style={{ height: 18, width: 18 }}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <Text style={{ color: COLORS.primary, fontSize: 20, fontFamily: FONTS.medium }}>
                        Privacy Policy
                    </Text>
                    <Text></Text>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, paddingHorizontal: 16 }}>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: COLORS.primary, fontSize: 18, fontFamily: FONTS.medium }}>
                                Terms and Conditions
                            </Text>
                            <Text style={{ color: COLORS.txtColor, fontSize: 14, fontFamily: FONTS.regular }}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                            </Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: COLORS.primary, fontSize: 18, fontFamily: FONTS.medium }}>
                                Disclaimer
                            </Text>
                            <Text style={{ color: COLORS.txtColor, fontSize: 14, fontFamily: FONTS.regular }}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                            </Text>
                        </View>
                    </View>

                </ScrollView>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

});
export default PrivacyPolicy