var React = require('react');
var Griddle = require('griddle-react');

var fakeData =  [
    {
        "id": 0,
        "name": "Mayer Leonard",
        "city": "Kapowsin",
        "state": "Hawaii",
        "country": "United Kingdom",
        "company": "Ovolo",
        "favoriteNumber": 7
    },
    {
        "id": 1,
        "name": "Something",
        "city": "Chicago",
        "state": "IL",
        "country": "USA",
        "company": "Boeing",
        "favoriteNumber": 7
    },
];


module.exports = React.createClass({
    render: function() {
        return (
            <div id="table-view">
                <h1>Grid</h1>
                <Griddle results={fakeData} tableClassName="table" showFilter={true}
                         resultsPerPage={5} enableInfiniteScroll={true} bodyHeight={400}
                         showSettings={true} columns={["name", "city", "state", "country", "company"]}/>
            </div>
        );
    }
});