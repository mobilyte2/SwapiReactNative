import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import axios from 'axios';

export default class Vehicles extends React.Component{
    constructor(){
        super();
        this.state = { list: [], previousList: '', nextList: ''}
    }
    render(){
        return <View></View>
    }
}