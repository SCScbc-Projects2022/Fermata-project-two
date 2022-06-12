const search = document.querySelector('#song-search');
const searchResults = document.querySelector('#search-results');
const buttons = document.querySelector('#search-next');

document.querySelector('#song-btn').addEventListener('click', async () => {
    let query = search.value;
    if (!query) {
        alert("Please add the ");
        return;
    }
    const format = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:watch|embed)(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/.test(query);
    if (!format) {
        alert('Please enter a valid YouTube URL');
        return;
    }
    let splitParams = query.split('=');
    let song_id = splitParams[1].split('&')[0];
    localStorage.setItem('song_id', song_id);
    document.location.replace('/compose/style')
});