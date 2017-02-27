var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'd ja'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name
    };
  },
  onButtonClick: function(event) {
    event.preventDefault(); // prevent page refresh

    var nameRef = this.refs.zxcv;
    var name = nameRef.value;
    nameRef.value = '';
    var newNameValue = this.props.name;

    if (typeof name === 'string' && name.length > 0) {
      newNameValue = name;
    }

    // To update the state of [name] and render dom again (only a part that dependency).
    this.setState({
      name: newNameValue
    });
  },
  render: function () {
    var name = this.state.name;
    var messageProp = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{messageProp + '!!'}</p>

      <form onSubmit={this.onButtonClick}>
        <input type="text" ref="zxcv" />
        <button>Set Name</button>
      </form>

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
