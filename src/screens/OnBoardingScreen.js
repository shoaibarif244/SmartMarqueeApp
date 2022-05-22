import { SafeAreaView, Text, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { COLORS, FONTS } from '../CONSTANTS';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class OnBoardingScreen extends Component {
    render() {
        console.log(SCREEN_WIDTH + ' ' + SCREEN_HEIGHT);
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <View>
                        <Image
                            style={{ width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.5 }}
                            resizeMode='contain'
                            source={require('../assets/images/onBoarding.png')} />
                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={{ color: '#000', textAlign: 'left', fontSize: 16, fontFamily: FONTS.regular, }}>
                                The main charm of an event that every
                                guest enjoys. Excess number of guests
                                can be accommodated at shortest
                                notice.
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{
                        height: SCREEN_HEIGHT * 0.07,
                        width: SCREEN_WIDTH * 0.47,
                        backgroundColor: '#B65EE7',
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{ color: '#fff', fontSize: 18, fontFamily: FONTS.bold }}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({})