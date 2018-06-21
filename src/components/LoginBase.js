import React from 'react';

import { remoteSync } from '../db';

let needsSetting = true;

const LoginBase = ({ token = {}, setLoginToken, children }) => {
    if (needsSetting) {
	const googleId = "110082308328486173971";
	remoteSync(googleId);
	setLoginToken({'googleId': googleId});
	needsSetting = false;
    }
    
    return (
	<div>{ children }</div>
    );  
};

export default LoginBase;
