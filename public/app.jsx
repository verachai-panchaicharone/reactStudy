var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'd ja'
    };
  },
  render: function () {
    var asdf = this.props.name;
    var messageProp = this.props.message;

    return (
      <div>
        <h1>Hello {asdf}!</h1>
        <p>{messageProp + '!!'}</p>
      </div>
    );
  }
});

var firstName = "Sawasdee";
var messageProp = "Message Ja.";

ReactDOM.render(
  <Greeter name={firstName} message={messageProp} />,
  document.getElementById('app')
);
