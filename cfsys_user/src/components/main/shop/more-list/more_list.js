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
  

 export default class MoreList extends React.Component{

    _keyExtractor = (item, index) => item.id;
    
    //title = "GẦN TÔI"
    
    render(){
        return(
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
                        {this.props.title}
                    </Text>
                    <View
                        style={{marginRight: 5, width: 35}}
                        />
                </View>

                {/* List coffee */}
                <View>
                <FlatList
                    data={[
                        {id:1, title: 'Coffee 1', address: '34 Nghĩa Hòa',rank:5},
                        {id:2, title: 'Coffee 2', address: '34 Nghĩa Hòa',rank:4},
                        {id:3, title: 'Coffee 3', address: '34 Nghĩa Hòa',rank:3},
                        {id:4, title: 'Coffee 4', address: '34 Nghĩa Hòa',rank:2},
                        {id:5, title: 'Coffee 5', address: '34 Nghĩa Hòa',rank:1},
                    ]}
                    keyExtractor = {this._keyExtractor}
                    renderItem={({item}) => 

                    <View style={{ flex:1, flexDirection: 'row', padding: 10, alignItems: 'center'}}>
                        <Image
                        style = {{height: 130, width: 130, marginLeft: 10}}
                        source={coffee}
                        />
                        <View style = {{flexDirection: 'column', marginLeft: 15}}>
                            <Text style={{color: '#ff8566', fontWeight: 'bold', fontSize: 25}}>{item.title}</Text>
                            <Text style={{fontSize: 15}}>{item.address}</Text>
                            <View style={{width: 10, height: 10}}/>
                            <View style = {{flexDirection: 'row'}}>
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
                        </View>
                    </View>
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