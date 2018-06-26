import React, { Component } from 'react';
import { Alert, View, Text, ScrollView, StyleSheet, Button, Image, FlatList, TouchableHighlight, TouchableOpacity, Dimensions, TextInput } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-vector-icons/Ionicons';
//import { Icon } from 'react-native-elements'

import address from '../images/address.png';
import bell from '../images/bell.png';
import comment from '../images/comment.png';
import contact from '../images/contact.png';
import gift from '../images/gift.png';
import heart from '../images/heart.png';
import history from '../images/history.png';
import home from '../images/home.png';
import note from '../images/note.png';
import question from '../images/question.png';
import setting from '../images/setting.png';
import userphoto from '../images/userphoto.png';
import user from '../images/user.png';

export default class Profile extends Component{

    static navigationOptions = {
        tabBarLabel: '',
        showLabel: false,
        header: null,
        headerMode: 'none',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={user}
            style={[styles.tabicon, { tintColor: tintColor }]}
          />
        ),
      };

    _onPressButton() {
        Alert.alert('You tapped the button!')
      }
    
      render() {
        return (
          <ScrollView>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 10}}>
              <Image
                source={userphoto}
                style={[styles.userphoto, { tintColor: 'black', borderRadius: 100 }]}
              />
              <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
                <Text style={{fontWeight: 'bold', fontSize: 28}}>{"Nguyễn Văn A"}</Text>
                <Text style={{ fontSize: 15}}>{"Thành viên"}</Text>
              </View>
            </View>
            <TouchableHighlight onPress={this._onPressButton} >
            
            <View style={{flex: 1,flexDirection: 'row', alignItems: 'center', backgroundColor: '#6F4E37'}}>
              <Image
                source={bell}
                style={[styles.icon, { tintColor: 'white', marginLeft: 40, margin: 5 }]}
              />
              <Text style={{ fontSize: 22, color: 'white'}}>{"Thông báo của tôi"}</Text>
            </View>
            </TouchableHighlight>
            
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={gift}
                style={[styles.icon, { tintColor: 'black', marginLeft: 40, margin: 5 }]}
              />
              <Text style={{ fontSize: 22}}>{"Điểm thưởng"}</Text>
            </View>
            
            <View style={{flex: 1,flexDirection: 'row', alignItems: 'center', backgroundColor: '#6F4E37'}}>
              <Image
                source={heart}
                style={[styles.icon, { tintColor: 'white', marginLeft: 40, margin: 5 }]}
              />
              <Text style={{ fontSize: 22, color: 'white'}}>{"Sản phẩm yêu thích"}</Text>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={note}
                style={[styles.icon, { tintColor: 'black', marginLeft: 40, margin: 5 }]}
              />
              <Text style={{ fontSize: 22}}>{"Quản lý đơn hàng"}</Text>
            </View>
    
            <Text style={{ fontSize: 18, marginLeft: 80, margin: 5}}>{"Đơn hàng mua lẻ"}</Text>
            <Text style={{ fontSize: 18, marginLeft: 80, margin: 5}}>{"Đơn hàng tại chỗ"}</Text>
            <Text style={{ fontSize: 18, marginLeft: 80, margin: 5}}>{"Đơn hàng mua sỉ"}</Text>
            
            <View style={{flex: 1,flexDirection: 'row', alignItems: 'center', backgroundColor: '#6F4E37'}}>
              <Image
                source={history}
                style={[styles.icon, { tintColor: 'white', marginLeft: 40, margin: 5 }]}
              />
              <Text style={{ fontSize: 22, color: 'white'}}>{"Lịch sử giao dịch"}</Text>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={address}
                style={[styles.icon, { tintColor: 'black', marginLeft: 40, margin: 5 }]}
              />
              <Text style={{ fontSize: 22}}>{"Sổ địa chỉ"}</Text>
            </View>
            
            <View style={{flex: 1,flexDirection: 'row', alignItems: 'center', backgroundColor: '#6F4E37'}}>
              <Image
                source={comment}
                style={[styles.icon, { tintColor: 'white', marginLeft: 40, margin: 5 }]}
              />
              <Text style={{ fontSize: 22, color: 'white'}}>{"Nhận xét của tôi"}</Text>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={setting}
                style={[styles.icon, { tintColor: 'black', marginLeft: 40, margin: 5 }]}
              />
              <Text style={{ fontSize: 22}}>{"Cài đặt ứng dụng"}</Text>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#6F4E37'}}>
              <Image
                source={question}
                style={[styles.icon, { tintColor: 'white', marginLeft: 40, margin: 5 }]}
              />
              <Text style={{ fontSize: 22, color: 'white'}}>{"Hỏi đáp"}</Text>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={contact}
                style={[styles.icon, { tintColor: 'black', marginLeft: 40, margin: 5 }]}
              />
              <Text style={{ fontSize: 22}}>{"Liên hệ với chúng tôi"}</Text>
            </View>
            <Button
              buttonStyle= {{fontSize: 100, backgroundColor : 'red', tintColor: 'red', color: 'red'}}
              color = '#E74C3C'
              onPress={this._onPressButton}
              title="Đăng xuất"
            />
          </ScrollView>
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