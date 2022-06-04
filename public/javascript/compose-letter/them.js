// capture input fields
document.querySelector('#them-btn').addEventListener('click', () => {
    let name = document.querySelector('#their-name');
    let email = document.querySelector('#their-email');
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
    document.location.replace('./song');
});

// YOU -> THEM -> SONG -> STYLE -> SCRIPT(SEND) -> PREVIEW -> SENT -> DASHBOARD
// <script src="../../../public/javascript/compose-letter/them.js"></script>