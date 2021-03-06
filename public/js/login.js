async function loginFormHandler(event) {
    event.preventDefault();
  console.log("aaa");
    // selector input TBD
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
        // route TBD
        document.location.replace("/home");
      } else {
        alert("Incorrect email or password");
        document.location.reload();
      }
    } else if (!password || !email) {
      alert("You need to provide both: email and password");
    }
  }
  
  document
    // selector input TBD
    .querySelector("#loginBtn")
    .addEventListener("click", loginFormHandler);
  