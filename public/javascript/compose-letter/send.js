let letterBody = document.querySelector('#letter-input');
let text;
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

// set font style for letter body by querying the database
getFont();
async function getFont() {
    try {
        let font = await fetch(`../../api/fonts/${sessionStorage.getItem('font_id').toString()}`);
        if (font.ok) {
            let parsed = await font.json();
            letterBody.style.fontFamily = parsed.style_tag;
        }
    }
    catch (err) {
        console.log(err);
    }
}

// send letter
document.querySelector('#send-btn').addEventListener('click', async () => {
    if (letterBody.value.length > 255 || letterBody.value.length === 0) { // eventually add character counter on textarea?
        alert('Your message should be between 0 and 255 characters');
        return;
    }
    // let id = uniqid(); npm packages are backend only - id is generated before the post request is made to the database
    let sign_off = sessionStorage.getItem('sign_off');
    let recipient_name = sessionStorage.getItem('recipient_name');
    let recipient_email = sessionStorage.getItem('recipient_email');
    let song_id = song;
    let font_id = sessionStorage.getItem('font_id');
    let letter_body = letterBody.value.trim();
    let readonly = false;
    let createLetter = await fetch('../../api/letter', {
        method: 'POST',
        body: JSON.stringify({
            sign_off,
            recipient_name,
            recipient_email,
            song_id,
            font_id,
            letter_body,
            readonly
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (createLetter.ok) {
        sessionStorage.clear();
        // use json to parse the response body, retrieve the npm-generated id, and render the actual drafts layout
        let preview = await createLetter.json();
        document.location.replace(`/letter/${preview.response}`);
    } else {
        alert(createLetter.statusText);
    }
});