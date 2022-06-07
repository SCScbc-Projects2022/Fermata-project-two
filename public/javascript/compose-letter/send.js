// variables
let text;

// set font
let letterBody = document.querySelector('#letter-input');

// set font for letter body
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
    if (letterBody.value.length > 255 || letterBody.value.length === 0) { // eventually add character counter on textarea
        alert('Your message should be between 0 and 255 characters');
        return
    }
    // let id = uniqid(); npm packages are backend only add to API POST requests
    let sign_off = sessionStorage.getItem('sign_off');
    let recipient_name = sessionStorage.getItem('recipient_name');
    let recipient_email = sessionStorage.getItem('recipient_email');
    let spotify_id = sessionStorage.getItem('spotify_id');
    let font_id = sessionStorage.getItem('font_id');
    let letter_body = letterBody.value.trim();
    const readonly = false;
    const createLetter = await fetch('../../api/letter', {
        method: 'POST',
        body: JSON.stringify({
            sign_off,
            recipient_name,
            recipient_email,
            spotify_id,
            font_id,
            letter_body,
            readonly
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (createLetter.ok) {
        sessionStorage.clear();
        let preview = await createLetter.json();
        document.location.replace(`/letter/${preview.response}`);
    } else {
        alert(createLetter.statusText);
    }
});