const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let emailBody = `
  <b>Email from: </b>${email.value}<br />
  <b>Message: </b>${message.value}<br />
  `

  Email.send({
    SecureToken: 'a1645888-586f-4bba-a0ac-a2e3da11caca',
    To: 'vincent111232@gmail.com',
    From: 'vincent111232@gmail.com',
    Subject: subject.value,
    Body: emailBody
  }).then((message) => alert(message));

  const log = {
    From: email.value,
    Subject: subject.value,
    Body: message.value,
  };
  console.log(log);
});
