document.querySelector('#signin-btn').addEventListener('click', async () => {
    let email = document.querySelector('#email-input').value.trim();
    let password = document.querySelector('#password-input').value.trim();
    if (!email || !password) {
        alert('Please enter your email and password');
        return;
    }
    const signIn = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if (signIn.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(signIn.statusText);
    }
});