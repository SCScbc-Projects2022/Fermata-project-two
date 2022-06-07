// capture input fields
document.querySelector('#you-btn').addEventListener('click', () => {
    let name = document.querySelector('#yourname-input').value.trim();
    if (!name) {
        alert('Please enter your name');
        return
    }
    sessionStorage.setItem('sign_off', name);
    document.location.replace('/compose/them');
});