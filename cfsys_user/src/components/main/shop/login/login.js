import React, { Component } from 'react';
import logo from '../images/logo.png';
import background from '../images/background.png';
import { Alert, View, Text, ScrollView, StyleSheet, Button, Image, FlatList, 
  TouchableHighlight, TouchableOpacity, Dimensions, TextInput, ImageBackground, ActivityIndicator } from 'react-native';

const window = Dimensions.get('window')


export default class LoginScreen extends React.Component {

  username = 'triet'
  password = '123'

  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.state = {isLoading: true};
  }

  componentDidMount(){
    return fetch('https://distance-latlong.herokuapp.com/lat1=34&long1=57&lat2=34&long2=23')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          loginData: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  showAlert = (message) => {
    Alert.alert(message)
  }

  _onLogin(username,password) {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    if(username == this.state.loginData.lat1 && password == this.state.loginData.long1){
      this.props.navigation.navigate('Main')
    }
    else{
      this.showAlert("Nhập sai tên hoặc password")
    }
  }

  static navigationOptions = {
    tabBarLabel: '',
    header: null,
    headerMode: 'none',
    showLabel: false,
  };

    render() {
      const { navigation } = this.props;

      return (
        <ImageBackground source = {background} style = {{flex:1, alignItems: 'center'}}>
          <Image
            source = {logo}
            style = {{width: window.width/2, height: window.width/3, marginTop: 50}}
          />
          <View style = {{flexDirection: 'column', marginTop: 40}}>
            <TextInput
              editable = {true}
              maxLength = {40}
              style = {{fontSize: 18, width: (window.width/2) + 50, marginBottom: 10, borderStartColor: 'white', color: 'white'}}
              placeholder = 'Tên đăng nhập'
              placeholderTextColor = 'white'
              underlineColorAndroid = 'white'
              onChangeText = {(username) => this.setState({username})}
            />
            <TextInput
              editable = {true}
              maxLength = {40}
              style = {{fontSize: 18, width: (window.width/2) + 50, marginBottom: 30, borderStartColor: 'white', color: 'white'}}
              placeholder = 'Mật khẩu'
              placeholderTextColor = 'white'
              underlineColorAndroid = 'white'
              secureTextEntry = {true}
              onChangeText = {(password) => this.setState({password})}
            />
            <Button
                buttonStyle= {{fontSize: 100, backgroundColor : 'red', tintColor: 'red', color: 'red'}}
                color = '#E74C3C'
                onPress={() => this._onLogin(this.state.username,this.state.password)}
                title="Login"
            />
          </View>
        </ImageBackground>
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
    },
    backgroundImage: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover'
  }
  });