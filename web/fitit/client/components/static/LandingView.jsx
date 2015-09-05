var React = require('react');

module.exports = React.createClass({

    handleSubmit: function() {
        if (this.props.quoteMenu) {

        } else {
            props.setState({quoteMenu: true});
            alert('Should have set true');

        }
    },

    render: function() {

        if (this.props.signedIn) {
            var signingButton = <div></div>
        } else {
            var signingButton = <button class="pure-button pure-button-primary"><a href={this.props.origin + '/request_token'}>Sign In</a></button>

        }



        return (
            <div id="about-view">
                <h1>Olstrad Quote Tools</h1>
                {signingButton}
                <form className="blabs-form pure-form" onSubmit={this.handleSubmit}>
                    <button type="submit" className="pure-button pure-button-primary">Menu</button>
                </form>
               </div>
        );
    }
});
