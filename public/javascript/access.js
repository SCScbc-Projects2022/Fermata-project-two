document.querySelector('#access-btn').addEventListener('click', () => {
    let letter_id = document.querySelector('#letter-key').value.trim();
    let audio_id = document.querySelector('#audio-key').value.trim();
    let song_id;
    getLetter(letter_id);
    async function getLetter(id) {
        try {
            let letter = await fetch(`../../api/letter/${id}`);
            if (letter.ok) {
                let parsed = await letter.json();
                song_id = parsed.spotify_id;
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    if (audio_id !== song) {
        alert('Invalid Letter + Audio combination');
        return;
    }
    document.location.replace(`/letter/${id}}`)
});