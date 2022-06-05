document.querySelector('#logout-btn').addEventListener('click', async () => {
    const logout = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    });
    if (logout.ok) {
        document.location.replace('/home');
    } else {
        alert(response.statusText);
    }
})