import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style={{alignItems: 'center', flex: 1}}>
                <Text>Home Component</Text>
            </View>
        );
    }
}