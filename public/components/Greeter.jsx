var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {name: 'This is default name.', message: 'This is default message.'};
    },
    getInitialState: function() {
        return {name: this.props.name, message: this.props.message};
    },
    handleNewData: function(updates) {
        this.setState({name: updates.name, message: updates.message});
    },
    render: function() {
        var name = this.state.name;
        var messageProp = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={messageProp}/>
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
});

module.exports = Greeter;
