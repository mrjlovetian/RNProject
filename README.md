# RNProject 学习框架

## 编辑工具
工欲善其事必先利其器，推荐使用编辑工具VSCODE

## 三方框架
网络请求
```
"react-native-fetch-blob": "^0.10.8",
```

导航栏
```
"react-navigation": "^1.0.0-beta.11"
```

## 具体代码
创建一个导航栏
```
import {StackNavigator}from 'react-navigation';
import Main from './main.js';
import First from './First.js';
import Second from './Second.js';
import Mine from './Mine.js';
import Building from './BuildingList.js';

const MRJNavigator = StackNavigator(
    {
        Home:{
            screen:Main,
        },
        Mine:{
            screen:Mine,
        },
        BuildingList:{
            screen: Building,
        },
    },
    {
        navigationOptions:{
            headerBackTitle:null,
        },
        mode:'card',
    },
)
export default MRJNavigator
```

创建一个TAB
```
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
```

网络框架的封装(这里只是一个简单的封装)
```
import HTTP from 'react-native-fetch-blob';
import qs from 'qs';

function PostReques(url, param){
    return baseHttp({
        headers: {
            'Content-Type': 'application/x-www.form-urlencoded',
        },
        body:qs.stringify(param),
        method:'POST',
        url:url,
    })
}

function GetRequest(url, param){
    return baseHttp({
        headers: {
            'Content-Type': 'application/x-www.form-urlencoded',
        },
        body:qs.stringify(param),
        method:'GET',
        url:url,
    })
}

function baseHttp(props){
    return new Promise((resolve, reject) => {
        HTTP.fetch(props.method, props.url, props.header, props.body)
        .then(res =>{
            callBack(resolve, res)
        }).catch((errorMessage)=>{
            reject({
                code:-1,
                Message:errorMessage
            });
        });
    })  
}

function callBack(resolve, res){

}
export default {PostReques, GetRequest};
```



