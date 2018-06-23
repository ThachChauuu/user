import React, { Component } from 'react';
import { Alert, View, Text, ScrollView, StyleSheet, Button, Image, FlatList, TouchableHighlight, TouchableOpacity, Dimensions, TextInput } from 'react-native';

import history from '../images/history.png';

export default class OrderHistory extends Component{

    static navigationOptions = {
        tabBarLabel: '',
        header: null,
        headerMode: 'none',
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={history}
            style={[styles.tabicon, { tintColor: tintColor }]}
          />
        ),
      };

    render(){
        return(
            <View style={{alignItems: 'center', flex: 1}}>
                <Text>Order History Component</Text>
            </View>
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