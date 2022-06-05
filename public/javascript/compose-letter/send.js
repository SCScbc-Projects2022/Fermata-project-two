// set font
let letterBody = document.querySelector('#letter-input');
let text;
switch(sessionStorage.getItem('font_id').toString()) { // get request?
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
    sessionStorage.setItem('letter_body', letterBody.value.trim());
    document.location.replace('/compose/preview/');
});