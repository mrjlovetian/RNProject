import React, {Component}from 'react';
import {View, StyleSheet} from 'react-native';
import {getBuildList} from './../Api/MRJApi.js';

export default class BuildingList extends Component{

    componentDidMount() {
        console.log('componentDidMount');
        this.getBuildingList()
    }

    getBuildingList(){
        console.log('getBuildingList');
        getBuildList().then(res =>{
            console.log('请求成功-=-=-=-=-=-=-=-=', res);
        }).catch(res=>{
            console.log('请求失败-=-=-=-=-=-=-=-=', res);
        })
    }

    render(){
        return(
            <View style={styles.main}></View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:'red',
        flex:1
    }
})