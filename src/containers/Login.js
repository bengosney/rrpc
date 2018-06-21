import { connect } from 'react-redux';
import { setLoggedIn } from '../actions';
import LoginComponent from '../components/Login'; 

const mapStateToProps = state => {
    return {
	isLoggedIn: state.loggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
	setLoggedIn: loggedIn => dispatch(setLoggedIn(loggedIn))
    };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default Login;
