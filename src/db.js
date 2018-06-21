import PouchDB from 'pouchdb';
import authentication from 'pouchdb-authentication';

PouchDB.plugin(authentication);

const dbName = 'todolist';
const db = new PouchDB(dbName);
const remoteDB = new PouchDB(`http://localhost:5984/${dbName}`, {skip_setup: true});
//const remoteDB = new PouchDB(`https://5ffc14bd-2800-4061-b412-6570bed43870-bluemix.cloudant.com/${dbName}`);

let syncHandle = null;

export const remoteSync = () => {
    console.debug('Starting sync');
    
    if (syncHandle !== null) {
	return false;
    }
    
    syncHandle = db.sync(remoteDB, {
	live: true,
	retry: true
    }).on('change', function (change) {
	console.log('change');
    }).on('paused', function (info) {
	console.log('paused');
    }).on('active', function (info) {
	console.log('active');
    }).on('error', function (err) {
	console.log('totally unhandled error (shouldn\'t happen)');
    });

    return true;
};

export const stopSync = () => {
    console.debug('Stopping sync');
    if (syncHandle === null) {
	return false;
    }

    syncHandle.cancel();
    syncHandle = null;

    return true;
};

export const doLogin = (username, password) => {
    console.debug("Logging in");
    return remoteDB.logIn(username, password).then(() => remoteSync());
};

export const doLogout = () => {
    console.debug("Logging out");
    return remoteDB.logOut().then(() => stopSync());
};

export const isLoggedIn = () => {
    return remoteDB.getSession();
};

export default db;
