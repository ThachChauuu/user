import React, { Component } from 'react';
import search from '../images/search.png';
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

 export default class Home extends React.Component{

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
            <View style={{flex: 1}}>
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
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#3396FF', fontWeight: 'bold', fontSize: 20, margin: 5, alignItems: 'center'}}>Gần tôi</Text>
                <View style={{alignItems: 'center', margin: 5}}> 
                    <Button
                        fontSize = "20"
                        color = "#3396FF"
                        //onPress={this._onPressButton}
                        title="Thêm >"
                    />
                </View>
                </View>
                <View style={styles.flatlisthor}>
                <FlatList
                    horizontal = "true"
                    data={[
                    {title: 'Coffee 1', address: '34 Nghĩa Hòa', star1: '#FFE033', star2: '#FFE033', star3: '#FFE033', star4: '#BDBBAB', star5: '#BDBBAB'},
                    {title: 'Coffee 2', address: '34 Nghĩa Hòa', star1: '#FFE033', star2: '#FFE033', star3: '#FFE033', star4: '#BDBBAB', star5: '#BDBBAB'},
                    {title: 'Coffee 3', address: '34 Nghĩa Hòa', star1: '#FFE033', star2: '#FFE033', star3: '#FFE033', star4: '#BDBBAB', star5: '#BDBBAB'},
                    {title: 'Coffee 4', address: '34 Nghĩa Hòa', star1: '#FFE033', star2: '#FFE033', star3: '#FFE033', star4: '#BDBBAB', star5: '#BDBBAB'},
                    ]}
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
                            style = {{height: 30, width: 30, tintColor: item.star1}}
                            source={star}
                            />
                            <Image
                            style = {{height: 30, width: 30, tintColor: item.star2}}
                            source={star}
                            />
                            <Image
                            style = {{height: 30, width: 30, tintColor: item.star3}}
                            source={star}
                            />
                            <Image
                            style = {{height: 30, width: 30, tintColor: item.star4}}
                            source={star}
                            />
                            <Image
                            style = {{height: 30, width: 30, tintColor: item.star5}}
                            source={star}
                            />
                        </View>
                        <Text style={{color: '#ff8566', fontWeight: 'bold', fontSize: 25, height: 30, width: 170}}>{item.title}</Text>
                        <Text style={{height: 20, width: 170}}>{item.address}</Text>
                        
                        </View>
                        <View style={{width: 20}}/>
                    </View>
                    </TouchableOpacity>
                    }
                />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#3396FF', fontWeight: 'bold', fontSize: 20, margin: 5, alignItems: 'center'}}>Phổ biến</Text>
                <View style={{alignItems: 'center', margin: 5}}> 
                    <Button
                        fontSize = "20"
                        color = "#3396FF"
                        //onPress={this._onPressButton}
                        title="Thêm >"
                    />
                </View>
                </View>
                <View style={styles.flatlistver}>
                <FlatList
                justifyContent = "space-between"
                    numColumns = {2}
                    data={[
                    {title: 'Coffee 1', address: '34 Nghĩa Hòa', star1: '#FFE033', star2: '#FFE033', star3: '#FFE033', star4: '#BDBBAB', star5: '#BDBBAB'},
                    {title: 'Coffee 2', address: '34 Nghĩa Hòa', star1: '#FFE033', star2: '#FFE033', star3: '#FFE033', star4: '#BDBBAB', star5: '#BDBBAB'},
                    {title: 'Coffee 3', address: '34 Nghĩa Hòa', star1: '#FFE033', star2: '#FFE033', star3: '#FFE033', star4: '#BDBBAB', star5: '#BDBBAB'},
                    {title: 'Coffee 4', address: '34 Nghĩa Hòa', star1: '#FFE033', star2: '#FFE033', star3: '#FFE033', star4: '#BDBBAB', star5: '#BDBBAB'},
                    ]}
                    renderItem={({item}) => 
                    <View style={{ flexDirection: 'row'}}>
                        <View style= {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={coffee}
                            style={{height: 150, width: 170}}
                        />
                        <Text style={{color: '#ff8566', fontWeight: 'bold', fontSize: 20, height: 30}}>{item.title}</Text>
                        <Text style={{height: 20}}>{item.address}</Text>
                        <View style = {{flexDirection: 'row'}}>
                            <Image
                            style = {{height: 30, width: 30, tintColor: item.star1}}
                            source={star}
                            />
                            <Image
                            style = {{height: 30, width: 30, tintColor: item.star2}}
                            source={star}
                            />
                            <Image
                            style = {{height: 30, width: 30, tintColor: item.star3}}
                            source={star}
                            />
                            <Image
                            style = {{height: 30, width: 30, tintColor: item.star4}}
                            source={star}
                            />
                            <Image
                            style = {{height: 30, width: 30, tintColor: item.star5}}
                            source={star}
                            />
                        </View>
                        <View style={{width: 170, height: 15}}/>
                        </View>
                        <View style={{width: 20}}/>
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