<?php

// Required files
require '_inc/_private/global.php';
require '_inc/curl.class.php';

// Check to see if user session exists
if (!empty($_SESSION['spotify_token'])) {
  include '_inc/dashboard.php';
} else {
    include '_inc/home.php';
}