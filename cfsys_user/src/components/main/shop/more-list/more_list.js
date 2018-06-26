import React, { Component } from 'react';
import back from '../images/back.png';
import shoppingcart from '../images/shopping.png';
import coffee from '../images/coffee.jpg';
import star from '../images/star.png';
import home from '../images/home.png';
import Detail from '../detail/detail';
import { Alert, View, Text, ScrollView, StyleSheet, Button, Image, FlatList, TouchableHighlight, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { StackNavigator} from 'react-navigation';
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
  //const coffee_list = []

 export default class MoreList extends React.Component{

    _keyExtractor = (item, index) => index.toString();
    
    //title = "GẦN TÔI"
    
    render(){
        const { navigation } = this.props;
        const title = navigation.getParam('title', 'FAIL');
        if(title == 'GẦN TÔI')
        {
            coffee_list = nearby_coffee
        }
        else{
            coffee_list = popular_coffee
        }
        return(
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
                        {title}
                    </Text>
                    <View
                        style={{marginRight: 5, width: 35}}
                        />
                </View>

                {/* List coffee */}
                <View style = {{backgroundColor: 'white'}}>
                <FlatList
                        showsVerticalScrollIndicator={false}
                        data={coffee_list}
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