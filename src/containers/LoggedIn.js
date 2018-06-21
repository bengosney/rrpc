import { connect } from 'react-redux';
import LoggedInComponent from '../components/LoggedIn'; 

const mapStateToProps = state => {
    return {
	loggedIn: state.loggedIn
    };
};

const LoggedIn = connect(mapStateToProps, {})(LoggedInComponent);

export default LoggedIn;
