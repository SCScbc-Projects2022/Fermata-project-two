// page fields
let letterBody;
let sendBtn;

// JSON key/value
let letter_body;
let sign_off;
let recipient_name;
let recipient_email;
let spotify_id;
let font_id;

let address = 'recipient@email.com' //placeholder
let sender = 'SENDERNAME' //placeholder
let recipient = 'RECIPIENTNAME' //placeholder
let link = 'http://www.fermata.com/sent/a1b2c3' //placeholder

// readonly --- edit this logic to apply to the input fields to selectively toggle on and off
// if (window.location.pathname === '/sent') {
//     letterBody = document.querySelector('#letter-preview');
//     letterBody.setAttribute('readonly', true);
//     sendBtn = document.querySelector('#send-btn');
//     sendBtn.style.display = 'none';
//     heading = document.querySelector('#head'); // ----- possibility for errors in debugging (add id to html/handlebars)
//     heading.style.display = 'none';
// }

// add an if statment to conditionally declare variables for the page when passed as a parameter from backend -- probably no time to do this

// send letter
sendBtn = document.querySelector('#send-btn').addEventListener('click', async () => {
    // let id = uniqid(); npm packages are backend only add to API POST requests
    // res.render('/pathname, {key: value} - to pass variables from backend to frontend) + let x = {{key}} in js
    sign_off = document.querySelector();
    recipient_name = document.querySelector();
    recipient_email = document.querySelector();
    spotify_id = 'a1b2c3' // ----- placeholder value
    font_id = document.querySelector(); //ability not yet available
    letter_body = document.querySelector();
    if (!sign_off.value || !recipient_email.value || !spotify_id.value || !font_id.value || !letter_body.value) {
        alert('Please ensure all fields are completed before sending your message')
    }
    if (letter_body.value > 255) {
        alert('Your message should be less than 255 characters');
    }
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(recipient_email.value);
    if (!format) {
        alert('Please enter a valid email');
        return
    }
    const sendLetter = await fetch('api/sent', {
        method: 'POST',
        body: JSON.stringify({
            sign_off,
            recipient_name,
            recipient_email,
            spotify_id,
            font_id,
            letter_body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (sendLetter.ok) {
        var email = document.createElement("a");
        email.href = `mailto:${address}?subject=\u{1F4C3} Your Fermata Has Arrived \u{1F3B5}&body=Hey ${recipient}, %0D%0A %0D%0A${sender} just sent you a Fermata - a personal letter with a song chosen just for you! %0D%0AExperience it here: ${link}%0D%0A %0D%0AWith \u{1F498}, %0D%0AThe Fermata Team %0D%0A %0D%0A `;
        email.click();
        document.location.replace('./confirm');
    } else {
        alert(response.statusText);
    }
});

// YOU -> THEM -> SONG -> STYLE -> SCRIPT(SEND) -> PREVIEW -> SENT -> DASHBOARD
// <script src="../../../public/javascript/compose-letter/preview.js"></script>

// router.use('/users', userRoutes);
// router.use('/drafts', draftRoutes);
// router.use('/sent', sentRoutes);
// router.use('/fonts', fontRoutes);