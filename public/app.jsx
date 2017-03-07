var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter')


var firstName = "Sawasdee";
var messageProp = "Message Ja.";

ReactDOM.render(
    <Greeter name={firstName} message={messageProp} />, 
    document.getElementById('app')
  );
