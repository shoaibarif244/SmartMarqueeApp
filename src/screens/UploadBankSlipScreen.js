import { Text, SafeAreaView, View, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React, { Component } from 'react'

import { COLORS, FONTS } from '../CONSTANTS'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class UploadBankSlipScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ marginVertical: 20 }}>
                        <TouchableOpacity
                            style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: COLORS.primary, tintColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../assets/images/back.png')}
                                style={{ height: 20, width: 20, tintColor: '#fff' }}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ alignSelf: 'center', alignItems: 'center' }}>
                        <Image source={require('../assets/images/upload.png')}
                            style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.3 }}
                            resizeMode='contain'
                        />
                        <Text style={{ color: '#AFAFAF', fontSize: 20, fontFamily: FONTS.medium }}>
                            Tap to Upload Bank Slip
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({})

