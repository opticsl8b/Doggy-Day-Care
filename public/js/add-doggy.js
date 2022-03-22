async function newFormHandler(event) {
    event.preventDefault();
  
    // string input TBD
    const name = document.querySelector('#dog-name').value;
    const gender = document.querySelector('#dog-gender').value;
    const age = document.querySelector('#dog-age').value;
    const breed = document.querySelector('#dog-breed').value;
    const size = document.querySelector('#dog-size').value;
    const additionalInfo = document.querySelector('#').value;

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
      document.location.replace("/homepage");
    } else alert(response.status);
  }
  }

  // string input TBD
  document
    .querySelector(".new-doggy-form")
    .addEventListener("submit", newFormHandler);
  