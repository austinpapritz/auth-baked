import { checkAuth, logout } from '../fetch-utils.js';

// use checkAuth function to redirect is user not authenticated
// add event listener to the logout button and call logout

checkAuth();

const logOutButton = document.getElementById('logout');

logOutButton.addEventListener('click', async () => {
    await logout();
});
