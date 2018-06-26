import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, createBottomTabNavigator, StackNavigator, createStackNavigator} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen'

import Home from './home/home';
import Search from './search/search';
import OrderHistory from './order-history/order_history';
import Profile from './profile/profile';
import Detail from './detail/detail';
import MoreList from './more-list/more_list';
import home from './images/home.png';

// const FeedStack = createStackNavigator({
//     Home: Home,
//     Detail: Detail,
//     MoreList: MoreList
// },
// {
//     initialRouteName: 'Home'
// /* any other route you want to render under the tab bar */
// });

// FeedStack.navigationOptions = {
//     tabBarLabel: '',
//     header: null,
//     headerMode: 'none',
//     showLabel: false,
//     tabBarIcon: ({ tintColor }) => (
//         <Image
//         source={home}
//         style={[styles.tabicon, { tintColor: tintColor }]}
//         />
//     ),
    
// };

const TabBar = createBottomTabNavigator(
    {
        Home: Home,
        Search: {
            screen: Search
        },
        OrderHistory: {
            screen: OrderHistory
        },
        Profile: {
            screen: Profile
        }
    }, 
    {
        //initialRouteName: 'Home',
        tabBarPosition: 'bottom',
        headerMode: 'none',
        tabBarOptions: {
            activeTintColor: '#6F4E37',
            showLabel: false,
            inactiveTintColor: '#e1e1d0'
        },
        swipeEnabled: false,
    });
  

    const App = StackNavigator({
        HomeTab: TabBar,
        Detail: Detail,
        MoreList: MoreList,
      },
      {
        headerMode: 'none',
      });

    // test//////////////////////////////////////////////////
    
    
    // const TabNavigator = createBottomTabNavigator({
    //     Feed: FeedStack,
    //     Profile: ProfileScreen,
    // });
    
    // const HomeStack = createStackNavigator({
    //     Tabs: TabNavigator,
    //     Details: DetailsScreen,
    /* any other route you want to render above the tab bar */
    // });
    //test///////////////////////////////////////////////////////

export default class Shop extends Component {
    componentDidMount() {
      SplashScreen.hide();
  }
    render() {
        return (
            <App/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    flatlistver: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    flatlisthor: {
      height: 200,
      padding: 10,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    icon: {
      width: 40,
      height: 40,
    },
    searchicon: {
      width: 35,
      height: 35,
    },
    tabicon: {
      width: 26,
      height: 26,
    },
    userphoto: {
      width: 100,
      height: 100,
    },
    star: {
      width: 5,
      height: 5,
    }
  });