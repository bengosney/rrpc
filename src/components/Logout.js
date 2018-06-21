import React from 'react';
import { Button } from 'semantic-ui-react';

import { doLogout } from '../db';

import LoggedIn from '../containers/LoggedIn';

const Logout = ({ setLoggedOut }) => {
    return (
	<LoggedIn>
	  <Button onClick={ () => { doLogout().then(() => setLoggedOut()); }}>Logout</Button>
	</LoggedIn>
    );  
};

export default Logout;
