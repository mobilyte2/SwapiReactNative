import React from 'react';
import axios from 'axios';
import { StyleSheet, View, ListView, Text, TouchableHighlight } from 'react-native'

export default class List extends React.Component {
    constructor() {
        super();
        this.state = { list: [] };
    }
    componentDidMount() {
        axios.get(`https://swapi.co/api/${this.props.category}`).then(({ data }) => this.setState({ list: data.results })).catch(err => console.warn("DidErr: ", err))
    }
    render() {
        let list = this.state.list.length > 0 ? this.state.list.map((val, index) => {
            return <Text key={index}>{val.name}</Text>
        }) : <Text>"Loading . . ."</Text>
        return <View>{list}</View>
    }
}