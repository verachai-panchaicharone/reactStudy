var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter')


var firstName = "Jen";
var messageProp = "Message Ja.";

ReactDOM.render(
    <Greeter name={firstName} message={messageProp} />,
    document.getElementById('app')
  );
