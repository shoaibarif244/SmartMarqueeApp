import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-paper';
import { COLORS, FONTS } from '../CONSTANTS';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class SignupScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ marginVertical: SCREEN_HEIGHT * 0.08, }}>
                        <Text style={{ color: COLORS.primary, fontSize: 25, fontFamily: FONTS.medium }}>
                            Welcome
                        </Text>
                        <Text style={{ color: '#707070', fontFamily: FONTS.regular, fontSize: 15 }}>
                            You're a new user? Join us now!
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#707070', fontFamily: FONTS.medium, fontSize: 18 }}>
                            Username
                        </Text>
                        <TextInput
                            label="Username"
                            outlineColor="#707070"
                            onChangeText={text => {
                                // this.setState({ FName: text });
                            }}
                            placeholder="Enter your username"
                            style={{
                                width: SCREEN_WIDTH * 0.9,
                                backgroundColor: 'transparent',
                                height: 50
                            }}
                            right={<TextInput.Icon name="account-circle-outline" color={'#707070'} />}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#707070', fontFamily: FONTS.medium, fontSize: 18 }}>
                            Email
                        </Text>
                        <TextInput
                            label="Email"
                            outlineColor="#707070"
                            onChangeText={text => {
                                // this.setState({ FName: text });
                            }}
                            placeholder="Enter your email"
                            style={{
                                width: SCREEN_WIDTH * 0.9,
                                backgroundColor: 'transparent',
                                height: 50
                            }}
                            right={<TextInput.Icon name="email-outline" color={'#707070'} />}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#707070', fontFamily: FONTS.medium, fontSize: 18 }}>
                            Password
                        </Text>
                        <TextInput
                            label="Password"
                            outlineColor="#707070"
                            onChangeText={text => {
                                // this.setState({ FName: text });
                            }}
                            placeholder="Enter your password"
                            style={{
                                width: SCREEN_WIDTH * 0.9,
                                backgroundColor: 'transparent',
                                height: 50,
                            }}
                            secureTextEntry
                            right={<TextInput.Icon name="key-variant" color={'#707070'} />}
                        />
                    </View>
                    <View style={{ marginVertical: 10, marginBottom: SCREEN_HEIGHT * 0.08 }}>
                        <Text style={{ color: '#707070', fontFamily: FONTS.medium, fontSize: 18 }}>
                            Confirm Password
                        </Text>
                        <TextInput
                            label="Confirm Password"
                            outlineColor="#707070"
                            onChangeText={text => {
                                // this.setState({ FName: text });
                            }}
                            placeholder="Enter your Confirm Password"
                            style={{
                                width: SCREEN_WIDTH * 0.9,
                                backgroundColor: 'transparent',
                                height: 50,
                            }}
                            secureTextEntry
                            right={<TextInput.Icon name="key-variant" color={'#707070'} />}
                        />
                    </View>


                    <TouchableOpacity style={styles.btnLogin}>
                        <Text style={{ color: '#fff', fontSize: 18, fontFamily: FONTS.bold }}>
                            SIGNUP
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    btnLogin: {
        height: SCREEN_HEIGHT * 0.07,
        width: SCREEN_WIDTH * 0.9,
        backgroundColor: '#B65EE7',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 20
    }
})