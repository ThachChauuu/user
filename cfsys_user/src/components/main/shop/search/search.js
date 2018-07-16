import React, { Component } from 'react';
import { Alert, View, Text, ScrollView, StyleSheet, Button, Image, FlatList, TouchableHighlight, TouchableOpacity, Dimensions, TextInput } from 'react-native';

import search from '../images/search.png';
import coffee from '../images/coffee.jpg';
import { SearchBar } from 'react-native-elements';

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

const dimension = Dimensions.get('window')

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

  const popular_coffee = [
    {id:1, title: 'Coffee Shop 1', address: '187 - 189 Vành Đai Trong, P. Bình Trị, Quận Gò Vấp',rank:4.8, minprice: 10000, maxprice: 50000},
    {id:2, title: 'Coffee Shop 2', address: '1 Quang Trung, P. 11, Quận Gò Vấp',rank:4.2, minprice: 10000, maxprice: 50000},
    {id:3, title: 'Coffee Shop 3', address: '24/2A Quang Trung, Quận Gò Vấp',rank:4.6, minprice: 10000, maxprice: 50000},
    {id:4, title: 'Coffee Shop 4', address: '590/29 Cách Mạng Tháng 8, P.11, Quận Tân Bình',rank:3.8, minprice: 10000, maxprice: 50000},
    ]

export default class Search extends Component{

  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.state = {isShow: false};
    this.state = {list: popular_coffee};
  }

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

    onSearch(keyword){
      if(keyword.length == 0){
        this.setState({list:popular_coffee})
      }
      else{
        var array = []
        for (var i = 0; i < coffee_list.length; i++) {
          if(coffee_list[i].title.toLowerCase().indexOf(keyword) != -1){
            array.push(coffee_list[i])
          }
        }
        this.setState({list:array})
      }
    }

    render(){
        return(
            <View style={{flex: 1}}>
              <View style = {{flexDirection: 'row'}}>
                  <View style={{height: 58, justifyContent: 'center', alignItems: 'center', backgroundColor:'#6F4E37', borderTopWidth: 1,
                      borderBottomWidth: 1, paddingLeft: 10}}> 
                      <Image
                      source={search}
                      style={[styles.searchicon, { tintColor: 'white' }]}
                      />
                  </View>
                  <View style={{flex: 1, height: 60}}>
                      <SearchBar
                      containerStyle={{backgroundColor:'#6F4E37', borderWidth: 0, borderColor: '#6F4E37'}}
                      inputStyle={{color:'#6F4E37', backgroundColor: 'white', borderColor: '#6F4E37'}}
                      onChangeText={(keyword) => this.onSearch(keyword)}
                      noIcon
                      placeholder='Tìm kiếm...' />
                  </View>
                </View>
                {
                  <View style = {{backgroundColor: 'white'}}>
                    <FlatList
                      showsVerticalScrollIndicator={false}
                      data={this.state.list}
                      keyExtractor = {this._keyExtractor}
                      renderItem={({item}) => 
                      <TouchableOpacity onPress = {() => this.props.navigation.navigate('Detail', {id: item.id})}>
                      <View style = {{flexDirection: 'column'}}>
                          <View style={{ flex:1, flexDirection: 'row',marginTop: 5, alignItems: 'center', width: dimension.width, backgroundColor: 'white'
                          , justifyContent: 'space-between'}}>
                              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                  <Image
                                  style = {{height: 80, width: 80, marginLeft: 10, marginTop: 10}}
                                  source={coffee}
                                  />
                                  <View style = {{flexDirection: 'column', marginLeft: 15, marginRight: 10}}>
                                      <Text numberOfLines={1} style={{color: '#ff8566', fontWeight: 'bold', fontSize: 20, width: dimension.width/2}}>{item.title}</Text>
                                      <Text numberOfLines={1} style={{fontSize: 15, width: dimension.width/2}}>{item.address}</Text>
                                      <Text numberOfLines={1} style={{fontSize: 15, width: dimension.width/2}}>{"Giá từ " + (item.minprice/1000).toFixed(3) + " - " + (item.maxprice/1000).toFixed(3)
                                          + " VND"}</Text>
                                  </View>
                              </View>
                              <View style = {{flexDirection: 'column', alignItems: 'center', marginRight: 10}}>
                                  <Text style={{fontSize: 18, color: '#7CD175', fontWeight: 'bold'}}>
                                  {item.rank.toString() + "/5"}</Text>
                                  <Text style={{fontSize: 15}}>{item.rank+" km"}</Text>
                              </View>
                          </View>
                          <View style = {{height: 0.5, backgroundColor: 'gray', marginTop: 10}}/>
                      </View>
                      </TouchableOpacity>
                      }
                    />
                  </View>
                }
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