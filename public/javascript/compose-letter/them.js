// capture input fields
document.querySelector('#them-btn').addEventListener('click', () => {
    let name = document.querySelector('#their-name').value.trim();
    let email = document.querySelector('#their-email').value.trim();
    if (!name || !email) {
        alert('Please enter the recipient name and email');
        return
    }
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (!format) {
        alert('Please enter a valid email');
        return
    }
    sessionStorage.setItem('recipient_name', name);
    sessionStorage.setItem('recipient_email', email);
    document.location.replace('/compose/song');
});

// YOU -> THEM -> SONG -> STYLE -> SCRIPT(SEND) -> PREVIEW -> SENT -> DASHBOARD
// <script src="../../../public/javascript/compose-letter/them.js"></script>