document.querySelector('#send').addEventListener('click', Email.send({
  Host : "smtp.yourisp.com",
  Username : "username",
  Password : "password",
  To : 'them@website.com',
  From : "you@isp.com",
  Subject : "This is the subject",
  Body : "And this is the body"
}).then(
message => alert(message)
));

// var transport = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "d37c945b49720d",
//     pass: "2683a813f785b5"
//   }
// });

// emailjs.send('service_x0nwu7l', 'template_tyd731n', {from_name: 'abcdidgaf', to_name: 'jsearching', message: 'god i hope this works i have tried so many of these', reply_to}, publicKey);