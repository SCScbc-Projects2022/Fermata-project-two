let song = localStorage.getItem('song_id');

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
