let song = localStorage.getItem('song_id');
const id = document.location.pathname.split('/')[2];

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

// prevents users from directly accessing letter via link unless song in local storage matches the letter's song id
verifySong();
async function verifySong() {
    try {
        let getSong = await fetch(`../../api/letter/${id}`);
        if (getSong.ok) {
            let parsed = await getSong.json();
            let song_id = parsed.song_id;
            console.log(song);
            console.log(song_id);
            if (song_id !== song) {
                alert('Something went wrong');
                setTimeout(redirect, 1000);
            }
        }
    }
    catch (err) {
        console.log(err);
    }
}

function redirect() {
    document.location.replace('/dashboard');
}