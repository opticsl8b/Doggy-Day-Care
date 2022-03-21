async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    if (email && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Incorrect email or password");
        document.location.reload();
      }
    } else if (!password || !email) {
      alert("You need to provide both: email and password");
    }
  }
  
  document
    .querySelector(".form-login .btn-primary")
    .addEventListener("click", loginFormHandler);
  