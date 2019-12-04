import React, { Component } from 'react'
import {  AppRegistry, StyleSheet, Text, View } from 'react-native'

export default class Component1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'PHOTO GOES HERE',
      showName: true,
      message: this.props.message
    }
  }

  static defaultProps = {
    message: 'I am Component 1'
  }

  render() {

    let name = this.state.showName ? this.state.name : 'No name'

    return (
      <View style={styles.container}>
        <Text>{this.state.message}</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FE6D71',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

AppRegistry.registerComponent('Component1', () => Component1);
