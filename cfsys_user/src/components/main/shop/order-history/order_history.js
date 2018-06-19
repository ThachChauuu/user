import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class OrderHistory extends Component{
    render(){
        return(
            <View style={{alignItems: 'center', flex: 1}}>
                <Text>Order History Component</Text>
            </View>
        );
    }
}