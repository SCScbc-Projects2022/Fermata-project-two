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

// YOU -> THEM -> SONG -> STYLE -> SCRIPT -> PREVIEW
// <script src="../../../public/javascript/compose-letter/you.js"></script>

// router.use('/users', userRoutes);
// router.use('/drafts', draftRoutes);
// router.use('/sent', sentRoutes);
// router.use('/fonts', fontRoutes);