<?php

// Start new instance of Curl server
$__cURL = new CurlServer();

// Set URL for request to create new playlist
$req_url = `https://api.spotify.com/v1/users/${user_id}/playlists`;

// Start POST request via cURL
$create_playlist = $__cURL->post_request($req_url, $_SESSION['spotify_token']->access_token);

// Set URL for request to search Spotify
$req_url = `https://api.spotify.com/v1/search?query=track:${trackTitle}&type=track&include_external=audio&offset=0&limit=5`;

// Start GET request via cURL
$search_track = $__cURL->get_request($req_url, $_SESSION['spotify_token']->access_token);

// Set URL for request to add song to playlist
$req_url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?uris=${track_id}`;

// Start POST reqiest via cURL
$add_track = $__cURL->post_request($req_url, $_SESSION['spotify_token']->access_token);

// Include page body
include 'html/body.php';
?>
<body>
  <h1>Search for a song</h1>
  <script>
    const token = '<?php echo $_SESSION['spotify_token']->access_token; ?>';
  </script>
  <script src="scripts/web_playback.js"></script>
</body>