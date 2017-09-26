import React,{Component}from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

export default class First extends Component{

    navigatorDetail(){
        console.log("进到下一个页面");
        this.props.navigation.navigate('Mine', {info:"页面传值"});
    }

    render(){
        return(
            <View style={styles.main}>
                <TouchableOpacity onPress={()=>this.navigatorDetail()}>
                <View style={styles.btn}></View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:'red',
        flex:1
    },
    btn:{
        backgroundColor:'pink',
        height: 80,
        width: 80,
    }
})