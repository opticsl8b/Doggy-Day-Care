async function handleLogout() {
  
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert.response(response.statusText);
    }
  }
  function checkIfSessionIsActive() {
    setInterval(
      function () {
        fetch("/api/session").then((resp) => {
          if (!resp.ok) {
            alert(
              "You've been logged out, please re-login to access your dashboard"
            );
            location.replace("/lander");
          }
        });
      },
      30000000
    );
  }
  
  checkIfSessionIsActive();
  
  document.querySelector("#logout").addEventListener("click", handleLogout);
  document.querySelector("#logout2").addEventListener("click", handleLogout);
  