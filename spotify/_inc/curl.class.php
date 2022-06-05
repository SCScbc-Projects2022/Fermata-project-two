<?php

class CurlServer
{
  private $access_token;

  function __construct()
  {
    $this->access_token = '';
  }

  function post_request($url, $post_data, $access_token)
  {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: ' . $access_token, 'Content-Type: application/x-www-form-url-encoder'));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $server_output = curl_exec($ch);
    curl_close($ch);
    $serverResponseObject = json_decode($server_output);

    // Debug
    // print_r($server_output);
    // print_r($serverResponseObject);

    return $serverResponseObject;
  }
  function get_request($url, $token);
  {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, false);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: Bearer ' . $token));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $server_output = curl_exec($ch);
    curl_close($ch);
    $serverResponseObject = json_decode($server_output);

    return $serverResponseObject;

    // Debug
    // print_r($server_output);
    // print_r($serverResponseObject);
  }
}