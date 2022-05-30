// CHANGE ALL HREFS TO PATHNAME

// const { response } = require("express");

let letterBody;
let sendBtn;

// readonly
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Preview.html#' /*'/sent'*/) {
    letterBody = document.querySelector('#letter-preview');
    letterBody.setAttribute('readonly', true);
    sendBtn = document.querySelector('#send-btn');
    sendBtn.style.display = 'none';
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
        document.location.replace('file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Them.html');
    });
}

// submit THEM data
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Them.html') {
    let name = document.querySelector('#their-name');
    let email = document.querySelector('#their-email');
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    document.querySelector('#them-btn').addEventListener('click', () => {
        if (!name.value || !email.value) {
            alert('Please enter the recipient name and email');
            return
        }
        if (!format) {
            alert('Please enter a valid email');
            return
        }
        // sessionStorage.setItem('recipient_name', name.value.trim()); ----- add to database
        sessionStorage.setItem('recipient_email', name.value.trim());
        document.location.replace('file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Song.html');
    });
}

// submit SONG data
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Song.html') {
    document.querySelector('#song-btn').addEventListener('click', async () => {
        sessionStorage.setItem('spotify_id', 'placeholder value'); // ----- placeholder value
        document.location.replace('file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Style.html');
    });
}

// submit STYLE data
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Style.html') {
    document.querySelector('#style-btn').addEventListener('click', () => {
        document.querySelector('input[name="font"]').addEventListener(':checked', () => {
            eventTarget.setAttribute('style', 'color:red');
            console.log('style changed')
        })
        let selected = document.querySelector('input[name="font"]:checked');
        if (!selected) {
            alert("please select a style option");
            return
        }
        sessionStorage.setItem('font_id', parseInt(selected.value));
        document.location.replace('file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Send.html');
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
        sessionStorage.setItem('letter_body', letterBody.value.trim());
        console.log('the end of the journey!');
        console.log(sessionStorage.getItem('sign_off'));
        console.log(sessionStorage.getItem('recipient_email'));
        console.log(sessionStorage.getItem('spotify_id'));
        console.log(sessionStorage.getItem('font_id'));
        console.log(sessionStorage.getItem('letter_body'));
        let sign_off = sessionStorage.getItem('sign_off');
        let recipient_email = sessionStorage.getItem('recipient_email');
        let spotify_id = sessionStorage.getItem('spotify_id');
        let font_id = sessionStorage.getItem('font_id');
        let letter_body = sessionStorage.getItem('letter_body');
        const createLetter = await fetch('api/drafts', {
            method: 'POST',
            body: JSON.stringify({
                sign_off,
                recipient_email,
                spotify_id,
                font_id,
                letter_body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            console.log('success!')
            //document.location.replace('file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Preview.html');
        } else {
            alert(response.statusText);
        }
        
    });
}

// send letter
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Preview.html') {
    sendBtn = document.querySelector('#send-btn').addEventListener('click', () => {
        //document.location.replace('file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Dashboard.html');
    });
}

// YOU -> THEM -> SONG -> STYLE -> SCRIPT -> PREVIEW
// req.session.save() ???
// <script src="../../../public/javascript/compose-letter.js"></script>