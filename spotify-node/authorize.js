var SpotifyWebApi = require('spotify-web-api-node');

require('dotenv').config();

var scopes = ['user-modify-playback-state'],
  redirectUri = process.env.REDIRECTURI,
  clientId = process.env.CLIENTID,
  clientSecret = process.env.CLIENTSECRET,
  state = "active";

var spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId,
  clientSecret: clientSecret
});

var authorizeUrl = spotifyApi.createAuthorizeURL(scopes, state);
console.log(authorizeUrl);


// The code that's returned as a query parameter to the redirect URI
var code = process.env.CODE;
  
// Retrieve an access token and a refresh token
spotifyApi.authorizationCodeGrant(code).then(
  function(data) {
    console.log('The token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    console.log('The refresh token is ' + data.body['refresh_token']);
  
    // Set the access token on the API object to use it in later calls
    spotifyApi.setAccessToken(data.body['access_token']);
    spotifyApi.setRefreshToken(data.body['refresh_token']);
  },
  function(err) {
    console.log('Something went wrong!', err);
  }
);

// Refresh authorization code
spotifyApi.refreshAccessToken().then(
    function(data) {
      console.log('The access token has been refreshed!');
  
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
      console.log('Could not refresh access token', err);
    }
);