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

// YOU -> THEM -> SONG -> STYLE -> SCRIPT -> PREVIEW
// <script src="../../../public/javascript/compose-letter/style.js"></script>

// router.use('/users', userRoutes);
// router.use('/drafts', draftRoutes);
// router.use('/sent', sentRoutes);
// router.use('/fonts', fontRoutes);