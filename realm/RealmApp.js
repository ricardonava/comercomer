import * as RealmWeb from 'realm-web';

const REALM_APP_ID = 'comer-comer-lftdl';

const app = new RealmWeb.App({ id: REALM_APP_ID });

async function loginApiKey(apiKey) {
  // Create an anonymous credential
  const credentials = RealmWeb.Credentials.apiKey(apiKey);
  try {
    // Authenticate the user
    const user = await app.logIn(credentials);
    // `App.currentUser` updates to match the logged in user
    assert(user.id === app.currentUser.id);
    return user;
  } catch (err) {
    console.error('Failed to log in', err);
  }
}

loginApiKey(
  'xbtz48QJmFMtIbOdsMVEg5cSreBVEhKALVQsoWEzaQyZZjkY5oLK3OCCDdhSr23T'
).then((user) => {
  console.log('Successfully logged in!', user);
});
