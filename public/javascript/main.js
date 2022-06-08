// add a greeting in the header that retrieves the username from local storage
document.querySelector('#greeting').textContent = `Welcome back, ${localStorage.getItem('username')}!`;

// logout and clear username from local storage
document.querySelector('#logout-btn').addEventListener('click', async () => {
    try {
        let logout = await fetch('/api/users/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        });
        if (logout.ok) {
            localStorage.clear();
            document.location.replace('/home');
        } else {
            alert(response.statusText);
        }
    }
    catch (err) {
        console.log(err);
    }
})