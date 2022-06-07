const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const urlsearchparams = require('urlsearchparams');

// this can be used as a seperate module
const encodeFormData = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

module.exports = router;

router.get('/login', async (req, res) => {
    const scope =
      `user-modify-playback-state playlist-modify-public playlist-modify-private`;
  
    res.redirect('https://accounts.spotify.com/authorize?' +
      urlsearchparams.stringify({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        scope: scope,
        redirect_uri: process.env.REDIRECTURI
      })
    );
});

router.get('/logged', async (req, res) => {
  const body = {
    grant_type: 'authorization_code',
    code: req.url.code,
    redirect_uri: process.env.REDIRECTURI,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
  }

  await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    },
    body: encodeFormData(body)
  })
  .then(response => response.json())
  .then(data => {
    const url = urlsearchparams.stringify(data);
    res.redirect(`${process.env.CLIENT_REDIRECTURI}?${url}`);
  });
});