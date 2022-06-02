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

// submit SONG data
if (window.location.href === 'file:///C:/Users/Ronnie/projects/fermata-project-two/views/layouts/sandbox/Song.html') {
    document.querySelector('#song-btn').addEventListener('click', async () => {
        sessionStorage.setItem('spotify_id', 'a1b2c3'); // ----- placeholder value
        document.location.replace('./Style.html');
    });
}

// YOU -> THEM -> SONG -> STYLE -> SCRIPT -> PREVIEW
// <script src="../../../public/javascript/compose-letter/song.js"></script>

// router.use('/users', userRoutes);
// router.use('/drafts', draftRoutes);
// router.use('/sent', sentRoutes);
// router.use('/fonts', fontRoutes);