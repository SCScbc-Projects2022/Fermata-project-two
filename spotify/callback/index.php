<?php

// Spotify API response handler

if (!empty($_GET['code'])) include '../_requestLogin.php';
else {
  echo '<pre>';
  print_r($_GET);
  echo '</pre>';
}