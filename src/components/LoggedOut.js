import React from 'react';

const LoggedOut = ({ loggedIn, children }) => {
    return !loggedIn ? (<React.Fragment>{ children }</React.Fragment>) : null;
};

export default LoggedOut;
