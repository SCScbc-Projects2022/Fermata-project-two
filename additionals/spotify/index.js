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

// // Start Web Playback SDK
// window.onSpotifyWebPlaybackSDKReady = () => {
//   const token = 'BQAkfVvDMdVQo5x1EbMzpov-83Ji2nAVdgSe1fwnHDtDQ0sM6JlBiEH42tDIaa23ZkOCyfaXjDYX_T9UdaHAgV18qrDJrWM50RY0XKIv-6zh6yYTuAPboZ7yy64vVlK64FAgpnU1my_VlF3LgdEzGeEil9bvdvvyL38NT74vw9x3kC8-WysB9JJdpqbmn8YVqdxPMtUxvg0ege16hZyCnDxSpmGcMIHAeTooij5BX_CnGL564Q';
//     const player = new Spotify.Player({
//       name: 'Web Playback SDK Quick Start Player',
//       getOAuthToken: cb => { cb(token); },
//       volume: 0.5
//     });
//     document.getElementById('addSongButton').onclick = function() {
//       player.togglePlay();
//     }
//   }

//   // SDK ready
//   player.addListener('ready', ({ device_id }) => {
//   console.log('Ready with Device ID', device_id);

//   // after player is ready change current device to this player
//   const connect_device = () => {
//     console.log("Changing to device");
//   }
//   });

//   // not ready
//   player.addListener('not_ready', ({ device_id }) => {
//   console.log('Device ID has gone offline', device_id);
//   });

//   // error handling
//   player.addListener("initialization_error", ({ message }) => {
//   console.error(message);
//   });
    
//   player.addListener("authentication_error", ({ message }) => {
//   console.error(message);
//   });
    
//   player.addListener("account_error", ({ message }) => {
//   console.error(message);
//   });

//   // start device connection
//   player.connect().then((success) => {
//     if (success) {
//       console.log("The Web Playback SDK successfully connected to Spotify!");
//     }
//   });