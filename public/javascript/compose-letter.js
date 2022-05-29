// CHANGE ALL HREFS TO PATHNAME

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
    document.querySelector('#you-btn').addEventListener('click', () => {
        console.log('this works');
        document.location.replace('file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Them.html');
    });
}

// submit THEM data
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Them.html') {
    document.querySelector('#them-btn').addEventListener('click', () => {
        document.location.replace('file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Song.html');
    });
}

// submit SONG data
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Song.html') {
    document.querySelector('#song-btn').addEventListener('click', () => {
        console.log('this works');
        document.location.replace('file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Style.html');
    });
}

// submit STYLE data
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Style.html') {
    document.querySelector('#song-btn').addEventListener('click', () => {
        console.log('this works');
        document.location.replace('file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Send.html');
    });
}


// submit MESSAGE data
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Send.html') {
    letterBody = document.querySelector('#letter-input');
    sendBtn = document.querySelector('#send-btn');
    document.querySelector('#you-btn').addEventListener('click', () => {
        console.log('this works');
        document.location.replace('file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Preview.html');
    });
}

// send letter
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Preview.html') {
    letterBody = document.querySelector('#letter-preview');
    sendBtn = document.querySelector('#send-btn').addEventListener('click', () => {
        console.log('this works');
        document.location.replace('file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Dashboard.html');
    });
}

// each next button POST/PUT to database - last button is a GET

// YOU -> THEM -> SONG -> STYLE -> SCRIPT -> PREVIEW
// <script src="../../../public/javascript/compose-letter.js"></script>