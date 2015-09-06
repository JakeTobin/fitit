'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var HomeScene = require('../index.ios.js');

var {
    StyleSheet,
    NavigatorIOS,
    Component,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image
    } = React;

var Placehold = ["Testing","Testing More","Testing Most"]
var Index = 0

var TimeScene = React.createClass({
  render() {
      return (
          <View style={[styles.container, {backgroundColor: 'transparent'}]}>
              <Image source={require('../iOS/FiTit/assets/side_image.jpg')}
              style={styles.backgroundImage}>
              <Text style={{color:'gray',marginBottom:10}}
              >{Index+1}/{Placehold.length}</Text>
              <TextInput
                style={[styles.textBoxes]}
                placeholder="Exercise"
                textAlign='center'
                autoCorrect='false'
              />
              <TextInput
                style={[styles.textBoxes]}
                placeholder="Time"
                keyboardType='numeric'
                textAlign='center'
              />
              <Button style={styles.buttons} onPress={this.onNextPress}>
                  Next
              </Button>
              </Image>
          </View>
        );
      },
        onNextPress() {
            if (Index < Placehold.length-1) {
              Index += 1
              this.props.navigator.push({
                  component: TimeScene
                });
            }
            else {
              Index = 0;
              this.props.navigator.popToTop();
            }
          },
      });

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    textBoxes: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      alignSelf:'center',
      width: 200,
      marginBottom: 20
    },

    backgroundImage: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      resizeMode: Image.resizeMode.contain
    },
    buttons: {
      color: 'black',
      margin: 0,
      fontWeight: '100',
    },
});

module.exports = TimeScene, HomeScene;
