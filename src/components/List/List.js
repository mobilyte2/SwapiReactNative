import React from 'react';
import axios from 'axios';
import { StyleSheet, View, ListView, Text, TouchableHighlight } from 'react-native'

export default class List extends React.Component {
    constructor() {
        super();
        this.state = { list: [], nextUrl: '', previousUrl: '' };
    }
    componentDidMount() {
        if(!this.props.category){
         axios.get(`https://swapi.co/api/${this.props.category}`).then(({ data }) =>  this.setState({ list: data.results })).catch(err => console.warn("DidErr: ", err))   
        } else {
        axios.get(`https://swapi.co/api/${this.props.category}`).then(({ data }) =>  this.setState({ list: data.results })).catch(err => console.warn("DidErr: ", err))}
    }
    render() {
        let list = [];
        if(typeof this.state.list === "object"){
            console.warn(this.state.list)
            for(let key in this.state.list){
                list.push(<TouchableHighlight><Text>{key}</Text></TouchableHighlight>)
            }
        }
        else{
        let list = this.state.list.length > 0 ? this.state.list.map((val, index) => {
            return <Text key={index}>{val.name}</Text>
        }) : <Text>"Loading . . ."</Text>
        }
        return <View><Text>List</Text>{list}</View>
    }
}