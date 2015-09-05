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

var RepScene = React.createClass({
    render() {
        return (

            <View style={[styles.scene, {backgroundColor: '#ECF6E8'}]}>
                <Text>WELCOME TO THE Rep PAGE!</Text>
            </View>
        );
    }
});



module.exports = RepScene;