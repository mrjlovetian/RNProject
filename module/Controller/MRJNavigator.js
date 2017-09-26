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