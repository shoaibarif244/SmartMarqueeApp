import { Text, StyleSheet, View, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { COLORS, FONTS } from '../CONSTANTS';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class ResetPasswordScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
                <MaterialIcons
                    name={'arrow-back'}
                    color={COLORS.primary}
                    size={30}
                    style={{ marginTop: 20 }}
                    onPress={() => {
                        // this.props.navigation.goBack()
                    }}
                />
                <Text style={{ color: COLORS.primary, fontSize: 25, fontFamily: FONTS.medium, marginTop: 50 }}>
                    Reset Password
                </Text>
                <TextInput
                    label="Current Password"
                    outlineColor="#707070"
                    onChangeText={text => {
                        // this.setState({ FName: text });
                    }}
                    placeholder="Enter your Current Password"
                    style={{
                        width: SCREEN_WIDTH * 0.9,
                        backgroundColor: 'transparent',
                        height: 50,
                        marginTop: 30
                    }}
                    left={<TextInput.Icon name="key-variant" color={COLORS.primary} />}
                />
                <TextInput
                    label="New Password"
                    outlineColor="#707070"
                    onChangeText={text => {
                        // this.setState({ FName: text });
                    }}
                    placeholder="Enter your New Password"
                    style={{
                        width: SCREEN_WIDTH * 0.9,
                        backgroundColor: 'transparent',
                        height: 50,
                        marginVertical: 10
                    }}
                    left={<TextInput.Icon name="key-variant" color={COLORS.primary} />}
                />
                <TextInput
                    label="Confirm New Password"
                    outlineColor="#707070"
                    onChangeText={text => {
                        // this.setState({ FName: text });
                    }}
                    placeholder="Enter your Confirm New Password"
                    style={{
                        width: SCREEN_WIDTH * 0.9,
                        backgroundColor: 'transparent',
                        height: 50,
                        marginTop: 10,
                        marginBottom: 50
                    }}
                    left={<TextInput.Icon name="key-variant" color={COLORS.primary} />}
                />
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={{ color: '#fff', fontSize: 18, fontFamily: FONTS.medium }}>
                        Update
                    </Text>
                </TouchableOpacity>
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
        alignSelf: 'center'
    }
})