/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


var FiTit = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to FITit!
        </Text>
        <Text style={styles.instructions}>
          Choose your workout type:
        </Text>
          <Button style={{color: 'blue'}} onPress={this._handlePress}>
              Press Me!
          </Button>
      </View>
    );
  },
    _handlePress(event) {
        console.log('Pressed!');
    }
});



var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FiTit', () => FiTit);
