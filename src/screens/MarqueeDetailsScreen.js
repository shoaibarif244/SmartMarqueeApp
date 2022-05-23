import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity, Image, ImageBackground, StyleSheet, SafeAreaView, ScrollView
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Carousel from 'react-native-looped-carousel';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { Rating, } from 'react-native-ratings';
import { COLORS, FONTS } from '../CONSTANTS';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class MarqueeDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // size: { SCREEN_WIDTH, SCREEN_HEIGHT },
            // value: 0,
        };
    }
    _onLayoutDidChange = e => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
    };
    render() {
        const toDisabled = this.state.value == 3 ? true : false;
        const isBullets = this.state.value === 3 ? false : true;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Carousel
                    style={{ height: SCREEN_HEIGHT * 0.40, width: SCREEN_WIDTH }}
                    delay={500}
                    isLooped={false}
                    autoplay={false}
                    bullets
                    bulletStyle={{ backgroundColor: 'gray', borderColor: 'red', }}
                    chosenBulletStyle={{ backgroundColor: 'red', borderColor: 'gray' }} >
                    <View style={{ height: SCREEN_HEIGHT * 0.4, width: SCREEN_WIDTH, }}>
                        <ImageBackground source={require('../assets/images/bookNow.png')}
                            style={StyleSheet.absoluteFillObject}
                        />
                    </View>
                    <View style={{ height: SCREEN_HEIGHT * 0.4, width: SCREEN_WIDTH, }}>
                        <ImageBackground source={require('../assets/images/bookNow.png')}
                            style={StyleSheet.absoluteFillObject}
                        />
                    </View>
                    <View style={{ height: SCREEN_HEIGHT * 0.4, width: SCREEN_WIDTH, }}>
                        <ImageBackground source={require('../assets/images/bookNow.png')}
                            style={StyleSheet.absoluteFillObject}
                        />
                    </View>
                    <View style={{ height: SCREEN_HEIGHT * 0.4, width: SCREEN_WIDTH, }}>
                        <ImageBackground source={require('../assets/images/bookNow.png')}
                            style={StyleSheet.absoluteFillObject}
                        />
                    </View>

                </Carousel>
                <TouchableOpacity
                    onPress={() => {
                        // this.props.navigation.replace('LoginScreen')
                    }}
                    style={{ top: 20, right: 16, alignItems: 'center', justifyContent: 'center', position: 'absolute', }}
                >
                    <Image source={require('../assets/images/uploadd.png')}
                        resizeMode='stretch'
                        style={{ width: 40, height: 40 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: COLORS.primary, tintColor: '#fff', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 20, left: 16 }}>
                    <Image source={require('../assets/images/back.png')}
                        style={{ height: 20, width: 20, tintColor: '#fff' }}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
                <View style={{ backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, height: 50, width: SCREEN_WIDTH * 0.3, position: 'absolute', top: SCREEN_HEIGHT * 0.38, alignSelf: 'center', elevation: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: COLORS.pink, fontSize: 22, fontFamily: FONTS.medium }}>
                        $23,456
                    </Text>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, marginTop: 50, paddingHorizontal: 16 }}>
                        <View >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#000', fontSize: 18, fontFamily: FONTS.bold }}>PC EVENTS</Text>
                                <Rating
                                    readonly
                                    ratingBackgroundColor={'transparent'}
                                    imageSize={20}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View>
                                    <Text style={{ color: COLORS.txtColor, fontSize: 12, fontFamily: FONTS.medium }}>Marquee</Text>
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
                        <View style={{ marginTop: 30 }}>
                            <Text style={{ color: '#000', fontSize: 16, fontFamily: FONTS.bold }}>Description</Text>
                            <Text style={{ color: COLORS.txtColor, fontSize: 14, fontFamily: FONTS.regular }}>
                                Short description for the info about the notification & Tui
                                things Short description for the info about the notifipritw
                                ation & things Short description for the info about thiqre
                                e notification & things Short description for the infowure
                                out the notification & things Short description for theqwi
                                Short description for the info about the notification & Tui
                            </Text>

                        </View>
                        <TouchableOpacity style={styles.btnLogin}>
                            <Text style={{ color: '#fff', fontSize: 18, fontFamily: FONTS.medium }}>
                                Check Availability
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btnLogin, { backgroundColor: COLORS.pink }]}>
                            <Text style={{ color: '#fff', fontSize: 18, fontFamily: FONTS.medium }}>
                                Check Buffet
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnLogin}>
                            <Text style={{ color: '#fff', fontSize: 18, fontFamily: FONTS.medium }}>
                                Seating Plan
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    btnLogin: {
        height: SCREEN_HEIGHT * 0.07,
        width: SCREEN_WIDTH * 0.43,
        backgroundColor: '#B65EE7',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    }
});