let signOff = document.querySelector('#sign-off');
let recipientName = document.querySelector('#their-name');
let recipientEmail = document.querySelector('#their-email');
let letterBody = document.querySelector('#letter-preview');

let font_id;
const id = document.location.pathname.split('/')[2];
let song_id = localStorage.getItem('song_id');

// variables returned from .render() are not meant for client-side javascript, so query the database to return remaining data values
getUnrendered();
async function getUnrendered() {
    try {
        let font = await fetch(`../../api/letter/${id}`);
        if (font.ok) {
            let parsed = await font.json();
            font_id = parsed.font.id;
            letterBody.style.fontFamily = parsed.font.style_tag;
        }
    }
    catch (err) {
        console.log(err);
    }
}

// save letter
document.querySelector('#save-btn').addEventListener('click', async () => {
    if (letterBody.value.length > 255 || letterBody.value.length === 0) { // eventually add character counter on textarea?
        alert('Your message should be between 0 and 255 characters');
        return;
    }
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(recipientEmail.value);
    if (!format) {
        alert('Please enter a valid recipient email');
        return;
    }
    if (!recipientName.value || !recipientEmail.value) {
        alert('Please enter valid recipient and sender names');
    }
    let sign_off = signOff.value;
    let recipient_name = recipientName.value;
    let recipient_email = recipientEmail.value;
    let letter_body = letterBody.value.trim();
    const readonly = false;
    try {
        let createDraft = await fetch(`../../api/letter/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id,
                sign_off,
                recipient_name,
                recipient_email,
                letter_body,
                song_id,
                font_id,
                readonly
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (createDraft.ok) {
            location.reload();
            alert('Your draft has been saved!');
        } else {
            alert(createDraft.statusText);
        }
    }
    catch (err) {
        console.log(err);
    }
});

// send letter
document.querySelector('#send-btn').addEventListener('click', async () => {
    if (letterBody.value.length > 255 || letterBody.value.length === 0) { // eventually add character counter on textarea
        alert('Your message should be between 0 and 255 characters');
        return;
    }
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(recipientEmail.value);
    if (!format) {
        alert('Please enter a valid recipient email');
        return;
    }
    if (!recipientName.value || !recipientEmail.value) {
        alert('Please enter valid recipient and sender names');
    }
    const id = document.location.pathname.split('/')[2];
    let sign_off = signOff.value;
    let recipient_name = recipientName.value;
    let recipient_email = recipientEmail.value;
    let letter_body = letterBody.value.trim();
    // a draft becomes a letter in sent history when readonly value is true
    const readonly = true;
    try {
        let sendLetter = await fetch(`../../api/letter/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id,
                sign_off,
                recipient_name,
                recipient_email,
                letter_body,
                song_id,
                font_id,
                readonly
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (sendLetter.ok) {
            // create an a element that stores a mailto: function and automatically click this unrendered element to open and populate the email engine with the template literal
            var email = document.createElement("a");
            email.href = `mailto:${recipient_email}?subject=\u{1F4C3} Your Fermata Has Arrived \u{1F3B5}&body=Hey ${recipient_name}, %0D%0A %0D%0A${sign_off} just sent you a Fermata - a personal letter with a song chosen just for you! %0D%0AExperience it here: http://localhost:3001/letter/${id}%0D%0A %0D%0AWith \u{1F498}, %0D%0AThe Fermata Team %0D%0A %0D%0A `;
            email.click();
            document.location.replace('/compose/confirm');
        } else {
            alert(sendLetter.statusText);
        }
    }
    catch (err) {
        console.log(err);
    }
});

function onYouTubePlayerAPIReady() {
    var player = new YT.Player('player', {
        videoId: song_id,
        loop: true,
        events: {
            onReady: function (e) {
                e.target.playVideo();
            },
        }
    });
  }