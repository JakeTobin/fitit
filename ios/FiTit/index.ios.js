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

        <Button style={styles.buttons} onPress={this._handleLoadPress}>
            Load Workout
        </Button>
        <Button style={styles.buttons} onPress={this._handleRepPress}>
            Rep Workout
        </Button>
        <Button style={styles.buttons} onPress={this._handleTimedPress}>
            Timed Workout
        </Button>

      </View>
    );
  },

    // Button Handling Functions
    // TODO send to appropriate view controller
    _handleLoadPress(event) {
        console.log('Load Pressed!');
    },
    _handleRepPress(event) {
        console.log('Rep Pressed!');
    },
    _handleTimedPress(event) {
        console.log('Timed Pressed!');
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
    marginBottom: 30,
  },
  buttons: {
    color: 'black',
    marginBottom: 10,
  },
});

AppRegistry.registerComponent('FiTit', () => FiTit);
