import React, { Component } from 'react';
import { } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator} from 'react-navigation';

import Home from './home/home';
import Search from './search/search';
import OrderHistory from './order-history/order_history';
import Profile from './profile/profile';

const Tabs = TabNavigator(
    {
        Home: {
            screen: Home,
        },
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
        initialRouteName: 'Home',
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: false,
            showLabel: true,
            activeTintColor: 'blue',
            inactiveTintColor: 'white',
            upperCaseLabel: false,
            allowFontScaling: true,
            labelStyle: {
                fontSize: 12,
                fontWeight: '600',
            },
        },
        swipeEnabled: true,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `home${focused ? '' : '-outline'}`;
                } else if (routeName === 'Search') {
                    iconName = `search${focused ? '' : '-outline'}`;
                } else if (routeName === 'OrderHistory') {
                    iconName = `reorder${focused ? '' : '-outline'}`;
                } else {
                    iconName = `person${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            }
        }),
    }

);

export default class Shop extends Component {
    render() {
        return (
            <Tabs />
        );
    }
}