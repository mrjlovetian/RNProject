import React,{Component}from 'react';
import {View, StyleSheet} from 'react-native';

export default class First extends Component{
    render(){
        return(
            <View style={styles.main}></View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:'orange',
        flex:1
    }
})