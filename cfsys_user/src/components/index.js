
import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import Main from './main/main';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class AppUser extends Component{
    render(){
        return(
            <Main/>
        );
    }
}
