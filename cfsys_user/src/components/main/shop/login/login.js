import React, { Component } from 'react';
import logo from '../images/logo.png';
import background from '../images/background.png';
import { Alert, View, Text, ScrollView, StyleSheet, Button, Image, FlatList, 
  TouchableHighlight, TouchableOpacity, Dimensions, TextInput, ImageBackground, ActivityIndicator, Modal, NetInfo } from 'react-native';

const window = Dimensions.get('window')


export default class LoginScreen extends React.Component {

  username = 'triet'
  password = '123'

  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.state = {isShow: true};
    this.state = {loginData: null};
    this.state = {success: false};
  }

  _onLogin(username,password) {
    this.setState({isShow: true})
    this.setState({loginData: null})
    NetInfo.isConnected.fetch().then(isConnected => {
      if(isConnected){
        return fetch('https://distance-latlong.herokuapp.com/lat1=34&long1=57&lat2=34&long2=23')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isShow: false,
          loginData: responseJson,
        }, function(){
          if(this.state.loginData!=null){
            if(username == this.state.loginData.lat1 && password == this.state.loginData.long1){
              this.props.navigation.navigate('Main')
            }
            else{
              this.setState({isShow:false})
              Alert.alert("Nhập sai tên hoặc password")
            }
          }
        });

      })
      .catch((error) =>{
        this.setState({isShow: false})
        Alert.alert("Lỗi mạng hoặc không thể lấy dữ liệu")
      });
      }
      else{
        this.setState({isShow: false})
        Alert.alert(
          'Lỗi',
          'Lỗi mạng hoặc không thể lấy dữ liệu',
          [
            {text: 'OK'},
          ],
          { cancelable: false }
        )
      }
    });
    
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
          {this.state.isShow &&
            <Modal
              transparent={true}
              animationType={'none'}
              visible={this.state.isShow}
              onRequestClose = {() => this.setState({isShow:false})}>
              <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                  <ActivityIndicator
                    animating = {this.state.isShow}
                    color = '#6F4E37'
                    size = {100}/>
                    <Text style = {{fontSize:20, fontWeight: 'bold'}}>Đang lấy dữ liệu</Text>
                </View>
              </View>
            </Modal>
          }
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
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF88'
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 200,
    width: 200,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
  });