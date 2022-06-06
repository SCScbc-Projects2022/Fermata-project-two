<?php

// Start new instance of Curl server
$cURL = new CurlServer();

// Set URL for request to create new playlist
// $req_url = `https://api.spotify.com/v1/users/${user_id}/playlists`;

// Start POST request via cURL
// $create_playlist = $cURL->post_request($req_url, $_SESSION['spotify_token']->access_token);

// Set URL for request to search Spotify
$req_url = `https://api.spotify.com/v1/search?query=track:${trackTitle}&type=track&include_external=audio&offset=0&limit=5`;

// Start GET request via cURL
$search_track = $cURL->get_request($req_url, $_SESSION['spotify_token']->access_token);

// Set URL for request to add track to playlist
// $req_url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?uris=${track_id}`;

// Start POST reqiest via cURL
// $add_track = $cURL->post_request($req_url, $_SESSION['spotify_token']->access_token);

// Include page header
include '_inc/html/header.php';
?>
<body>
  <div class="container" id="dashboard-container">
    <p>
      <img src="images/logo.png" class="dashboard-fermata-logo" alt="fermata logo">
      <img src="images/spotify-logo.png" class="dashboard-spotify-logo" alt="spotify logo">
    </p>
    <div class="search-container">
      <p>Search for any song on Spotify!</p>
      <input class="search-input" type="text" id="searchInput"></input>
      <button onclick="searchTrack();" alt="search spotify for track">Search Track</button>
    </div>
  </div>
</body>