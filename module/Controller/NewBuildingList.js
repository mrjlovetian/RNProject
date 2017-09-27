import React, {Component} from 'react';
import {Text, View, StyleSheet, ListView, RefreshControl}from 'react-native';
import {getBuildList} from './../Api/MRJApi.js';

// var RefreshableListView = require('react-native-refreshable-listview')
// import RefreshListView from 'react-native-refreshable-listview';

// import RefreshListView from 'react-native-refreshflatlist';

export default class NewBuildingList extends Component{

    componentDidMount(){
        this.getBuildingList()
    }

    constructor(props){
        super(props);
        this.state = {
            dataSource:new ListView.DataSource({rowHasChanged:(row1, row2) => row1 != row2}),
            loading:true
        }
    }

    getBuildingList(){
        getBuildList()
        .then((res)=>{
            
            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(res.Data),
                loading:false
            })
            console.log('success', res.Data);
        }).catch((res=>{
            console.log('failure');
        }))
    }

    static navigationOptions = {
        headerTitle:'新房列表',
    }

    _renderRow=(rowData)=>{
        console.log('*********************************', rowData);
        return <View style={styles.cell}>
            <Text>{'我是小'}</Text>
        </View>
    }

    _OnRefresh(){
        console.log('刷新方法');
    }

    render(){
        // return <RefreshListView dataSource = {() => this.dataSource} renderRow = {()=>this._renderRow} />
        return ( <View style = {{flex:1}}> 
            {this.state.loading?<View style={styles.loading}></View>:<ListView dataSource={this.state.dataSource} renderRow={()=>this._renderRow} refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._OnRefresh}
                />
            } />}
            {/* {this.state.loading?<View style={styles.loading}></View>:<RefreshListView dataSource={this.state.dataSource} renderItem={this._renderRow} />} */}
            </View>)
            
    }
}

const styles = StyleSheet.create({
    cell:{
        backgroundColor:'red',
        height:80,
        flex:1
    },
    loading:{
        backgroundColor:'orange',
        flex:1
    }
})