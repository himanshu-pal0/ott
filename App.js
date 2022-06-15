import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation } from './src/routing/navigation';


export default class App extends Component {
  render() {
    return <NavigationContainer>
        <AuthNavigation/>
      </NavigationContainer>
    
  }
}