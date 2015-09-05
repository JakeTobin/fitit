'use strict';

var React = require('react-native');

var {
    StyleSheet,
    NavigatorIOS,
    Component,
    Text,
    View,
    TouchableHighlight
    } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

var TimeScene = React.createClass({
    render() {
        return (

            <View style={[styles.scene, {backgroundColor: '#ECF6E8'}]}>
                <Text>WELCOME TO THE Time PAGE!</Text>
            </View>
        );
    }
});



module.exports = TimeScene;
