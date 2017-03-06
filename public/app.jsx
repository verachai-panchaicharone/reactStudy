var GreeterMessage = React.createClass({
    render: function() {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}
                    !!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }

        if (message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }

        this.props.onNewData(updates);
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name" placeholder="Enter name"/>
                </div>
                <div>
                    <textarea ref="message" placeholder="Enter message"/>
                </div>
                <button>Submit</button>
            </form>
        );
    }
});

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

var firstName = "Sawasdee";
var messageProp = "Message Ja.";

ReactDOM.render(
    <Greeter name={firstName} message={messageProp}/>, document.getElementById('app'));
