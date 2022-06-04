<?php

// Include required files
require '../_private/global.php';
require 'curl.class.php';

// Start new instance of CurlServer object
$__cURL = new CurlServer();

// Set URL for request to obtain user token
$url = $__base_url . '/api/token';

// Set required Post fields to send to Spotify
$submit_post_fields = 'grant_type=authorization_code&code=' . $_GET['code'];
$submit_post_fields .= "&redirect_uri=$__redirect_uri";

// Application access token needs to be Base64 encoded
// Content of token will be 'Client ID:Client Secret'
$access_token = "Basic_" .base64_encode("$__app_client_id:$__app_secret");

// Start cURL Post reqiest to obtain user token
$used_token_data = $__cURL->post_request($url, $submit_post_fields, $access_token);