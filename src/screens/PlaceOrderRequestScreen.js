import { Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { COLORS, FONTS } from '../CONSTANTS'
export class PlaceOrderRequestScreen extends Component {
    state = {
        Day: 1,
        numPrsn: 300,
        evntType: 'Others',
        arrngmnt: 'Birthday Decor',
        rating: 0
    }
    render() {
        const Days = [
            { key: 1, name: 'Mon', value: 1, },
            { key: 2, name: 'Tue', value: 2, },
            { key: 3, name: 'Wed', value: 3, },
            { key: 4, name: 'Thu', value: 4, },
            { key: 5, name: 'Fri', value: 5, },
            { key: 6, name: 'Sat', value: 6, },
            { key: 7, name: 'Sun', value: 7, },
        ]
        const NumPersons = [
            { key: 1, name: '50+', value: 50, },
            { key: 2, name: '100+', value: 100, },
            { key: 3, name: '200+', value: 200, },
            { key: 4, name: '300+', value: 300, },
            { key: 5, name: '400+', value: 400, },
            { key: 6, name: '500+', value: 500, }
        ]
        const EventType = [
            { key: 1, name: 'Wedding', value: 'Wedding', },
            { key: 2, name: 'Birthday', value: 'Birthday', },
            { key: 3, name: 'Meeting', value: 'Meeting', },
            { key: 4, name: 'Others', value: 'Others', }
        ]
        const Arrangements = [
            { key: 1, name: 'Wedding Decor', value: 'Wedding Decor', },
            { key: 2, name: 'Birthday Decor', value: 'Birthday Decor', },
            { key: 3, name: 'Others', value: 'Others', }
        ]
        const { Day, numPrsn, arrngmnt, evntType } = this.state
        return (
            <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <TouchableOpacity
                        style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: COLORS.primary, tintColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/images/back.png')}
                            style={{ height: 25, width: 25, tintColor: '#fff' }}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <MaterialIcons
                        name={'bookmark'}
                        color={COLORS.primary}
                        size={30}
                        onPress={() => {

                        }}
                    />
                </View>
                <View style={{ marginTop: 30 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#000', fontSize: 18, fontFamily: FONTS.bold }}>PC Events</Text>
                        <Rating
                            size={20}
                        // showRating
                        // // onFinishRating={this.setState({rating:4})}
                        // style={{ paddingVertical: 10 }}

                        />
                    </View>
                    <Text style={{ color: COLORS.txtColor, fontSize: 12, fontFamily: FONTS.medium }}>Marquee</Text>
                    <Text style={{ color: COLORS.txtColor, fontSize: 12, fontFamily: FONTS.medium }}>Near CCC, Rahim Yar Khan</Text>
                </View>
                <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end' }}>
                    <FontAwesome5
                        name={'location-arrow'}
                        color={'#fff'}
                        size={20}
                        onPress={() => {
                            alert('Location')
                        }}
                    />
                </View>
                <View style={{ marginTop: 50 }}>
                    <Text style={{ color: COLORS.txtColor, fontSize: 18, fontFamily: FONTS.medium }}>Select a Day</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        justifyContent: 'space-evenly',
                    }}>
                    {Days.map((item, index) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    height: 30,
                                    width: 50,
                                    backgroundColor: Day == item.value ? COLORS.primary : 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 25,
                                }}
                                key={item.key}
                                value={item.value}
                                onPress={() => {
                                    this.setState({ Day: item.value });
                                }}>
                                <Text
                                    style={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 18,
                                        color:
                                            Day == item.value
                                                ? '#fff'
                                                : COLORS.pink,
                                    }}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <View style={{ marginTop: 50 }}>
                    <Text style={{ color: COLORS.txtColor, fontSize: 18, fontFamily: FONTS.medium }}>Number of Person</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-evenly' }}>
                    {NumPersons.map((item, index) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    height: 30,
                                    width: 50,
                                    backgroundColor: numPrsn == item.value ? COLORS.primary : 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 25,
                                }}
                                key={item.key}
                                value={item.value}
                                onPress={() => {
                                    this.setState({ numPrsn: item.value });
                                }}>
                                <Text
                                    style={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 18,
                                        color: numPrsn == item.value ? '#fff' : COLORS.pink,
                                    }}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <View style={{ marginTop: 50 }}>
                    <Text style={{ color: COLORS.txtColor, fontSize: 18, fontFamily: FONTS.medium }}>Event Type</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-evenly' }}>
                    {EventType.map((item, index) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    height: 30,
                                    width: 80,
                                    backgroundColor: evntType == item.value ? COLORS.primary : 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 25,
                                }}
                                key={item.key}
                                value={item.value}
                                onPress={() => {
                                    this.setState({ evntType: item.value });
                                }}>
                                <Text
                                    style={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 18,
                                        color: evntType == item.value ? '#fff' : COLORS.pink,
                                    }}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <View style={{ marginTop: 50 }}>
                    <Text style={{ color: COLORS.txtColor, fontSize: 18, fontFamily: FONTS.medium }}>Arrangements</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-evenly' }}>
                    {Arrangements.map((item, index) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    height: 30,
                                    width: 110,
                                    backgroundColor: arrngmnt == item.value ? COLORS.primary : 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 25,
                                    // paddingHorizontal:5
                                }}
                                key={item.key}
                                value={item.value}
                                onPress={() => {
                                    this.setState({ arrngmnt: item.value });
                                }}>
                                <Text
                                    style={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 16,
                                        color: arrngmnt == item.value ? '#fff' : COLORS.pink,
                                    }}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </SafeAreaView>
        )
    }
}

export default PlaceOrderRequestScreen