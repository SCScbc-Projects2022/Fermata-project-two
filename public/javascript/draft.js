// variables
let text;

let recipientName = document.querySelector('#sent-to');
let recipientEmail = document.querySelector('#sent-toward');
let signOff = document.querySelector('#signed-as');
let letterBody = document.querySelector('#letter-preview');

// set font
letterBody = document.querySelector('#letter-preview');
switch(sessionStorage.getItem('font_id').toString()) { //get request?
    case '1':
        text = "'Caveat', cursive";
        letterBody.style.fontFamily = text;
        break;
    case '2':
        text = "'Lato', sans-serif";
        letterBody.style.fontFamily = text;
        break;
    case '3':
        text = "'Merriweather', serif";
        letterBody.style.fontFamily = text;
        break;
}

// set values
signOff.value = sessionStorage.getItem('sign_off');
recipientName.value = sessionStorage.getItem('recipient_name');
recipientEmail.value = sessionStorage.getItem('recipient_email');
letterBody.value = sessionStorage.getItem('letter_body');

// save letter
document.querySelector('#save-btn').addEventListener('click', async () => {
    if (letterBody.value.length > 255 || letterBody.value.length === 0) { // eventually add character counter on textarea
        alert('Your message should be between 0 and 255 characters');
        return
    }
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(recipientEmail.value);
    if (!format) {
        alert('Please enter a valid email');
        return
    }
    if (!recipientName.value || !recipientEmail.value) {
        alert('Please enter valid recipient and sender names')
    }
    const letterId = document.location.pathname.split('/')[2]
    const id = letterId;
    let sign_off = signOff.value;
    let recipient_name = recipientName.value;
    let recipient_email = recipientEmail.value;
    let spotify_id = a1b2c3; //might need to render this into a display none elment (or hide it as a value somewhere) idk man
    let font_id = sessionStorage.getItem('font_id'); // keep this one
    let letter_body = letterBody.value.trim();
    let createDraft = await fetch('../../api/drafts', {
        method: 'PUT',
        body: JSON.stringify({
            id,
            sign_off,
            recipient_name,
            recipient_email,
            letter_body,
            spotify_id,
            font_id,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (createDraft.ok) {
        // let preview = await createDraft.json(); //I got it to return the data I need :sob:
        // console.log(preview);
        // console.log(createDraft).json()
        // document.location.replace('/dashboard');
    } else {
        alert(createDraft.statusText);
    }
});

// send letter
document.querySelector('#send-btn').addEventListener('click', async () => {
    if (letterBody.value.length > 255 || letterBody.value.length === 0) { // eventually add character counter on textarea
        alert('Your message should be between 0 and 255 characters');
        return
    }
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(recipientEmail.value);
    if (!format) {
        alert('Please enter a valid email');
        return
    }
    if (!recipientName.value || !recipientEmail.value) {
        alert('Please enter valid recipient and sender names')
    }
    // let id = uniqid(); npm packages are backend only add to API POST requests
    let sign_off = signOff.value;
    let recipient_name = recipientName.value;
    let recipient_email = recipientEmail.value;
    let spotify_id = sessionStorage.getItem('spotify_id'); // keep this one
    let font_id = sessionStorage.getItem('font_id'); // keep this one
    let letter_body = letterBody.value.trim();
    const createLetter = await fetch('../../api/sent', {
        method: 'POST',
        body: JSON.stringify({
            sign_off,
            recipient_name,
            recipient_email,
            spotify_id,
            font_id,
            letter_body,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (createLetter.ok) {
        var email = document.createElement("a");
        email.href = `mailto:${recipient_email}?subject=\u{1F4C3} Your Fermata Has Arrived \u{1F3B5}&body=Hey ${recipient_name}, %0D%0A %0D%0A${sign_off} just sent you a Fermata - a personal letter with a song chosen just for you! %0D%0AExperience it here: http://localhost:3001/drafts/${id}%0D%0A %0D%0AWith \u{1F498}, %0D%0AThe Fermata Team %0D%0A %0D%0A `;
        email.click();
        document.location.replace('/compose/confirm');
    } else {
        alert(createLetter.statusText);
    }
});