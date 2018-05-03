import React from 'react';
import { Text, TouchableHighlight, View } from "react-native";
import axios from "axios";

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = { categories: {} }
    }
    componentDidMount() {
        console.warn(this.props)
        axios.get("https://swapi.co/api").then(({ data }) => {
            this.setState({ categories: data })
        }).catch(err => console.warn("DidErr: ", err))
    }
    render() {
        let categories = [];
        for (let key in this.state.categories) {
            categories.push(key)
        }
        return (<View><Text>Home</Text>{typeof this.state.categories.people === "string" ? categories.map((val, index) => <TouchableHighlight key={index} onPress={ () => this.props.navigation.navigate('List', {category:{val}})}><Text>{val}</Text></TouchableHighlight>) : <Text>{"Loading . . ."}</Text>}</View>)
    }
}