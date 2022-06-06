<?php

// Required files
require '_inc/_private/global.php';
require '_inc/curl.class.php';

// Start new instance of CurlServer object
$cURL = new CurlServer();

// Set URL for request to obtain user token
$url = $base_url . '/api/token';

// Set required Post fields to send to Spotify
$submit_post_fields = 'grant_type=authorization_code&code=' . $_GET['code'];
$submit_post_fields .= "&redirect_uri=$redirect_uri";

// Content of token will be 'client_id:client_secret'
$access_token = "Basic_" .base64_encode("$client_id:$client_secret");

// Start cURL Post reqiest to obtain user token
$used_token_data = $cURL->post_request($url, $submit_post_fields, $access_token);

// Store access token in Session
$_SESSION['spotify_token'] = $used_token_data;
header("Location: $app_url");