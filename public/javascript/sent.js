sessionStorage.setItem('song_id', '8L0XuwPzmgU');
let song = sessionStorage.getItem('song_id');

function onYouTubePlayerAPIReady() {
    var player = new YT.Player('player', {
        videoId: song,
        loop: true,
        events: {
            onReady: function (e) {
                e.target.playVideo();
            },
        }
    });
}

async function getSong() {
    try {
        let song = await fetch(`../../api/letter/${id}`);
        if (song.ok) {
            let parsed = await song.json();
            spotify_id = parsed.spotify_id;
            if (song !== spotify_id) {
                alert('Incorrect password');
            }
        }
    }
    catch (err) {
        console.log(err);
    }
}
