document.querySelector('#song-btn').addEventListener('click', async () => {
    sessionStorage.setItem('spotify_id', 'a1b2c3'); // ----- placeholder value
    document.location.replace('./Style.html');
});

// YOU -> THEM -> SONG -> STYLE -> SCRIPT(SEND) -> PREVIEW -> SENT -> DASHBOARD
// <script src="../../../public/javascript/compose-letter/song.js"></script>