import React, { Component } from 'react';
import search from '../images/search.png';
import shoppingcart from '../images/shopping.png';
import coffee from '../images/coffee.jpg';
import star from '../images/star.png';
import home from '../images/home.png';
import Detail from '../detail/detail';
import { Alert, View, Text, ScrollView, StyleSheet, Button, Image, FlatList, TouchableHighlight, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { Rating } from 'react-native-elements';
import MoreList from '../more-list/more_list';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-vector-icons/Ionicons';
//import { Icon } from 'react-native-elements'

const dimension = Dimensions.get('window')
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

  const popular_coffee = [
    {id:1, title: 'Coffee Shop 1', address: '187 - 189 Vành Đai Trong, P. Bình Trị, Quận Gò Vấp',rank:4.8, minprice: 10000, maxprice: 50000},
    {id:2, title: 'Coffee Shop 2', address: '1 Quang Trung, P. 11, Quận Gò Vấp',rank:4.2, minprice: 10000, maxprice: 50000},
    {id:3, title: 'Coffee Shop 3', address: '24/2A Quang Trung, Quận Gò Vấp',rank:4.6, minprice: 10000, maxprice: 50000},
    {id:4, title: 'Coffee Shop 4', address: '590/29 Cách Mạng Tháng 8, P.11, Quận Tân Bình',rank:3.8, minprice: 10000, maxprice: 50000},
    ]
const nearby_coffee = [
    {id:5, title: 'Coffee Shop 5', address: 'A4 - A5 Đồng Nai, P. 15, Quận 10',rank:2.7, minprice: 10000, maxprice: 50000},
    {id:6, title: 'Coffee Shop 6', address: '84 Nguyễn Du, P. Bến Nghé, Quận 1',rank:4.4, minprice: 10000, maxprice: 50000},
    {id:7, title: 'Coffee Shop 7', address: '84 Huỳnh Văn Bánh, P. 15, Quận 5',rank:3.4, minprice: 10000, maxprice: 50000},
    {id:8, title: 'Coffee Shop 8', address: '2B - 2CThi Sách, P. Bến Nghé, Quận 1',rank:2.5, minprice: 10000, maxprice: 50000},
    ]

 export default class Home extends React.Component{

    _keyExtractor = (item, index) => index.toString();
    _onPressButton() {
        return(
            <MoreList title="ahihi"/>
        );
      }

    static navigationOptions = {
        tabBarLabel: '',
        header: null,
        headerMode: 'none',
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={home}
            style={[styles.tabicon, { tintColor: tintColor }]}
          />
        ),
      };

    render(){
        return(
            <View style = {{flex: 1}}>
            <View style={{ flexDirection: 'row', backgroundColor: '#6F4E37', height: 58, alignContent: 'center', alignItems: 'center', 
                justifyContent: 'space-between', width: dimension.width}}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')}>
                        <Image
                        source={search}
                        style={[styles.searchicon, { tintColor: 'white' }]}
                        />
                    </TouchableOpacity>
                    </View>
                    <Text style={{justifyContent:'center', color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                        Drinkaway
                    </Text>
                    <Image
                        source={shoppingcart}
                        style={[styles.icon, { tintColor: 'white', marginRight: 5 }]}
                        />
            </View>
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator = {false}>
                
                <View style = {{backgroundColor: 'white', margin: 10}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F7F9F9', padding: 5}}>
                    <Text style={{color: '#6F4E37', fontWeight: 'bold', fontSize: 20, margin: 5, alignItems: 'center'}}>Gần tôi</Text>
                    <View style={{alignItems: 'center', margin: 5}}> 
                        <Button
                            fontSize = "20"
                            color = "#6F4E37"
                            onPress={() => this.props.navigation.navigate('MoreList', {title: "GẦN TÔI"})}
                            title="Thêm >"
                        />
                    </View>
                    </View>
                    <View style={styles.flatlisthor}>
                    <FlatList
                        horizontal = {true}
                        showsHorizontalScrollIndicator={false}
                        data={nearby_coffee}
                        keyExtractor = {this._keyExtractor}
                        renderItem={({item}) => 
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Detail', {id: item.id})}>
                        <View style={{ flexDirection: 'row'}}>
                            <View style= {{flexDirection: 'column'}}>
                            <Image
                                source={coffee}
                                style={{height: 110, width: 180}}
                            />
                            <View style = {{flexDirection: 'row', marginTop: -30}}>
                                <Image
                                style = {{height: 30, width: 30, tintColor: starcolors[(Math.round(item.rank)-1).toString()] }}
                                source={star}
                                />
                                <Image
                                style = {{height: 30, width: 30, tintColor: starcolors[(Math.round(item.rank)-2).toString()]}}
                                source={star}
                                />
                                <Image
                                style = {{height: 30, width: 30, tintColor: starcolors[(Math.round(item.rank)-3).toString()]}}
                                source={star}
                                />
                                <Image
                                style = {{height: 30, width: 30, tintColor: starcolors[(Math.round(item.rank)-4).toString()]}}
                                source={star}
                                />
                                <Image
                                style = {{height: 30, width: 30, tintColor: starcolors[(Math.round(item.rank)-5).toString()]}}
                                source={star}
                                />
                            </View>
                            <View style = {{width: 180, flexDirection : 'column'}}>
                                <Text numberOfLines = {1} style={{color: '#ff8566', fontWeight: 'bold', fontSize: 23, height: 30}}>{item.title}</Text>
                                <View style = {{flexDirection: 'row', justifyContent: 'space-between', width: 180}}>
                                    <Text numberOfLines = {1} style={{height: 20, width: 120}}>{item.address}</Text>
                                    <Text numberOfLines = {1} style={{marginRight: 5}}>{item.rank+" km"}</Text>
                                </View>
                            </View>
                            </View>
                            <View style={{width: 20}}/>
                        </View>
                        </TouchableOpacity> 
                        }
                    />
                    </View>
                </View>
                <View style = {{flex:1, backgroundColor: 'white', marginTop: 5, margin: 10}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F7F9F9', padding: 5}}>
                    <Text style={{color: '#6F4E37', fontWeight: 'bold', fontSize: 20, margin: 5, alignItems: 'center'}}>Phổ biến</Text>
                    <View style={{alignItems: 'center', margin: 5}}> 
                        <Button
                            fontSize = "20"
                            color = "#6F4E37"
                            onPress={() => this.props.navigation.navigate('MoreList', {title: "PHỔ BIẾN"})}
                            title="Thêm >"
                        />
                    </View>
                    </View>
                    {/* <View style = {{height : 1, backgroundColor: '', marginTop: 5}}/> */}
                    <View style={styles.flatlistver}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={popular_coffee}
                        keyExtractor = {this._keyExtractor}
                        renderItem={({item}) => 
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Detail', {id: item.id})}>
                        <View style = {{flexDirection: 'column'}}>
                            <View style={{ flex:1, flexDirection: 'row',marginTop: 5, alignItems: 'center', width: dimension.width, backgroundColor: 'white'
                            , justifyContent: 'space-between', height: 90}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image
                                    style = {{height: 80, width: 80, marginLeft: 10, marginTop: 10}}
                                    source={coffee}
                                    />
                                    <View style = {{flexDirection: 'column', marginLeft: 15, width: 200}}>
                                        <Text numberOfLines={1} style={{color: '#ff8566', fontWeight: 'bold', fontSize: 20}}>{item.title}</Text>
                                        <Text numberOfLines={1} style={{fontSize: 15}}>{item.address}</Text>
                                        <Text numberOfLines={1} style={{fontSize: 15}}>{"Giá từ " + (item.minprice/1000).toFixed(3) + " - " + (item.maxprice/1000).toFixed(3)
                                            + " VND"}</Text>
                                        <View style={{width: 10, height: 10}}/>
                                    </View>
                                </View>
                                <Text style={{fontSize: 18, color: '#7CD175', fontWeight: 'bold', marginRight: 30}}>
                                {item.rank.toString() + "/5"}</Text>
                            </View>
                            <View style = {{height: 0.5, backgroundColor: 'gray', marginTop: 10}}/>
                        </View>
                        </TouchableOpacity>
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    flatlisthor: {
      height: 180,
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