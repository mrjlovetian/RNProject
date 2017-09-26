import React,{
    Component,
}from 'react';

import {
    View,
    Navgator,
    Text,
    StyleSheet,
}from 'react-native';

import First from './First.js';
import Second from './Second.js';

import {StackNavgigator, TabNavigator, TabBarBottom} from 'react-navigation';

const Tab = TabNavigator({
    Fist:{
        screen:First,
        navigationOptions:({navigation})=>({
            tabBarLabel:'首页',
            title: '我的',
        })
    },
    Second:{
        screen:Second,
        navigationOptions:({navigation})=>({
            tabBarLabel:'列表',
            title: '列表',
        })
    }
})

export default Tab