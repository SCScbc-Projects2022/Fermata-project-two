const SpotifyWebApi = require('spotify-web-api-node');
const superagent = require('superagent');
// var authorize = require('./authorize.js');
// import { authorizeURL } from "./authorize.js";


var spotifyApi = new SpotifyWebApi({
  clientId: "8442f0707b904677a9a8df2022d07c9f",
  clientSecret: "d7793bc3c7144cfba2bc8dd182b6c054",
  redirectUri: "http://localhost:8888/api/logged",
});

spotifyApi.setAccessToken(authorizeURL);

spotifyApi
  // replace text with searchInput variable
  .searchTracks("Bad Habits", { limit: 5 })
  .then(function(data) {
    var searchArr = {
      first: data.body.tracks.items[0],
      second: data.body.tracks.items[1],
      third: data.body.tracks.items[2],
      fourth: data.body.tracks.items[3],
      fifth: data.body.tracks.items[4]
    }
    // console.log("Top five search results:", searchArr);

    // // For loop to get track info for each item in the searchArr

    // var trackInfo = function() {
    //   for (let i = 0; i < searchArr.length; i++) {
    //     var trackName = data.body.tracks.items[i].name;
    //     var albumUri = data.body.tracks.items[i].album.uri;
    //     var trackNumber = data.body.tracks.items[i].track_number - 1;
    //       console.log(data.body.tracks.items[i].name);
    //       console.log(trackName, albumUri, trackNumber);
    //   }
    // }
    // trackInfo();

    var firstTrackName = searchArr.first.name;
    var firstAlbumName = searchArr.first.artists.name;
    var firstContextUri = searchArr.first.album.uri;
    var firstPositionNumber = searchArr.first.track_number - 1;
    console.log("Track name: " + firstTrackName, "Album name: " + firstAlbumName, "Album URI: " + firstContextUri, "Position number: " + firstPositionNumber);
    
    var secondTrackName = searchArr.second.name;
    var secondAlbumName = searchArr.second.artists.name;
    var secondContextUri = searchArr.second.album.uri;
    var secondPositionNumber = searchArr.second.track_number - 1;
    console.log("Track name: " + secondTrackName, "Album name: " + secondAlbumName, "Album URI: " + secondContextUri, "Position number: " + secondPositionNumber);

    var thirdTrackName = searchArr.third.name;
    var thirdAlbumName = searchArr.third.album.name;
    var thirdContextUri = searchArr.third.album.uri;
    var thirdPositionNumber = searchArr.third.track_number - 1;
    console.log("Track name: " + thirdTrackName, "Album name: " + thirdAlbumName, "Album URI: " + thirdContextUri, "Position number: " + thirdPositionNumber);

    var fourthTrackName = searchArr.fourth.name;
    var fourthAlbumName = searchArr.fourth.album.name;
    var fourthContextUri = searchArr.fourth.album.uri;
    var fourthPositionNumber = searchArr.fourth.track_number - 1;
    console.log("Track name: " + fourthTrackName, "Album name: " + fourthAlbumName, "Album URI: " + fourthContextUri, "Position number: " + fourthPositionNumber);

    var fifthTrackName = searchArr.fifth.name;
    var fifthAlbumName = searchArr.fifth.album.name;
    var fifthContextUri = searchArr.fifth.album.uri;
    var fifthPositionNumber = searchArr.fifth.track_number - 1;
    console.log("Track name: " + fifthTrackName, "Album name: " + fifthAlbumName, "Album URI: " + fifthContextUri, "Position number: " + fifthPositionNumber);

})