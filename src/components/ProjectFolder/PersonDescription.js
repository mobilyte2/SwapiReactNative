import React from 'react';
import { Text, View } from "react-native";
import axios from "axios";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { descriptionData: this.props.navigation.state.params.descData }
    }
   
    render() {
        console.log("hieghtttttt",this.state.descriptionData)
        return(
            <View style={{flex: 1,alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>{this.state.descriptionData.height}</Text>
            
            </View>
        )
    }
}