async function newFormHandler(event) {
    event.preventDefault();
  
    // string input TBD
    const name = document.querySelector('input[name="doggy-name"]').value;
    const gender = document.querySelector('input[name="doggy-gender"]').value;
    const age = document.querySelector('input[name="doggy-age"]').value;
    const breed = document.querySelector('input[name="breed"]').value;
    const size = document.querySelector('input[name="size"]').value;
    const additionalInfo = document.querySelector('input[name="additional-info"]').value;

    if (date && session && dog & activityName){
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        name,
        gender,
        age,
        breed,
        size,
        additionalInfo
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
  }

  // string input TBD
  document
    .querySelector(".new-doggy-form")
    .addEventListener("submit", newFormHandler);
  