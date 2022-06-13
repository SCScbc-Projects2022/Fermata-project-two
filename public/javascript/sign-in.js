document.querySelector('#signin-btn').addEventListener('click', async () => {
    let email = document.querySelector('#email-input').value.toString().trim();
    let password = document.querySelector('#password-input').value.toString().trim();
    if (!email || !password) {
        alert('Please enter your email and password');
        return;
    }
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (!format) {
        alert('Please enter a valid email');
        return;
    }
    try {
        let signIn = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (signIn.ok) {
            // use json to parse the response body and retrive the username property of the logged in user and set to local storage
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