import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator,
} from "react-navigation-stack";
import SearchScreen from './screens/SearchScreen'


const SearchNavigator = createStackNavigator({
  searchScreen : SearchScreen
},
    )
export default class App extends React.Component {
  render() {
    return (
      <SearchNavigator />
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
