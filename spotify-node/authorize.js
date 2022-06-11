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








// const authorizationCode = 'AQBN6oB9fUcltFuXO2YHAZ-3xPwCQJEHzODet1N3S_-AbIlJn5PAdTN45Uwm5XGwUNB17pKRRXVgh3qS6rsqiTgYGPlFSu9hi9Wz2E_VpBeRh74h7PX0qwF-Cf5ohpP_qAVC7xsRbzaTiZbMiayyjzbeubFPHFNYwda8VzETL1tMZJvKNblgRV1uJFIz1HP56twy1AHtz3LiS7u-4UuxKg';

// const spotifyApi = new SpotifyWebApi({
//   clientId: '8442f0707b904677a9a8df2022d07c9f',
//   clientSecret: 'd7793bc3c7144cfba2bc8dd182b6c054',
//   redirectUri: 'http://localhost:8888/api/logged'
// });

// // When our access token will expire
// let tokenExpirationEpoch;

// // First retrieve an access token
// spotifyApi.authorizationCodeGrant(authorizationCode).then(
//   function(data) {
//     console.log('The token expires in ' + data.body['expires_in']);
//     console.log('The access token is ' + data.body ['access_token']);
//     console.log('The refresh token is ' + data.body['refresh_token']);

//     // Set the access token and refresh token
//     spotifyApi.setAccessToken(data.body['access_token']);
//     spotifyApi.setRefreshToken(data.body['refresh_token']);

//     // Save the amount of seconds until the access token expired
//     tokenExpirationEpoch =
//       new Date().getTime() / 1000 + data.body['expires_in'];
//     console.log(
//       'Retrieved token. It expires in ' +
//         Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
//         ' seconds!'
//     );
//   },
//   function(err) {
//     console.log(
//       'Something went wrong when retrieving the access token!',
//       err.message
//     );
//   }
// );

// // Continually print out the time left until the token expires..
// let numberOfTimesUpdated = 0;

// setInterval(function() {
//   console.log(
//     'Time left: ' +
//       Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
//       ' seconds left!'
//   );

//   // OK, we need to refresh the token. Stop printing and refresh.
//   if (++numberOfTimesUpdated > 5) {
//     clearInterval(this);

//     // Refresh token and print the new time to expiration.
//     spotifyApi.refreshAccessToken().then(
//       function(data) {
//         tokenExpirationEpoch =
//           new Date().getTime() / 1000 + data.body['expires_in'];
//         console.log(
//           'Refreshed token. It now expires in ' +
//             Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
//             ' seconds!'
//         );
//       },
//       function(err) {
//         console.log('Could not refresh the token!', err.message);
//       }
//     );
//   }
// }, 1000);

// var credentials = {
//     clientId: '8442f0707b904677a9a8df2022d07c9f',
//     clientSecret: 'd7793bc3c7144cfba2bc8dd182b6c054',
//     redirectUri: 'http://localhost:8888/api/logged'
//   };
  
//   var spotifyApi = new SpotifyWebApi(credentials);
  
//   // The code that's returned as a query parameter to the redirect URI
//   var code = 'MQCbtKe23z7YzzS44KzZzZgjQa621hgSzHN';
  
//   // Retrieve an access token and a refresh token
//   spotifyApi.authorizationCodeGrant(code).then(
//     function(data) {
//       console.log('The token expires in ' + data.body['expires_in']);
//       console.log('The access token is ' + data.body['access_token']);
//       console.log('The refresh token is ' + data.body['refresh_token']);
  
//       // Set the access token on the API object to use it in later calls
//       spotifyApi.setAccessToken(data.body['access_token']);
//       spotifyApi.setRefreshToken(data.body['refresh_token']);
//     },
//     function(err) {
//       console.log('Something went wrong!', err);
//     }
//   );

// var scopes = ['user-modify-playback-state'],
//   redirectUri = "http://localhost:8888/api/logged",
//   clientId = "8442f0707b904677a9a8df2022d07c9f",
//   state = "active";

// var spotifyApi = new SpotifyWebApi({
//   redirectUri: redirectUri,
//   clientId: clientId
// });

// var authorizeUrl = spotifyApi.createAuthorizeURL(scopes, state);
// console.log(authorizeUrl);

// // refresh token
// spotifyApi.refreshAccessToken().then(
//   function(data) {
//     console.log("The access token has been refreshed!");

//     // save token
//     spotifyApi.setAccessToken(data.body["access_token"]);
//     spotifyApi.setRefreshToken(data.body["refresh_token"]);

//     console.log("The access token is " + data.body["access_token"]);
//     console.log("The refresh token is ") + data.body["refresh_token"]);
  
//   function(err) {
//     console.log("Could not refresh access token", err);
//   }
// );