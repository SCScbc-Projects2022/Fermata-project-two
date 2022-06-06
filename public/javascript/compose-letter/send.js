// variables
let text;

// set font
let letterBody = document.querySelector('#letter-input');
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
    let spotify_id = sessionStorage.getItem('spotify_id'); // keep this one
    let font_id = sessionStorage.getItem('font_id'); // keep this one
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
        let preview = await createLetter.json();
        document.location.replace(`/letter/${preview.response}`);
    } else {
        alert(createLetter.statusText);
    }
});

// // save letter
// document.querySelector('#save-btn').addEventListener('click', async () => {
//     if (letterBody.value.length > 255 || letterBody.value.length === 0) { // eventually add character counter on textarea
//         alert('Your message should be between 0 and 255 characters');
//         return
//     }
//     let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(recipientEmail.value);
//     if (!format) {
//         alert('Please enter a valid email');
//         return
//     }
//     if (!recipientName.value || !recipientEmail.value) {
//         alert('Please enter valid recipient and sender names')
//     }
//     // let id = uniqid(); npm packages are backend only add to API POST requests
//     let sign_off = signOff.value;
//     let recipient_name = recipientName.value;
//     let recipient_email = recipientEmail.value;
//     let spotify_id = sessionStorage.getItem('spotify_id'); // keep this one
//     let font_id = sessionStorage.getItem('font_id'); // keep this one
//     let letter_body = letterBody.value.trim();
//     let createDraft = await fetch('../../api/drafts', {
//         method: 'POST',
//         body: JSON.stringify({
//             sign_off,
//             recipient_name,
//             recipient_email,
//             spotify_id,
//             font_id,
//             letter_body,
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     if (createDraft.ok) {
//         let preview = await createDraft.json(); //I got it to return the data I need :sob:
//         console.log(preview);
//         // console.log(createDraft).json()
//         // document.location.replace('/dashboard');
//     } else {
//         alert(createDraft.statusText);
//     }
// });