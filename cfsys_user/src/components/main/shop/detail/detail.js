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


export default class DetailScreen extends React.Component {
    
    rank = 3.2
    roundrank = Math.round(this.rank)
    title = "Coffee Shop 1"
    address = "502/48/23 Cách Mạng Tháng 8, P. 13, Quận Tân Bình, TP.HCM"
    _keyExtractor = (item, index) => item.id;

    render() {
      return (
        <View style={{flex: 1}}>

        {/* toolbar */}
        <View style={{ flexDirection: 'row', backgroundColor: '#3396FF', height: 58, alignContent: 'center', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5}}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              source={back}
              style={[styles.searchicon, { tintColor: 'white' }]}
            />
            </TouchableOpacity>
          </View>
          <Text style={{justifyContent:'center', color: 'white', fontSize: 20, marginLeft: 10, fontWeight: 'bold'}}>
            {this.title.toUpperCase()}
          </Text>
          <Image
              source={shoppingcart}
              style={[styles.icon, { tintColor: 'white', marginRight: 5 }]}
            />
        </View>

        {/* shop detail */}
        <ScrollView style= {{flex: 1}}>
            {/* Ảnh nền */}
            <View>
            <Image
              source={coffee}
              style={{ height: 240, width: window.width}}
            />

            {/* Thông tin shop */}
            <View style = {{width: window.width, backgroundColor: 'rgba(52, 52, 52, 0.6)', marginTop: -76}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 2}}>
                    <Text style={{color: '#ff8566', fontWeight: 'bold', fontSize: 24, marginLeft: 10}}>
                        {this.title}
                    </Text>
                    <View style = {{flexDirection: 'row', marginRight: 10}}>
                    <Image
                            style = {{height: 30, width: 30, tintColor: starcolors[(this.roundrank-1).toString()] }}
                            source={star}
                            />
                            <Image
                            style = {{height: 30, width: 30, tintColor: starcolors[(this.roundrank-2).toString()]}}
                            source={star}
                            />
                            <Image
                            style = {{height: 30, width: 30, tintColor: starcolors[(this.roundrank-3).toString()]}}
                            source={star}
                            />
                            <Image
                            style = {{height: 30, width: 30, tintColor: starcolors[(this.roundrank-4).toString()]}}
                            source={star}
                            />
                            <Image
                            style = {{height: 30, width: 30, tintColor: starcolors[(this.roundrank-5).toString()]}}
                            source={star}
                            />
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2}}>
                    <Text numberOfLines={2} style={{fontSize: 15, marginLeft: 10, color: 'white', width: window.width/2 + 10}}>
                        {this.address}
                    </Text>
                    <Text style={{fontSize: 18, marginRight: 72, color: '#ff8566'}}>{this.rank.toString() + "/5"}</Text>
                </View> 
            </View>
            </View>

            {/* Vote for us */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between',paddingTop: 8, paddingBottom: 8, alignItems: 'center'}}>
                <Text style={{color: '#3396FF', fontSize: 20, marginLeft: 10}}>
                    Đánh giá
                </Text>
                <View style = {{flexDirection: 'row', marginRight: 10}}>
                    <Image
                    style = {{height: 30, width: 30, tintColor: '#BDBBAB'}}
                    source={star}
                    />
                    <Image
                    style = {{height: 30, width: 30, tintColor: '#BDBBAB'}}
                    source={star}
                    />
                    <Image
                    style = {{height: 30, width: 30, tintColor: '#BDBBAB'}}
                    source={star}
                    />
                    <Image
                    style = {{height: 30, width: 30, tintColor: '#BDBBAB'}}
                    source={star}
                    />
                    <Image
                    style = {{height: 30, width: 30, tintColor: '#BDBBAB'}}
                    source={star}
                    />
                </View>
            </View>

            {/* mua sỉ, đặt chỗ */}
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                <TouchableOpacity>
                    <Text style={{width: window.width/2 - 2, color: '#3396FF', fontSize: 20, backgroundColor: '#F5F5F5', 
                    textAlign: 'center', paddingTop: 10, paddingBottom: 10}}>
                    Mua sỉ
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{width: window.width/2 - 2, color: '#3396FF', fontSize: 20, backgroundColor: '#F5F5F5', 
                    textAlign: 'center', paddingTop: 10, paddingBottom: 10}}>
                    Đặt chỗ
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Menu */}
            <Text style={{width: window.width, color: '#7CD175', fontSize: 22, fontWeight: 'bold',
            marginLeft:10, paddingTop: 10, paddingBottom: 5}}>MENU</Text>
            <View style = {{width: window.width, height: 1, backgroundColor: 'gray'}}/>
            <View style={{width: window.width}}>
                <FlatList
                justifyContent = "space-between"
                    data={[
                    {id:'1', image: icecoffee, title: 'Iced Coffee', price: '10.000d'},
                    {id:'2', image: milkcoffee, title: 'Milk Coffee', price: '12.000d'},
                    {id:'3', image: milkcoffee, title: 'Milk Coffee', price: '12.000d'},
                    ]}
                    keyExtractor = {this._keyExtractor}
                    renderItem={({item}) => 
                    <View style={{ flex:1, flexDirection: 'row', padding: 5, alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style = {{flexDirection: 'row'}}>
                            <Image
                            style = {{height: 70, width: 70}}
                            source={item.image}
                            />
                            <View style = {{flexDirection: 'column', marginLeft: 10}}>
                                <Text style={{color: 'black', fontSize: 22, fontWeight: 'bold'}}>{item.title}</Text>
                                <Text style={{color: 'gray', fontSize: 15}}>{item.price}</Text>
                            </View>
                        </View>
                        <Image
                        style = {{height: 40, width: 40, tintColor: 'gray', marginRight: 10}}
                        source={plus}
                        />
                    </View>
                    }
                />
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