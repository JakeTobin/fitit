var React = require('react');






module.exports = React.createClass({
    render: function() {
        return (
            <div id="about-view">
                <h1>Dash</h1>
                <button class="pure-button pure-button-primary">Start New Quote</button>
                <button class="pure-button">Open Existing Quote</button>
            </div>
        );
    }
});
