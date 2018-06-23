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
  

 export default class Home extends React.Component{

    _keyExtractor = (item, index) => item.id;
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
            <ScrollView style={{flex: 1}}>
                {/* toolbar */}
                <View style={{ flexDirection: 'row', backgroundColor: '#3396FF', height: 58, alignContent: 'center', alignItems: 'center', 
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
                <View style = {{backgroundColor: 'white', margin: 10}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F7F9F9', padding: 5}}>
                    <Text style={{color: '#3396FF', fontWeight: 'bold', fontSize: 20, margin: 5, alignItems: 'center'}}>Gần tôi</Text>
                    <View style={{alignItems: 'center', margin: 5}}> 
                        <Button
                            fontSize = "20"
                            color = "#3396FF"
                            onPress={() => this.props.navigation.navigate('MoreList', {title: "GẦN TÔI"})}
                            title="Thêm >"
                        />
                    </View>
                    </View>
                    <View style={styles.flatlisthor}>
                    <FlatList
                        horizontal = {true}
                        showsHorizontalScrollIndicator={false}
                        data={[
                        {id:1, title: 'Coffee 1', address: '34 Nghĩa Hòa',rank:5},
                        {id:2, title: 'Coffee 2', address: '34 Nghĩa Hòa',rank:4.4},
                        {id:3, title: 'Coffee 3', address: '34 Nghĩa Hòa',rank:3.4},
                        {id:4, title: 'Coffee 4', address: '34 Nghĩa Hòa',rank:2.7},
                        ]}
                        keyExtractor = {this._keyExtractor}
                        renderItem={({item}) => 
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Detail')}>
                        <View style={{ flexDirection: 'row'}}>
                            <View style= {{flexDirection: 'column'}}>
                            <Image
                                source={coffee}
                                style={{height: 130, width: 200}}
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
                            <View style = {{flexDirection : 'row', alignItems: 'center', width: 200, justifyContent: 'space-between'}}>
                                <View style = {{flexDirection : 'column'}}>
                                    <Text style={{color: '#ff8566', fontWeight: 'bold', fontSize: 25, height: 30}}>{item.title}</Text>
                                    <Text style={{height: 20}}>{item.address}</Text>
                                </View>
                                    <Text style={{fontSize: 15, marginRight: 5}}>{item.rank+" km"}</Text>
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
                    <Text style={{color: '#3396FF', fontWeight: 'bold', fontSize: 20, margin: 5, alignItems: 'center'}}>Phổ biến</Text>
                    <View style={{alignItems: 'center', margin: 5}}> 
                        <Button
                            fontSize = "20"
                            color = "#3396FF"
                            onPress={() => this.props.navigation.navigate('MoreList', {title: "PHỔ BIẾN"})}
                            title="Thêm >"
                        />
                    </View>
                    </View>
                    {/* <View style = {{height : 1, backgroundColor: '', marginTop: 5}}/> */}
                    <View style={styles.flatlistver}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={[
                            {id:1, title: 'Coffee 1', address: '34 Nghĩa Hòa',rank:5, minprice: 10000, maxprice: 50000},
                            {id:2, title: 'Coffee 2', address: '34 Nghĩa Hòa',rank:4, minprice: 10000, maxprice: 50000},
                            {id:3, title: 'Coffee 3', address: '34 Nghĩa Hòa',rank:3, minprice: 10000, maxprice: 50000},
                            {id:4, title: 'Coffee 4', address: '34 Nghĩa Hòa',rank:2, minprice: 10000, maxprice: 50000},
                        ]}
                        keyExtractor = {this._keyExtractor}
                        renderItem={({item}) => 
                        <View style = {{flexDirection: 'column'}}>
                            <View style={{ flex:1, flexDirection: 'row',marginTop: 5, alignItems: 'center', width: dimension.width, backgroundColor: 'white'}}>
                                <Image
                                style = {{height: 70, width: 70, marginLeft: 10, marginTop: 10}}
                                source={coffee}
                                />
                                <View style = {{flexDirection: 'column', marginLeft: 15}}>
                                    <Text style={{color: '#ff8566', fontWeight: 'bold', fontSize: 25}}>{item.title}</Text>
                                    <Text style={{fontSize: 15}}>{item.address}</Text>
                                    <Text style={{fontSize: 15}}>{"Giá từ " + (item.minprice/1000).toFixed(3) + " - " + (item.maxprice/1000).toFixed(3)
                                        + " VND"}</Text>
                                    <View style={{width: 10, height: 10}}/>
                                </View>
                            </View>
                            <View style = {{height: 0.2, backgroundColor: 'gray', marginTop: 10}}/>
                        </View>
                        }
                    />
                    </View>
                </View>
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