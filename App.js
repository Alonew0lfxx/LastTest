/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, StyleSheet, View,Button} from 'react-native';

export default class App extends Component {

  state = {
    myText: 0.32,
  }

  fuckThis = () => {
    this.setState({
      myText: this.state.myText *2,
    });
  }

  decreaseThis = () => {
    this.setState({
      myText: this.state.myText /2,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bruhMoment}> {this.state.myText} </Text>
        <Button 
        title='Increase' 
        onPress={this.fuckThis} />

        <View style={{margin:10}}>
           <Button 
        title='decrease'
        onPress={this.decreaseThis} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#584',
        alignItems: 'center',
        justifyContent: 'center',
    },

    bruhMoment: {
        fontSize: 50,
        color: '#FFFFFF',
    },
});
