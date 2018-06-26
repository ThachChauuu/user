import React, { Component } from 'react';
import search from '../images/search.png';
import shoppingcart from '../images/shopping.png';
import coffee from '../images/coffee.jpg';
import star from '../images/star.png';
import back from '../images/back.png';
import plus from '../images/plus.png';
import icecoffee from '../images/icecoffee.jpg';
import milkcoffee from '../images/milkcoffee.jpg';
import { Alert, View, Text, ScrollView, StyleSheet, Button, Image, FlatList, TouchableHighlight, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { Rating } from 'react-native-elements';

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


export default class DetailScreen extends React.Component {
    
  _keyExtractor = (item, index) => index.toString();

    render() {
      const { navigation } = this.props;
      const id = navigation.getParam('id', 'FAIL');
      const coffee_detail = coffee_list[id-1];
      return (
        <View style={{flex: 1}}>

        {/* toolbar */}
        <View style={{ flexDirection: 'row', backgroundColor: '#6F4E37', height: 58, alignContent: 'center', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5}}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              source={back}
              style={[styles.searchicon, { tintColor: 'white' }]}
            />
            </TouchableOpacity>
          </View>
          <Text style={{justifyContent:'center', color: 'white', fontSize: 20, marginLeft: 10, fontWeight: 'bold'}}>
            {coffee_detail.title.toUpperCase()}
          </Text>
          <Image
              source={shoppingcart}
              style={[styles.icon, { tintColor: 'white', marginRight: 5 }]}
            />
        </View>

        {/* shop detail */}
        <ScrollView style= {{flex: 1}} showsVerticalScrollIndicator = {false}>
            {/* Ảnh nền */}
            <View>
            <Image
              source={coffee}
              style={{ height: 240, width: window.width}}
            />

            {/* Thông tin shop */}
            <View style = {{width: window.width, backgroundColor: 'rgba(52, 52, 52, 0.6)', marginTop: -75}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 2}}>
                    <Text style={{color: '#ff8566', fontWeight: 'bold', fontSize: 24, marginLeft: 10}}>
                        {coffee_detail.title}
                    </Text>
                    <View style = {{flexDirection: 'row', marginRight: 10}}>
                    <Image
                            style = {{height: 30, width: 30, tintColor: starcolors[(Math.round(coffee_detail.rank)-1).toString()] }}
                            source={star}
                            />
                            <Image
                            style = {{height: 30, width: 30, tintColor: starcolors[(Math.round(coffee_detail.rank)-2).toString()]}}
                            source={star}
                            />
                            <Image
                            style = {{height: 30, width: 30, tintColor: starcolors[(Math.round(coffee_detail.rank)-3).toString()]}}
                            source={star}
                            />
                            <Image
                            style = {{height: 30, width: 30, tintColor: starcolors[(Math.round(coffee_detail.rank)-4).toString()]}}
                            source={star}
                            />
                            <Image
                            style = {{height: 30, width: 30, tintColor: starcolors[(Math.round(coffee_detail.rank)-5).toString()]}}
                            source={star}
                            />
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2}}>
                    <Text numberOfLines={2} style={{fontSize: 15, marginLeft: 10, color: 'white', width: window.width/2 + 10}}>
                        {coffee_detail.address}
                    </Text>
                    <Text style={{fontSize: 18, marginRight: 72, color: '#ff8566', fontWeight: 'bold'}}>{coffee_detail.rank.toString() + "/5"}</Text>
                </View> 
            </View>
            </View>

            {/* Vote for us */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between',paddingTop: 8, paddingBottom: 8, alignItems: 'center', backgroundColor: 'white'}}>
                <Text style={{color: '#6F4E37', fontSize: 20, marginLeft: 10}}>
                    Đánh giá
                </Text>
                <Rating
                  showRating = {false}
                  type="star"
                  fractions={1}
                  startingValue={0}
                  imageSize={30}
                  //onFinishRating={this.ratingCompleted}
                  //style={{ paddingVertical: 10 }}
                />
            </View>

            {/* mua sỉ, đặt chỗ */}
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                <TouchableOpacity>
                    <Text style={{width: window.width/2 - 2, color: 'white', fontSize: 20, backgroundColor: '#6F4E37', 
                    textAlign: 'center', paddingTop: 10, paddingBottom: 10}}>
                    Mua sỉ
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{width: window.width/2 - 2, color: 'white', fontSize: 20, backgroundColor: '#6F4E37', 
                    textAlign: 'center', paddingTop: 10, paddingBottom: 10}}>
                    Đặt chỗ
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Menu */}
            <View style = {{backgroundColor: 'white', marginTop: 10}}>
            <View style={{backgroundColor: '#F7F9F9'}}>
            <Text style={{width: window.width, color: '#7CD175', fontSize: 22, fontWeight: 'bold',
            marginLeft:10, paddingTop: 10, paddingBottom: 5, backgroundColor: '#F7F9F9'}}>MENU</Text>
            </View>
            <View style={{width: window.width}}>
                <FlatList
                justifyContent = "space-between"
                    data={coffee_detail.menu}
                    keyExtractor = {this._keyExtractor}
                    renderItem={({item}) => 
                    <View style= {{flexDirection: 'column'}}>
                    <View style={{ flex:1, flexDirection: 'row', padding: 5, alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style = {{flexDirection: 'row'}}>
                            <Image
                            style = {{height: 70, width: 70}}
                            source={{uri: item.image}}
                            />
                            <View style = {{flexDirection: 'column', marginLeft: 10}}>
                                <Text style={{color: 'black', fontSize: 22, fontWeight: 'bold'}}>{item.title}</Text>
                                <Text style={{color: 'gray', fontSize: 15}}>{(item.price/1000).toFixed(3) + "đ"}</Text>
                            </View>
                        </View>
                        <Image
                        style = {{height: 40, width: 40, tintColor: 'gray', marginRight: 10}}
                        source={plus}
                        />
                    </View>
                      <View style = {{height: 0.5, backgroundColor: 'gray', marginTop: 10}}/>
                    </View>
                    }
                />
            </View>
            </View>


        </ScrollView>

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