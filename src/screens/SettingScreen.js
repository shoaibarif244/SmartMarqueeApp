import { Text, StyleSheet, View, Switch, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { COLORS, FONTS } from '../CONSTANTS'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class SettingScreen extends Component {
    state = { isEnabled: true }
    toggleSwitch = () => {
        this.setState({ isEnabled: !this.state.isEnabled })
    }

    render() {
        const SETTING = [
            { key: 1, title: 'Notification', },
            { key: 2, title: 'Location', },
            { key: 3, title: 'Change Password', },
            { key: 4, title: 'Privacy Policy', },
            { key: 5, title: 'Sign Out', },
        ]
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
                        Settings
                    </Text>
                    <Text></Text>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>

                    {
                        SETTING.map((item, index) => {
                            return (
                                <TouchableOpacity activeOpacity={0.8} key={item.key} style={{ flexDirection: 'row', width: SCREEN_WIDTH * 0.94, height: SCREEN_HEIGHT * 0.08, elevation: 5, backgroundColor: '#fff', borderRadius: 5, alignSelf: 'center', padding: 20, justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                                    <Text style={{ color: '#000', fontSize: 16, fontFamily: FONTS.medium }}>{item.title}</Text>
                                    {(index == 0 || index == 1) &&
                                        <Switch
                                            trackColor={{ false: '#C2C0BE', true: COLORS.primary }}
                                            thumbColor={this.state.isEnabled ? '#fff' : COLORS.primary}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={this.toggleSwitch}
                                            value={this.state.isEnabled}
                                        />}
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({})