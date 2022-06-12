document.querySelector('#access-btn').addEventListener('click', () => {
    let letter_id = document.querySelector('#letter-key').value.trim();
    let audio_id = document.querySelector('#audio-key').value.trim();
    console.log(letter_id);
    console.log(audio_id);
    let song;
    let id = letter_id;
    getLetter(id);
    async function getLetter(id) {
        try {
            let letter = await fetch(`../../api/letter/${id}`);
            if (letter.ok) {
                let parsed = await letter.json();
                song = parsed.song_id;
                if (audio_id !== song) {
                    alert('Invalid Letter + Audio combination');
                    return;
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    localStorage.setItem('song_id', song);
    document.location.replace(`/letter/${id}`)
});