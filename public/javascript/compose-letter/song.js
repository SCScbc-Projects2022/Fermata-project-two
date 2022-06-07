document.querySelector('#song-btn').addEventListener('click', async () => {
    sessionStorage.setItem('spotify_id', 'a1b2c3'); // ----- placeholder value
    document.location.replace('/compose/style');
});