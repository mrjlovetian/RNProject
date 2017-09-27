import React,{Component}from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

export default class First extends Component{

    pop(){
        this.props.navigation.goBack()
    }

    getValue(pram){
        console.log(pram);
        this.props.navigation.navigate('NewBuilding');
    }

    static navigationOptions ={
        headerTitle: '详情页面'
    }

    render(){
        return(
            <View style={styles.main}>
                <TouchableOpacity onPress={()=>this.getValue(this.props.navigation.state.params.info)}>
                <View style={styles.btn}></View>
                </TouchableOpacity>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:'pink',
        flex:1
    },
    btn:{
        backgroundColor:'orange',
        marginRight:20,
        marginTop: 100,
        height: 80,
        width: 80,
    }
})