const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const form = document.getElementById("form");
const navbarLogo = document.getElementById("navbar-logo");

const helpPage = document.getElementById("latsHelpPage");
const aboutPage = document.getElementById("about");
const contactPage = document.getElementById("contact");

window.addEventListener("scroll", () => {
  const isInHelpPage = isScrolledIntoView(helpPage);
  const isInAboutPage = isScrolledIntoView(aboutPage);
  const isInContactPage = isScrolledIntoView(contactPage);

  if (isInHelpPage && !isInAboutPage && !isInContactPage) {
    navbarLogo.innerHTML = "Let's Help";
  } else if (isInAboutPage && !isInContactPage) {
    navbarLogo.innerHTML = "About Us";
  }else if (isInContactPage) {
    navbarLogo.innerHTML = "Contact Us";
  }else{
    navbarLogo.innerHTML = "ImanFit"
  }
});

function isScrolledIntoView(e) {
  const rect = e.getBoundingClientRect();
  const elemBottom = rect.bottom;
  const elemTop = rect.top;

  
  const isVisible = elemTop == 0 || elemBottom <= window.innerHeight;
  return isVisible;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let emailBody = `
  <b>Email from: </b>${email.value}<br />
  <b>Message: </b>${message.value}<br />
  `;

  Email.send({
    SecureToken: "a1645888-586f-4bba-a0ac-a2e3da11caca",
    To: "vincent111232@gmail.com",
    From: "vincent111232@gmail.com",
    Subject: subject.value,
    Body: emailBody,
  }).then((message) => alert(message));
});
