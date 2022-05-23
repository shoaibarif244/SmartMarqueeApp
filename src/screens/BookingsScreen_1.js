import { Text, SafeAreaView, View, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { COLORS, FONTS } from '../CONSTANTS'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export class BookingsScreen_1 extends Component {
    render() {
        const BOOKINGS = [
            { key: 1, email: 'Userhomer1@gmail.com', info: 'Hi there, I need AC assistance.', },
            { key: 2, email: 'Userhomer1@gmail.com', info: 'Hi there, I need AC assistance.', },
            { key: 3, email: 'Userhomer1@gmail.com', info: 'Hi there, I need AC assistance.', },
            { key: 4, email: 'Userhomer1@gmail.com', info: 'Hi there, I need AC assistance.', },
            { key: 5, email: 'Userhomer1@gmail.com', info: 'Hi there, I need AC assistance.', },
            { key: 6, email: 'Userhomer1@gmail.com', info: 'Hi there, I need AC assistance.', },
            { key: 7, email: 'Userhomer1@gmail.com', info: 'Hi there, I need AC assistance.', },
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
                        Bookings
                    </Text>
                    <Text></Text>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>

                    {
                        BOOKINGS.map((item, index) => {
                            return (
                                <TouchableOpacity key={item.key} style={{ width: SCREEN_WIDTH * 0.94, height: SCREEN_HEIGHT * 0.09, elevation: 5, backgroundColor: '#fff', borderRadius: 5, alignSelf: 'center', padding: 10, justifyContent: 'center', marginTop: 10 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={require('../assets/images/female.png')}
                                                style={{ height: 45, width: 45, }}
                                                resizeMode='contain'
                                            />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={{ color: '#000', fontSize: 16, fontFamily: FONTS.medium }}>{item.email}</Text>
                                                <Text style={{ color: '#A4A19F', fontSize: 12, fontFamily: FONTS.medium }}>{item.info}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

});
export default BookingsScreen_1