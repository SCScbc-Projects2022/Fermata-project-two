// CHANGE ALL HREFS TO PATHNAME

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

// readonly
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Preview.html#' /*'/sent'*/) {
    letterBody = document.querySelector('#letter-preview');
    letterBody.setAttribute('readonly', true);
    sendBtn = document.querySelector('#send-btn');
    sendBtn.style.display = 'none';
    heading = document.querySelector('#head'); // ----- possibility for errors in debugging (add id to html/handlebars)
    heading.style.display = 'none';
}

// send letter
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Preview.html') {
    sendBtn = document.querySelector('#send-btn').addEventListener('click', async () => {
        // let id = uniqid(); npm packages are backend only add to API POST requests
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
            console.log('success!');
            //document.location.replace('./Dashboard.html');
        } else {
            alert(response.statusText);
        }
        // email API
        //document.location.replace('file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Sent.html');
    });
}

// YOU -> THEM -> SONG -> STYLE -> SCRIPT -> PREVIEW
// <script src="../../../public/javascript/compose-letter/preview.js"></script>

// router.use('/users', userRoutes);
// router.use('/drafts', draftRoutes);
// router.use('/sent', sentRoutes);
// router.use('/fonts', fontRoutes);