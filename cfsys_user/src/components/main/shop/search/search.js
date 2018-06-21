import React, { Component } from 'react';
import { Alert, View, Text, ScrollView, StyleSheet, Button, Image, FlatList, TouchableHighlight, TouchableOpacity, Dimensions, TextInput } from 'react-native';

import search from '../images/search.png';
import { SearchBar } from 'react-native-elements';

export default class Search extends Component{

    static navigationOptions = {
        tabBarLabel: '',
        header: null,
        headerMode: 'none',
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={search}
            style={[styles.tabicon, { tintColor: tintColor }]}
          />
        ),
      };

    render(){
        return(
            <View style={{flex: 1}}>
              <View style = {{flexDirection: 'row'}}>
                  <View style={{height: 58, justifyContent: 'center', alignItems: 'center', backgroundColor:'#3396FF', borderTopWidth: 1,
                      borderBottomWidth: 1, paddingLeft: 10}}> 
                      <Image
                      source={search}
                      style={[styles.searchicon, { tintColor: 'white' }]}
                      />
                  </View>
                  <View style={{flex: 1, height: 60}}>
                      <SearchBar
                      containerStyle={{backgroundColor:'#3396FF', borderWidth: 0, borderColor: '#3396FF'}}
                      inputStyle={{color:'#3396FF', backgroundColor: 'white', borderColor: '#3396FF'}}
                      //placeholderTextColor='#fff'
                      showLoading = {true} 
                      //platform = "android"
                      //cancelIcon={{ type: 'font-awesome', name: 'search', size: 30 }}
                      //clearIcon
                      //icon = {{ color: '#3B6693', style: styles.icon, name: 'search' }}
                      //showLoadingIcon
                      icon = {false}
                      searchIcon={false}
                      noIcon
                      placeholder='Tìm kiếm...' />
                  </View>
                </View>
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