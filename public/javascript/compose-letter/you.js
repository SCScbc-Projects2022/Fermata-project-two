// capture input fields
document.querySelector('#you-btn').addEventListener('click', () => {
    let name = document.querySelector('#yourname-input');
    if (!name.value) {
        alert('Please enter your name');
        return
    }
    sessionStorage.setItem('sign_off', name.value.trim());
    document.location.replace('/compose/them');
});

// YOU -> THEM -> SONG -> STYLE -> SCRIPT(SEND) -> PREVIEW -> SENT -> DASHBOARD
// <script src="../../../public/javascript/compose-letter/you.js"></script>