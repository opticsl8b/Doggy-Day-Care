async function newFormHandler(event) {
    event.preventDefault();
  
    // string input TBD
    const date = document.querySelector('input[name="doggy-name"]').value;
    const session = document.querySelector('input[name="doggy-gender"]').value;
    const dog = document.querySelector('input[name="doggy-age"]').value;
    const activityName = document.querySelector('input[name="breed"]').value;
    

    if (date && session && dog & activityName){
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        date,
        session,
        dog,
        activityName,
              }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // string input TBD
      document.location.replace("/dashboard");
    } else alert(response.status);
  }else if(!date){alert("You need to provide date")}
  else if(!session){alert("You need to provide session")}
  else if(!dog){alert("You need to provide dog's name")}
  else if(!activityName){alert("You need to provide which activity you would like to book")}

}

  // string input TBD
  document
    .querySelector(".new-doggy-form")
    .addEventListener("submit", newFormHandler);
  