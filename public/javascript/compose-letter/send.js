// set font
let letterBody = document.querySelector('#letter-input');
let text;
switch(sessionStorage.getItem('font_id').toString()) {
    case '1':
        text = "'Caveat', cursive";
        letterBody.style.fontFamily = text;
        break;
    case '2':
        text = "'Lato', sans-serif";
        letterBody.style.fontFamily = text;
        break;
    case '3':
        text = "'Merriweather', serif";
        letterBody.style.fontFamily = text;
        break;
}

// send letter
document.querySelector('#send-btn').addEventListener('click', async () => {
    if (!letterBody.value) {
        alert('Please enter your message');
        return
    }
    if (letterBody.value.length > 255) { // eventually add character counter on textarea
        alert('Your message should be less than 255 characters');
        return
    }
    // let id = uniqid(); npm packages are backend only add to API POST requests
    let sign_off = sessionStorage.getItem('sign_off');
    let recipient_name = sessionStorage.getItem('recipient_name');
    let recipient_email = sessionStorage.getItem('recipient_email');
    let spotify_id = sessionStorage.getItem('spotify_id');
    let font_id = sessionStorage.getItem('font_id');
    let letter_body = letterBody.value.trim();
    let user_id = 2;     // placeholder
    console.log(sign_off);
    console.log(recipient_name);
    console.log(recipient_email);
    console.log(spotify_id);
    console.log(font_id);
    console.log(letter_body);
    console.log(user_id);


//     // create draft - missing auth
// router.post('/', /* withAuth? */ (req, res) => {
//     req.body.id = uniqid();
//     Draft.create({
//         sign_off: req.body.sign_off,
//         recipient_name: req.body.recipient_name,
//         recipient_email: req.body.recipient_email,
//         letter_body: req.body.letter_body,
//         spotify_id: req.body.spotify_id,
//         font_id: req.body.font_id
//         // user_id: req.session.user_id
//     })
//     .then(dbDraftData => res.json(dbDraftData))
//     .catch(err => {
//         console.log(err);
//         res.status(400).json(err);
//     });
// });

    const createLetter = await fetch('api/drafts', {
        method: 'POST',
        body: JSON.stringify({
            sign_off,
            recipient_name,
            recipient_email,
            spotify_id,
            font_id,
            letter_body,
            user_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (createLetter.ok) {
        document.location.replace('sent');
    } else {
        alert(createLetter.statusText);
    }
    
});

// YOU -> THEM -> SONG -> STYLE -> SCRIPT(SEND) -> PREVIEW -> SENT -> DASHBOARD
// <script src="../../../public/javascript/compose-letter/send.js"></script>

// router.use('/users', userRoutes);
// router.use('/drafts', draftRoutes);
// router.use('/sent', sentRoutes);
// router.use('/fonts', fontRoutes);