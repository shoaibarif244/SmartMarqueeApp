import React from 'react'
import { View, TextInput } from 'react-native'

const Input = (props) => {
    return (
        <View style={{ backgroundColor: '#fff', borderRadius: 30,  height: 55, flexDirection: 'row', alignItems: 'center', ...props.bgStyle }}>
            <View style={{ marginLeft: 12 }}>
                {props.icon}
            </View>

            <TextInput
                style={{ flex: 1, fontSize: 15, fontFamily: 'Poppins-Regular', marginTop: 5, marginLeft: 5 }}
                secureTextEntry={props.passswordHide}
                value={props.val}
                placeholder={props.title}
                editable={props.edit}
                keyboardType={props.keyboardType}
                autoCapitalize={props.autoCapitalize}
                autoCorrect={false}
                onChangeText={(txt) => handleonTextChange(txt)}
            />
            <View style={{ marginLeft: 12 }}>
                {props.RightIcon}
            </View>

        </View>
    )

    function handleonTextChange(txt) {
        props.onChangeText(txt)
    }
}

export default Input