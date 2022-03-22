async function newFormHandler(event) {
    event.preventDefault();
  
    // string input TBD
    const day = document.querySelector('#booking-day').value;
    const session = document.querySelector('#booking-session').value;
    const dog = document.querySelector('#booking-dog').value;
    const activityName = document.querySelector('#booking-service').value;
    

    if (day && session && dog & activityName){
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        day,
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
      document.location.replace("/home");
    } else alert(response.status);
  }else if(!day){alert("You need to provide day")}
  else if(!session){alert("You need to provide session")}
  else if(!dog){alert("You need to provide dog's name")}
  else if(!activityName){alert("You need to provide which activity you would like to book")}

}

  // string input TBD
  document
    .querySelector(".new-doggy-form")
    .addEventListener("submit", newFormHandler);
  