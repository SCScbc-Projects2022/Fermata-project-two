document.querySelector('#signin-btn').addEventListener('click', async () => {
    let email = document.querySelector('#email-input').value.trim();
    let password = document.querySelector('#password-input').value.trim();
    if (!email || !password) {
        alert('Please enter your email and password');
        return;
    }
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (!format) {
        alert('Please enter a valid email');
        return
    }
    try {
        const signIn = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (signIn.ok) {
            let user = await signIn.json();
            localStorage.setItem('username', user.user.username);
            document.location.replace('/dashboard');
        } else {
            alert(signIn.statusText);
        }
    }
    catch (err) {
        console.log(err);
    }
});