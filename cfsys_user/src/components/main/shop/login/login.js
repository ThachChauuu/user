import React, { Component } from 'react';
import logo from '../images/logo.png';
import background from '../images/background.png';
import { Alert, View, Text, ScrollView, StyleSheet, Button, Image, FlatList, 
  TouchableHighlight, TouchableOpacity, Dimensions, TextInput, ImageBackground } from 'react-native';

const window = Dimensions.get('window')
const starcolors = {
    '1': '#FFE033',
    '2': '#FFE033',
    '3': '#FFE033',
    '4': '#FFE033',
    '0': '#FFE033',
    '-1': '#E0DEC8',
    '-2': '#E0DEC8',
    '-3': '#E0DEC8',
    '-4': '#E0DEC8',
    '-5': '#E0DEC8',
  }
const drinks = [
  {id:1, image: 'http://phoharu.com.vn/image/cache/catalog/13-thuc-uong/cafe-den-1-1000x668.jpg', title: 'Cà phê đá', price: 18000},
  {id:2, image: 'http://phoharu.com.vn/image/cache/catalog/13-thuc-uong/Cafe-sua-da1-1000x668.jpg', title: 'Cà phê sữa đá', price: 20000},
  {id:3, image: 'http://cunghoangdao.com.vn/wp-content/uploads/2016/04/ca-phe.jpg', title: 'Cà phê sữa nóng', price: 20000},
  {id:4, image: 'http://mau2.webmau.top/uploads/images/ca-phe-den-nong.jpg', title: 'Cà phê đen nóng', price: 18000},
  {id:5, image: 'https://epicure.vn/wp-content/uploads/2017/08/cafe-capuchino-2.jpg', title: 'Cappuccino', price: 25000},
  {id:6, image: 'http://chauolong.com/wp-content/uploads/2016/11/tra-dao.jpg', title: 'Cà phê đá', price: 28000},
  {id:7, image: 'https://meta.vn/Data/image/2017/09/12/cach-lam-cookie-da-xay.jpg', title: 'Cookie đá xay', price: 32000},
  {id:8, image: 'https://bici1.r.worldssl.net/wp-content/uploads/2017/07/matcha-frappuccino.jpg', title: 'Matcha đá xay', price: 38000},
  {id:9, image: 'https://abby.vn/wp-content/uploads/2017/05/milk-foam-3-1.jpg', title: 'Trà đen machiato', price: 38000},
  ]

const coffee_list = [
  {id:1, title: 'Coffee Shop 1', address: '187 - 189 Vành Đai Trong, P. Bình Trị, Quận Gò Vấp',rank:4.8, minprice: 10000, maxprice: 50000, menu: drinks},
    {id:2, title: 'Coffee Shop 2', address: '1 Quang Trung, P. 11, Quận Gò Vấp',rank:4.2, minprice: 10000, maxprice: 50000, menu: drinks},
    {id:3, title: 'Coffee Shop 3', address: '24/2A Quang Trung, Quận Gò Vấp',rank:4.6, minprice: 10000, maxprice: 50000, menu: drinks},
    {id:4, title: 'Coffee Shop 4', address: '590/29 Cách Mạng Tháng 8, P.11, Quận Tân Bình',rank:3.8, minprice: 10000, maxprice: 50000, menu: drinks},
    {id:5, title: 'Coffee Shop 5', address: 'A4 - A5 Đồng Nai, P. 15, Quận 10',rank:2.7, minprice: 10000, maxprice: 50000, menu: drinks},
    {id:6, title: 'Coffee Shop 6', address: '84 Nguyễn Du, P. Bến Nghé, Quận 1',rank:4.4, minprice: 10000, maxprice: 50000, menu: drinks},
    {id:7, title: 'Coffee Shop 7', address: '84 Huỳnh Văn Bánh, P. 15, Quận 5',rank:3.4, minprice: 10000, maxprice: 50000, menu: drinks},
    {id:8, title: 'Coffee Shop 8', address: '2B - 2CThi Sách, P. Bến Nghé, Quận 1',rank:2.5, minprice: 10000, maxprice: 50000, menu: drinks},
]


export default class LoginScreen extends React.Component {
    
  _keyExtractor = (item, index) => index.toString();

  static navigationOptions = {
    tabBarLabel: '',
    header: null,
    headerMode: 'none',
    showLabel: false,
  };

    render() {
      const { navigation } = this.props;
      const id = navigation.getParam('id', 'FAIL');
      const coffee_detail = coffee_list[id-1];
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
              style = {{fontSize: 15, width: (window.width/2) + 50, marginBottom: 10, borderStartColor: 'white', color: 'white'}}
              placeholder = 'Tên đăng nhập'
            />
            <TextInput
              editable = {true}
              maxLength = {40}
              style = {{fontSize: 15, width: (window.width/2) + 50, marginBottom: 30, borderStartColor: 'white', color: 'white'}}
              placeholder = 'Mật khẩu'
            />
            <Button
                buttonStyle= {{fontSize: 100, backgroundColor : 'red', tintColor: 'red', color: 'red'}}
                color = '#E74C3C'
                onPress={() => this.props.navigation.navigate('Main')}
                title="Login"
            />
          </View>
        </ImageBackground>
      );
    }
  }

  class BackgroundImage extends Component {

    render() {
        return (
            <Image source={background}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        )
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