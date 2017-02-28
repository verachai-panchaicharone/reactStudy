var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var message = this.props.message;
      return (
          <div>
            <h1>Hello {name} !!</h1>
            <p>{message}</p>
          </div>
      );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var name = this.refs.zxcv.value;
        if(name.length > 0) {
          this.refs.zxcv.value = '';
          this.props.onNewName(name);
        }
    },
    render: function() {
      return (
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="zxcv" />
          <button>Set Name</button>
        </form>
      );
    }
});

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
  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  render: function () {
    var name = this.state.name;
    var messageProp = this.props.message;

    return (
      <div>

        <GreeterMessage name={name} message={messageProp} />
        <GreeterForm onNewName={this.handleNewName} />

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
