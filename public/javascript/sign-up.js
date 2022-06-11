// sign up
document.querySelector('#signup-btn').addEventListener('click', async () => {
    const username = document.querySelector('#signupname-input').value.trim();
    const email = document.querySelector('#signupemail-input').value.trim();
    const password = document.querySelector('#password-input').value.trim().toString();
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (!username || !email|| !password) {
        alert('Please complete all fields');
        return;
    }
    if (!format) {
        alert('Please enter a valid email');
        return;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }
    try {
        let createUser = await fetch('../api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (createUser.ok) {
            document.location.replace('/home/sign-in');
        } else {
            alert(createUser.statusText);
        }
    }
    catch (err) {
        console.log(err);
    }
});