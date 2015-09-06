'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var RepScene = require('./rep/rep.js');
var TimeScene = require('./time/time.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  Image
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



var HomeScene = React.createClass({

  render() {
    return (
      <View style={[styles.container]}>
      <Image source={require('./iOS/FiTit/assets/home_image.jpg')}
        style={styles.backgroundImage}>
        <Text style={styles.welcome}>
          Welcome to
          <Text style={{fontWeight:'bold',color:'orange'}}> FIT</Text>
          it!
        </Text>
        <Text style={styles.instructions}>
          Time to get moving, pick a plan:
        </Text>

        <Button style={styles.buttons} onPress={this.onLoadPress}>
            Load Plan
        </Button>
        <Button style={styles.buttons} onPress={this.onRepPress}>
            Rep Based
        </Button>
        <Button style={styles.buttons} onPress={this.onTimePress}>
            Time Based
        </Button>
      </Image>
      </View>
      );
    },

    // TODO: Read JSON and route to Rep or Time
    onLoadPress() {
        this.props.navigator.push({
        component: RepScene
      });
    },
    onRepPress() {
        this.props.navigator.push({
            component: RepScene
        });
    },
    onTimePress() {
        this.props.navigator.push({
            component: TimeScene
        });
    }

});

var Navigator = React.createClass({
    onRightButtonPress: function() {
        this.refs.nav.push({
            title: 'From Next',
            component: ForNextScene
        })
    },

    _handleBackButtonPress: function() {
        this.props.navigator.pop();
    },

    render () {
        return (
            <NavigatorIOS
            style={styles.navBarContainer}
                initialRoute={{
                component: HomeScene,
                /*
                onRightButtonPress: this.onRightButtonPress
                */
            }}
            //navigationBarHidden: 'true',
            //shadowHidden: 'true',
            //barTintColor: 'white'
            />
        )
    }
});



var styles = StyleSheet.create({

  scene: {
    flex: 1
    },

    navBarContainer: {
      flex: 1,
      color: 'transparent'
    },

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent'
    },

    welcome: {
      fontSize: 25,
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

    backgroundImage: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      resizeMode: Image.resizeMode.contain
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
