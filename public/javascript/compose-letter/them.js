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

// YOU -> THEM -> SONG -> STYLE -> SCRIPT -> PREVIEW
// <script src="../../../public/javascript/compose-letter/them.js"></script>

// router.use('/users', userRoutes);
// router.use('/drafts', draftRoutes);
// router.use('/sent', sentRoutes);
// router.use('/fonts', fontRoutes);