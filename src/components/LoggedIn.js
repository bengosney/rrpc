import React from 'react';

const LoggedIn = ({ loggedIn, children }) => {
    return loggedIn ? (<React.Fragment>{ children }</React.Fragment>) : null;
};

export default LoggedIn;
