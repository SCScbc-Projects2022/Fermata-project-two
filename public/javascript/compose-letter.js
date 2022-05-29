let letterBody;
let youNext;
let themNext;
let songNext;

if (window.location.pathname === '/sent/*') {
    letterBody = document.querySelector('#letter-preview');
    letterBody.setAttribute('readonly', true);
}

if (window.location.pathname === '/compose') { //confirm path name?
    youNext = document.querySelector('#you-btn');
    themNext = document.querySelector('#them-btn');
    songNext = document.querySelector('#song-btn');
    letterBody = document.querySelector('#letter-preview');
}

// document.location.replace?
// each next button POST/PUT to database - last button is a GET

// YOU -> THEM -> SONG -> SCRIPT -> PREVIEW