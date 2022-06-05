<?php

// Required files
require '_private/global.php';
require 'html/curl.class.php';

// Check to see if user session exists
if (!empty($_SESSION['spotify_token'])) {
  include 'html/dashboard.php';
} else {
    include 'html/home.php';
}