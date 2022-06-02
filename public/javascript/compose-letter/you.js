// capture input fields
document.querySelector('#you-btn').addEventListener('click', () => {
    let name = document.querySelector('#yourname-input');
    let email = document.querySelector('#youremail-input');
    if (!name.value || !email.value) {
        alert('Please enter your name and email');
        return
    }
    sessionStorage.setItem('sign_off', name.value.trim());
    // sessionStorage.setItem('user_email', email.value.trim());  ----- remove from template
    document.location.replace('./Them.html');
});

// YOU -> THEM -> SONG -> STYLE -> SCRIPT(SEND) -> PREVIEW -> SENT -> DASHBOARD
// <script src="../../../public/javascript/compose-letter/you.js"></script>