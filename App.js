import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import TabNav from "./src/components/TabNav/TabNav"
import Home from "./src/components/Home/Home"
import List from "./src/components/List/List"


import { TabNavigator } from 'react-navigation';


export default TabNavigator({
  Home: { screen: () => <Home prop={"This is a test prop"} /> },
  List: { screen: () => <List category=" "/>},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
