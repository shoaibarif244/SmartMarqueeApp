import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity, Image, ImageBackground, StyleSheet
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Carousel from 'react-native-looped-carousel';
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
            <View>
                <Carousel
                    style={{ height: SCREEN_HEIGHT * 0.25, width: SCREEN_WIDTH }}
                    delay={500}
                    isLooped={false}
                    autoplay={false}
                    bullets
                    bulletStyle={{ backgroundColor: 'gray', borderColor: 'red' }}
                    chosenBulletStyle={{ backgroundColor: 'red',borderColor:'gray' }} >
                    <View style={{ height: SCREEN_HEIGHT * 0.25, width: SCREEN_WIDTH, }}>
                        <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.25, alignSelf: 'center' }}>
                            <Image source={require('../assets/images/bookNow.png')} resizeMode='stretch'
                                style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.25, }}
                            />
                        </View>
                    </View>
                    <View style={{ height: SCREEN_HEIGHT * 0.25, width: SCREEN_WIDTH, }}>
                        <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.25, alignSelf: 'center' }}>
                            <Image source={require('../assets/images/bookNow.png')} resizeMode='stretch'
                                style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.25, }}
                            />
                        </View>
                    </View>
                    <View style={{ height: SCREEN_HEIGHT * 0.25, width: SCREEN_WIDTH, }}>
                        <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.25, alignSelf: 'center' }}>
                            <Image source={require('../assets/images/bookNow.png')} resizeMode='stretch'
                                style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.25, }}
                            />
                        </View>
                    </View>
                    <View style={{ height: SCREEN_HEIGHT * 0.25, width: SCREEN_WIDTH, }}>
                        <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.25, alignSelf: 'center' }}>
                            <Image source={require('../assets/images/bookNow.png')} resizeMode='stretch'
                                style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.25, }}
                            />
                        </View>
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
            </View>
        )
    }
}