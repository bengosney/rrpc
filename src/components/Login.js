import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

import { doLogin, isLoggedIn } from '../db';

import LoggedIn from '../containers/LoggedIn';
import LoggedOut from '../containers/LoggedOut';

class Login extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    username: '',
	    password: '',
	    loading: true
	};

	this.checkLoggedIn();
    }

    checkLoggedIn() {
	isLoggedIn().then((r) => {	    
	    this.setState({
		loading: false
	    });

	    const loggedIn = r.userCtx.name !== null;

	    this.props.setLoggedIn(loggedIn);

	    if (loggedIn) {
		setTimeout(() => this.checkLoggedIn(), 60000);
	    }
	});
    }

    handleChange(value, event) {
	const state = {};

	state[value] = event.target.value;
	this.setState(state);
    }

    handleSubmit(event) {
	event.preventDefault();
	
	const { username, password } = this.state;
	doLogin(username, password).then(() => this.checkLoggedIn());
    }
    
    render() {
	if (this.state.loading) {
	    return (<div>Loading</div>);
	} else {
	    return (
		<React.Fragment>
		  <LoggedIn>{ this.props.children }</LoggedIn>
		  <LoggedOut>
		    <Form onSubmit={ (e) => this.handleSubmit(e) }>
		      <Form.Input label='Username' type='string' onChange={ (e) => this.handleChange('username', e) } />
		      <Form.Input label='Password' type='password' onChange={ (e) => this.handleChange('password', e) } />
			<Button type='submit' disabled={ this.state.username == '' || this.state.password == '' }>Login</Button>
		    </Form>
		  </LoggedOut>
		</React.Fragment>
	    );
	}
    }
};

export default Login;
