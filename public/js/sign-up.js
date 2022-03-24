async function signUpHandler(event) {
  event.preventDefault();
console.log("luca");
  // input in the string TBD
  const email = document.querySelector('#email-signup').value.trim();
  const firstName = document.querySelector('#firstname-signup').value.trim();
  const lastName = document.querySelector('#lastname-signup').value.trim();
  const phoneNumber = document.querySelector('#phone-number-signup')
    .value.trim();
  const address = document.querySelector('#address-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (firstName && lastName && phoneNumber && address && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        phoneNumber,
        address,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // route input TBD
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
  }else if (!password || !email) {
    alert("You need to provide both: email and password");
  }
}

// input in the string TBD
document.querySelector('.loginButton').addEventListener('click', signUpHandler);
