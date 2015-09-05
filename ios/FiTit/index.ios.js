'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var RepScene = require('./rep/rep.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} = React;


var ForNextScene = React.createClass({
    render() {
        return (
            <View style={[styles.navBarContainer, {backgroundColor: '#FFF1E8'}]}>
                <Text>You came here from the "Next" button!</Text>
            </View>
        );
    }
});


var ForLoadScene = React.createClass({
  render() {
    return (
      <View style={[styles.scene, {backgroundColor: '#ECF6E8'}]}>
        <Text>WELCOME TO THE LOAD PAGE!</Text>
      </View>
    );
  }
});


var HomeScene = React.createClass({

  render() {
    return (

      <View style={styles.container}>

        <Text style={styles.welcome}>
          Welcome to FITit!
        </Text>
        <Text style={styles.instructions}>
          Choose your workout type:
        </Text>

        <Button style={styles.buttons} onPress={this.onLoadPress}>
            Load Workout
        </Button>
        <Button style={styles.buttons} onPress={this.onRepPress}>
            Rep Workout
        </Button>
        <Button style={styles.buttons} onPress={this._handleTimedPress}>
            Timed Workout
        </Button>

      </View>
      );
    },

    onLoadPress() {
      this.props.navigator.push({
        title: 'LOAD SCENE',
        component: ForLoadScene
      });
    },
    onRepPress() {
        this.props.navigator.push({
            title: 'Reps',
            component: RepScene
        });
    }

         /*
          <View style={[styles.scene, {backgroundColor: '#DAF6FF'}]}>
              <TouchableHighlight onPress={this.onPress}>
                  <Text>Welcome to the NavigatorIOS Demo. Press here!</Text>
              </TouchableHighlight>
          </View>
          */
});

var Navigator = React.createClass({
    onRightButtonPress: function() {
        this.refs.nav.push({
            title: 'From Next',
            component: ForNextScene
        })
    },

    render () {
        return (
            <NavigatorIOS ref="nav" style={styles.navBarContainer} initialRoute={{
                component: HomeScene,
                title: '',
                rightButtonTitle: 'Next',
                onRightButtonPress: this.onRightButtonPress
            }} />
        )
    }
});



var styles = StyleSheet.create({

  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1
    },

    navBarContainer: {
      flex: 1,
    },

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
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

/*
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
*/

AppRegistry.registerComponent('FiTit', () => Navigator);
