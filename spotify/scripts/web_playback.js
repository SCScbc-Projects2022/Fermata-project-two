window.onSpotifyWebPlaybackSDKReady = () => {
    const player = new Spotify.Player({
      name: "Fermata",
      getOAuthToken: (cb) => {
        cb(token);
      },
      volume: 0.5,
    });
  
    // Player Ready
    player.addListener("ready", ({ device_id }) => {
      console.log("Ready with Device ID", device_id);
  
      // after player is ready change current device to this player
      const connect_device = () => {
        console.log("Changing to device");
        let change_device = fetch("https://api.spotify.com/v1/me/player", {
          method: "PUT",
          body: JSON.stringify({
            device_ids: [device_id],
            play: true,
          }),
          headers: new Headers({
            Authorization: "Bearer " + token,
          }),
        }).then((response) => console.log(response));
      };
      connect_device();
    });
  
    // if not ready
    player.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID has gone offline", device_id);
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
  };
  
  // Play selected song
  const play_song = async (uri) => {
      console.log("Changing song");
      let request_answer = await fetch(
        "https://api.spotify.com/v1/me/player/play",
        {
          method: "PUT",
          body: JSON.stringify({
            uris: [uri],
          }),
          headers: new Headers({
            Authorization: "Bearer " + token,
          }),
        }
      ).then((data) => console.log(data));
    };