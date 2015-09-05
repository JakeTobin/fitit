var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  handleSignOutLink: function() {
    sessionStorage.setItem('jwt','');
    location = '/';
  },
  render: function() {

      //signed in menu option
    if (this.props.signedIn) {
      var signingLink = <li><span onClick={this.handleSignOutLink}>Sign Out</span></li>;
    } else {
      //var signingLink = <li><a href={this.props.origin + '/request_token'}>Sign In</a></li>;
        var signingLink = <li></li>
    }

      //quote menu only when quote is true
    if (this.props.quoteMenu) {
        var quoteLinks = <li>something true</li>;

    } else {
        var quoteLinks = <li>something false</li>;
    }

      //static pages loaded after login
    if (this.props.signedIn) {
        //var dashlink = <li><Link to="dashboard">Dashboard</Link></li>;
        //var blabslink = <li><Link to="blabs">API Test</Link></li>;
        //var aboutlink = <li><Link to="about">Components</Link></li>;
        //var tablelink = <li><Link to="table">Component Details</Link></li>;
        //var selectlink = <li><Link to="select">Customer Info</Link></li>;
    } else {
        //var dashlink = <li></li>;
        //var blabslink = <li></li>;
        //var aboutlink = <li></li>;
        //var tablelink = <li></li>;
        //var selectlink = <li></li>;
    }



    return (
      <div id="menu">
        <span id="menu-link" onClick={this.props.sendMenuClick}><span></span></span>
          <AppBar
            title="FiTit"
            iconClassNameRight="muidocs-icon-navigation-expand-more" />



      </div>
    );
  }
});
