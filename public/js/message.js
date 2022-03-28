async function newMessageHandler(event) {
    event.preventDefault();

    

  // string input TBD
    const title = document.querySelector('.title').value.trim();
    const content = document.querySelector('.content').value.trim();

    console.log(title);
    console.log(content);
  // string input TBD
    const response = await fetch("/api/messages", {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // string input TBD
      document.location.replace("/home");
    } else alert(response.status);
  }
  
  // string input TBD
  document
    .querySelector(".loginButton")
    .addEventListener('click', newMessageHandler);
  