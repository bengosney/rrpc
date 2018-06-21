import { connect } from 'react-redux';
import { setLoggedOut } from '../actions';
import LogoutComponent from '../components/Logout'; 

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
	setLoggedOut: () => dispatch(setLoggedOut())
    };
};

const Logout = connect(mapStateToProps, mapDispatchToProps)(LogoutComponent);

export default Logout;
