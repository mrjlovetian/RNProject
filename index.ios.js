/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import MRJ from './module/mrj.js'

import MRJNavigator from './module/Controller/MRJNavigator.js';

export default class RNProject extends Component {
  render(){
    return(<MRJNavigator/>)
  }
}


/*export default class RNProject extends Component {

  onPressFunction(str){
    console.log(str);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{this.onPressFunction('what')}}>
        <View style={[styles.v1, styles.vheight]}></View>
        </TouchableOpacity>
        <View style={[styles.v2, styles.vheight]}></View>
        <View style={[styles.v3, styles.vheight]}></View>
        <View style={[styles.v4, styles.vheight]}></View>
        <MRJ/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
  v1:{
    backgroundColor:'red',
  },
  v2:{
    backgroundColor:'orange'
  },
  v3:{
    backgroundColor:'blue',
    alignSelf: 'flex-end'
  },
  v4:{
    backgroundColor:'green'
  },
  vheight:{
    height:80,
    width:40
  }
});*/

AppRegistry.registerComponent('RNProject', () => RNProject);
