async function newFormHandler(event) {
    event.preventDefault();

  // string input TBD
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('#content').value;
  // string input TBD
    const response = await fetch("/api/posts", {
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
      document.location.replace("/dashboard");
    } else alert(response.status);
  }
  
  // string input TBD
  document
    .querySelector(".new-post-form")
    .addEventListener("submit", newFormHandler);
  