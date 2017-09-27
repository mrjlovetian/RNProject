import React, {Component}from 'react';
import {View, StyleSheet, ListView, Text} from 'react-native';
import {getBuildList} from './../Api/MRJApi.js';

export default class BuildingList extends Component{

    // 加载进来
    componentDidMount() {
        this.getBuildingList()
    }

    // 数据初始化
    constructor(props){
        super(props);
        // listview数据源初始化
        this.state = {dataSource:new ListView.DataSource({
            rowHasChanged:(row1, row2) => row1 != row2
        }),
        loading:true,
    }
    }

    // 网络请求
    getBuildingList(){
        console.log('getBuildingList');
        getBuildList().then(res =>{
            console.log('请求成功-=-=-=-=-=-=-=-=', res.Data);
            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(res.Data),
                loading: false
            })
            console.log('**********************', this.state.dataSource);
        }).catch(res=>{
            console.log('请求失败-=-=-=-=-=-=-=-=', res);
        })
    }

    // 显示每行的数据源
    _renderRow(rowData){
        return(
            <View style={styles.main}>
                <Text>{rowData.buildingName}</Text>
            </View>
        )
    }

    // 导航标题
    static navigationOptions = {
        headerTitle:'楼盘详情'
    }

    // 初始化列表
    render(){
        return(
            
                <View style={{flex:1}}>
                    {
                        this.state.loading?<View style={styles.loading}></View>:<ListView dataSource={this.state.dataSource} renderRow={this._renderRow}/>
                        }
                    
                </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:'red',
        flex:1,
        height: 80
    },
    loading:{
        backgroundColor:'blue',
        flex:1,
    }
})