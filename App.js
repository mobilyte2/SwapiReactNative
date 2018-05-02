import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Home from "./src/components/Home/Home"
import List from "./src/components/List/List"


export default class App extends React.Component {
  constructor() {
    super();
    this.state = { swapi: ["test"], route: 'home' }

    this.changeRoute = this.changeRoute.bind(this)
    this.route = this.route.bind(this);
  }
  componentDidMount() {
    axios.get("https://swapi.co/api").then(({ data }) => this.setState({ swapi: data })).catch(err => console.warn("DidErr: ", err))
  }
  changeRoute(route) {
    this.setState({ route })
  }
  route() {
    switch (this.state.route) {
      case "home":
        return <Home />
        break;
      case "people":
        return <List category={"people"} />
        break;
      case "starships":
        return <List category={"starships"} />
        break;
      default:
        return <Home />
        break;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TouchableHighlight onPress={() => this.changeRoute("people")}><Text>People</Text></TouchableHighlight>
        <TouchableHighlight onPress={() => this.changeRoute("starships")}><Text>Starships</Text></TouchableHighlight>
        {this.route()}
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
