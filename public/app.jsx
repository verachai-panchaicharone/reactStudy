var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'd ja'
    };
  },
  onButtonClick: function(event) {
    event.preventDefault(); // prevent page refresh

    var name = this.refs.zxcv.value;
    alert(name);
  },
  render: function () {
    var name = this.props.name;
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
