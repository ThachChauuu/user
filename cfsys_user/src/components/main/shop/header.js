import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Header extends Component{
    render(){
        return(
            <View style={{alignItems: 'center'}}>
                <Text>Hearder Bar</Text>
            </View>
        );
    }
}