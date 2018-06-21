import { connect } from 'react-redux';
import LoggedOutComponent from '../components/LoggedOut'; 

const mapStateToProps = state => {
    return {
	loggedIn: state.loggedIn
    };
};

const LoggedOut = connect(mapStateToProps, {})(LoggedOutComponent);

export default LoggedOut;
