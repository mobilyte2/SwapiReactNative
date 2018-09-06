import React from 'react';
import { Text, TouchableHighlight, View, FlatList } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { categories: [], visible: false }
    }
    componentDidMount() {
        console.warn(this.props)
        this.setState({visible:true})
        fetch('https://swapi.co/api/films', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            return response.json()
        })
        .then(responseText => {
            this.setState({visible:false,categories: responseText.results})
        }).catch(err => console.warn("DidErr: ", err))
    }
    renderListData(data){
        return(
            <TouchableHighlight onPress={() => this.props.navigation.navigate('List', {data: data.item})}>
                <Text style={{fontSize: 16,fontWeight: "300", padding: 10, color: 'yellow'}}>{data.item.title}</Text>
            </TouchableHighlight>
        )
    }
    render() {
        return(
            <View style={{flex: 1,alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}><Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}> MOVIES </Text>
                <Spinner visible={this.state.visible} />
                <FlatList
                    data={this.state.categories}
                    renderItem={(data) => this.renderListData(data)}
                />
            </View>
        )
    }
}