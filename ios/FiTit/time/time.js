'use strict';

var React = require('react-native');
var Button = require('react-native-button');

var {
    StyleSheet,
    NavigatorIOS,
    Component,
    Text,
    View,
    TextInput,
    TouchableHighlight
    } = React;

var TimeScene = React.createClass({
  render() {
      return (
          <View style={[styles.container, {backgroundColor: '#ECF6E8'}]}>
              <Text style={{marginBottom:20}}>Squats</Text>
              <TextInput
                style={[styles.textBoxes]}
                value="Previous Time"
                editable='false'
                textAlign='center'
                /*
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}*/
              />
              <TextInput
                style={[styles.textBoxes]}
                placeholder="Current Time"
                keyboardType='numeric'
                textAlign='center'
                /*
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}*/
              />
              <Button style={styles.buttons} onPress={this.onStartPress}>
                  Start
              </Button>
              <Button style={styles.buttons} onPress={this.onClearPress}>
                  Clear
              </Button>
              <Button style={styles.buttons} onPress={this.onDonePress}>
                  Done
              </Button>
          </View>
      );
  }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 75,
        alignItems: 'center'
    },

    textBoxes: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      alignSelf:'center',
      width: 200,
      marginBottom: 20
    }
});

module.exports = TimeScene;
