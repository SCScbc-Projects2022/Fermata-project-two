
    // <h4>Name:</h4>
    //   <input type="text" name="" id="signupname-input" />

    // <h4>Email:</h4>
    //   <input type="email" name="" id="signupemail-input" />

    // <h4>Password:</h4>
    //   <input type="password" name="" id="password-input" />

document.querySelector('#signup-btn').addEventListener('click', async () => {
    let signupName = document.querySelector('#signupname-input');
    let signupEmail = document.querySelector('#signupemail-input');
    let signupPassword = document.querySelector('#password-input');
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signupEmail.value);
    if (!signupName.value || !signupEmail.value || !signupPassword.value) {
        alert('Please complete all fields');
        return
    }
    if (!format) {
        alert('Please enter a valid email');
        return
    }
    let username = signupName.value;
    let email = signupEmail.value;
    let password = signupPassword.value;
    console.log(username);
    console.log(email);
    console.log(password);
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
        })
        if (createUser.ok) {
            // let preview = await createDraft.json(); //I got it to return the data I need :sob:
            // console.log(preview.response);
            document.location.replace('/sign-in');
        } else {
            alert(createUser.statusText);
        }
    }
    catch (err) {
        console.log(err);
    }
});