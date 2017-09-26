import React, {
    Component
}from 'react';
import {
    Text,
    View,
    StyleSheet,
}from 'react-native';

import Screen from './utils/Device.js';

export default class MRJ extends Component{
    render(){
        return <View style={styles.contoin}></View>
    }
}

const styles = StyleSheet.create({
    contoin:{
        backgroundColor:'red',
        height: 90,
        width: Screen.Screen.width/2.0
    }
})