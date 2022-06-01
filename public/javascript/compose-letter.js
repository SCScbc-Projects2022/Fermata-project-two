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

// submit YOU data
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/You.html') {
    let name = document.querySelector('#yourname-input');
    let email = document.querySelector('#youremail-input');
    document.querySelector('#you-btn').addEventListener('click', () => {
        if (!name.value || !email.value) {
            alert('Please enter your name and email');
            return
        }
        sessionStorage.setItem('sign_off', name.value.trim());
        // sessionStorage.setItem('user_email', email.value.trim());  ----- remove from template
        document.location.replace('./Them.html');
    });
}

// submit THEM data
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Them.html') {
    let name = document.querySelector('#their-name');
    let email = document.querySelector('#their-email');
    document.querySelector('#them-btn').addEventListener('click', () => {
        if (!name.value || !email.value) {
            alert('Please enter the recipient name and email');
            return
        }
        let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
        if (!format) {
            alert('Please enter a valid email');
            return
        }
        sessionStorage.setItem('recipient_name', name.value.trim());
        sessionStorage.setItem('recipient_email', name.value.trim());
        document.location.replace('./Song.html');
    });
}

// submit SONG data
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Song.html') {
    document.querySelector('#song-btn').addEventListener('click', async () => {
        sessionStorage.setItem('spotify_id', 'a1b2c3'); // ----- placeholder value
        document.location.replace('./Style.html');
    });
}

// submit STYLE data
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Style.html') {
    // indicate selected using text style
    let caveat = document.querySelector('#caveat-label');
    let lato = document.querySelector('#lato-label');
    let merriweather = document.querySelector('#merriweather-label');
    document.querySelector('#caveat').addEventListener('click',() => {
        caveat.style.color = "red"
        lato.style.color = "#7089AC"
        merriweather.style.color = "#7089AC"
    });
    document.querySelector('#lato').addEventListener('click',() => {
        caveat.style.color = "#7089AC"
        lato.style.color = "red"
        merriweather.style.color = "#7089AC"
    });
    document.querySelector('#merriweather').addEventListener('click',() => {
        caveat.style.color = "#7089AC"
        lato.style.color = "#7089AC"
        merriweather.style.color = "red"
    });
    document.querySelector('#style-btn').addEventListener('click', () => {
        let selected = document.querySelector('input[name="font"]:checked');
        if (!selected) {
            alert("Please select a style option");
            return
        }
        console.log(selected);
        sessionStorage.setItem('font_id', parseInt(selected.value));
        document.location.replace('./Send.html');
    });
}

// submit MESSAGE data
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Send.html') {
    letterBody = document.querySelector('#letter-input');
    sendBtn = document.querySelector('#send-btn');
    document.querySelector('#you-btn').addEventListener('click', async () => {
        if (!letterBody.value) {
            alert('Please enter your message');
            return
        }
        if (letterBody.value.length > 255) { // eventually add character counter on textarea
            alert('Your message should be less than 255 characters');
            return
        }
        // let id = uniqid(); npm packages are backend only add to API POST requests
        letter_body = letterBody.value.trim();
        sign_off = sessionStorage.getItem('sign_off');
        recipient_name = sessionStorage.getItem('recipient_email');
        recipient_email = sessionStorage.getItem('recipient_email');
        spotify_id = sessionStorage.getItem('spotify_id');
        font_id = sessionStorage.getItem('font_id');
        console.log(sign_off);
        console.log(recipient_name);
        console.log(recipient_email);
        console.log(spotify_id);
        console.log(font_id);
        console.log(letter_body);
        // const createLetter = await fetch('api/drafts', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         sign_off,
        //         recipient_name,
        //         recipient_email,
        //         spotify_id,
        //         font_id,
        //         letter_body
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
        // if (createLetter.ok) {
        //     console.log('success!')
        //      sessionStorage.clear();
        //     document.location.replace('./Preview.html');
        // } else {
        //     alert(response.statusText);
        // }
        
    });
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
        //document.location.replace('file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Dashboard.html');
    });
}

// YOU -> THEM -> SONG -> STYLE -> SCRIPT -> PREVIEW
// <script src="../../../public/javascript/compose-letter.js"></script>

// router.use('/users', userRoutes);
// router.use('/drafts', draftRoutes);
// router.use('/sent', sentRoutes);
// router.use('/fonts', fontRoutes);