// send letter
let letterBody = document.querySelector('#letter-input');
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
    let sign_off = sessionStorage.getItem('sign_off');
    let recipient_name = sessionStorage.getItem('recipient_email');
    let recipient_email = sessionStorage.getItem('recipient_email');
    let spotify_id = sessionStorage.getItem('spotify_id');
    let font_id = sessionStorage.getItem('font_id');
    let letter_body = letterBody.value.trim();
    console.log(sign_off);
    console.log(recipient_name);
    console.log(recipient_email);
    console.log(spotify_id);
    console.log(font_id);
    console.log(letter_body);
    const createLetter = await fetch('api/drafts', {
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
    if (createLetter.ok) {
        document.location.replace('./Preview.html');
    } else {
        alert(response.statusText);
    }
    
});

// YOU -> THEM -> SONG -> STYLE -> SCRIPT(SEND) -> PREVIEW -> SENT -> DASHBOARD
// <script src="../../../public/javascript/compose-letter/send.js"></script>

// router.use('/users', userRoutes);
// router.use('/drafts', draftRoutes);
// router.use('/sent', sentRoutes);
// router.use('/fonts', fontRoutes);