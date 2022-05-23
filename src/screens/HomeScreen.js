import { Text, SafeAreaView, View, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Rating, } from 'react-native-ratings';
import { COLORS, FONTS } from '../CONSTANTS'
import Input from '../reuseable/InputText';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class HomeScreen extends Component {
    render() {
        const Marquees = [
            { key: 1, name: 'PC', loction: 'Near CCC, Rahim Yar Khan', rating: 3 },
            { key: 2, name: 'GN', loction: 'Near CCC, Rahim Yar Khan', rating: 3.5 },
            { key: 3, name: 'RGM', loction: 'Near CCC, Rahim Yar Khan', rating: 5 },
        ]
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
                <View style={{ height: SCREEN_HEIGHT * 0.35, width: SCREEN_WIDTH, backgroundColor: COLORS.primary, paddingHorizontal: 16 }}>
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/menu.png')}
                                style={{ height: 30, width: 30, tintColor: '#fff' }}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                        <Text style={{ color: '#fff', fontSize: 22, fontFamily: FONTS.bold }}>
                            Best Deals
                        </Text>
                        <Text></Text>
                    </View>
                    <Input
                        RightIcon={<Image resizeMode='contain' source={require('../assets/images/inOut.png')} style={{ height: 36, width: 36, marginRight: 10 }} />}
                        icon={<Image resizeMode='contain' source={require('../assets/images/search.png')} style={{ height: 25, width: 25, marginLeft: 5 }} />}
                        bgStyle={{ marginTop: 20 }} title={"Search Marquee,Hotels etc"}
                    // onChangeText={(txt) => this.setState({ email: txt })}
                    />
                    <View style={{ height: SCREEN_HEIGHT * 0.12, backgroundColor: '#fff', borderRadius: 10, marginTop: 10, padding: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ backgroundColor: COLORS.pink, height: 30, width: SCREEN_WIDTH * 0.2, borderRadius: 5, alignItems: "center", justifyContent: 'center' }}>
                                <Text style={{ color: '#fff', fontSize: 16, fontFamily: FONTS.medium }}>
                                    Near You
                                </Text>
                            </View>
                            <Rating
                                readonly
                                ratingBackgroundColor={'transparent'}
                                imageSize={20}
                            />
                            <Text style={{ color: COLORS.pink, fontSize: 22, fontFamily: FONTS.medium }}>
                                Book Now
                            </Text>

                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: '#000', fontSize: 18, fontFamily: FONTS.bold }}>PC Events</Text>
                                    <Text style={{ color: COLORS.txtColor, fontSize: 14, fontFamily: FONTS.medium, marginLeft: 10 }}>Marquee</Text>
                                </View>
                                <Text style={{ color: COLORS.txtColor, fontSize: 12, fontFamily: FONTS.medium }}>Near CCC, Rahim Yar Khan</Text>
                            </View>
                            <View style={{ height: 35, width: 35, borderRadius: 20, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end', elevation: 5 }}>
                                <FontAwesome5
                                    name={'location-arrow'}
                                    color={'#fff'}
                                    size={15}
                                    onPress={() => {
                                        alert('Location')
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <Text style={{ color: '#fff', fontSize: 18, fontFamily: FONTS.medium, textAlign: 'center', marginTop: 5 }}>
                        Marquees Hand Picked for you Near You
                    </Text>
                </View>


                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>          
                    <View style={{ flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingBottom: 30 }}>
                        {
                            Marquees.map((item, index) => {
                                return (
                                    <View key={index} style={{ backgroundColor: '#fff', elevation: 10, width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.40, alignSelf: 'center', borderRadius: 20, marginVertical: 10 }}>
                                        <View style={{ width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.25, alignSelf: 'center' }}>
                                            <ImageBackground source={require('../assets/images/bookNow.png')}
                                                style={StyleSheet.absoluteFillObject}
                                                borderTopRightRadius={20}
                                                borderTopLeftRadius={20}
                                            >
                                                <MaterialIcons
                                                    name={'bookmark'}
                                                    color={COLORS.primary}
                                                    size={30}
                                                    style={{ alignSelf: 'flex-end', marginVertical: 20, paddingHorizontal: 16 }}
                                                    onPress={() => {
                                                        alert('Bookmarked')
                                                    }}
                                                />

                                                <TouchableOpacity activeOpacity={0.9} style={{ backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, height: 50, width: SCREEN_WIDTH * 0.3, position: 'absolute', bottom: 0, alignSelf: 'center', elevation: 5, alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{ color: COLORS.pink, fontSize: 22, fontFamily: FONTS.medium }}>
                                                        Book Now
                                                    </Text>
                                                </TouchableOpacity>
                                            </ImageBackground>
                                        </View>

                                        <View style={{ marginTop: 20, paddingHorizontal: 16 }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ color: '#000', fontSize: 18, fontFamily: FONTS.bold }}>{item.name}</Text>
                                                <Rating
                                                    startingValue={item.rating}
                                                    readonly
                                                    ratingBackgroundColor={'transparent'}
                                                    imageSize={20}
                                                />
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <View>
                                                    <Text style={{ color: COLORS.txtColor, fontSize: 12, fontFamily: FONTS.medium }}>Marquee</Text>
                                                    <Text style={{ color: COLORS.txtColor, fontSize: 12, fontFamily: FONTS.medium }}>{item.loction}</Text>
                                                </View>
                                                <View style={{ height: 35, width: 35, borderRadius: 20, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end', elevation: 5 }}>
                                                    <FontAwesome5
                                                        name={'location-arrow'}
                                                        color={'#fff'}
                                                        size={15}
                                                        onPress={() => {
                                                            alert('Location')
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }

                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    textareaContainer: {
        height: SCREEN_HEIGHT * 0.28,
        width: SCREEN_WIDTH * 0.9,
        borderWidth: 1,
        borderColor: '#E5E0EB',
        // backgroundColor: COLORS.primary,
        borderRadius: 7,
        marginTop: 10,
        marginBottom: 30
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: SCREEN_HEIGHT * 0.28,
        width: SCREEN_WIDTH * 0.9,
        fontSize: 14,
        // color: '#333',
    },
    btnLogin: {
        height: SCREEN_HEIGHT * 0.07,
        width: SCREEN_WIDTH * 0.9,
        backgroundColor: '#B65EE7',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10
    }
});
