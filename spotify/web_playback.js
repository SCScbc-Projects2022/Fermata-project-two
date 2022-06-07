const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 8888;
const application = express();

application.use(express.json());
application.use(express.urlencoded({ extended: true}));
application.use(cors());

const AuthRoutes = require('./routes/authRoutes.js');
application.use('/api', cors(), AuthRoutes);

application.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQALogfFtWXz-itONiLkHA0zxDSudxekKDCeytkePNn_VaXbImDns8JPKimPdUEBMw2p2huKgeKLM_q0BT4YujJ4KMKrIBpg4U62BzDWR6iTszi7nBNOPBCnJjFr3XpGFTNNR5dHkBV3RlaBRXY6UTGGcyGq5hQ_sy3v_6kdqJPraIH4ahYLJ0k';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); },
      volume: 0.5
    });
    document.getElementById('addSongButton').onclick = function() {
      player.togglePlay();
    }
  }

  // Ready
  player.addListener('ready', ({ device_id }) => {
  console.log('Ready with Device ID', device_id);

  // after player is ready change current device to this player
  const connect_device = () => {
    console.log("Changing to device");
  }
  });

  // not ready
  player.addListener('not_ready', ({ device_id }) => {
  console.log('Device ID has gone offline', device_id);
  });

  // error handling
  player.addListener("initialization_error", ({ message }) => {
  console.error(message);
  });
    
  player.addListener("authentication_error", ({ message }) => {
  console.error(message);
  });
    
  player.addListener("account_error", ({ message }) => {
  console.error(message);
  });

  // start device connection
  player.connect().then((success) => {
    if (success) {
      console.log("The Web Playback SDK successfully connected to Spotify!");
    }
  });