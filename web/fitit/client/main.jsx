require('./assets/app.css');


var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes.jsx');
let injectTapEventPlugin = require("react-tap-event-plugin");
let mui = require('material-ui');
let RaisedButton = mui.RaisedButton;
let Dialog = mui.Dialog;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

injectTapEventPlugin();

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body);
});
