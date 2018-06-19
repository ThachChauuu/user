import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './header';


export default class Shop extends Component{
    render(){
        return(
            <View>
                <Header/>
                <View style={{alignItems: 'center', flex: 1}}>
                    <Text>Shop Component</Text>
                    {/* navigation Routes (home, search, order-history, profile) in here */}
                </View>
            </View>
        );
    }
}