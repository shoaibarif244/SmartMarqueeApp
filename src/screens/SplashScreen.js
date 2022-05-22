import { Text, View, Dimensions, SafeAreaView, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import React, { Component } from 'react'



export default class SplashScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assets/images/Splash.png')}
                    style={StyleSheet.absoluteFillObject}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

});

