async function newBookHandler(event) {
    event.preventDefault();
  console.log("book");
    // string input TBD
    const day = document.querySelector('#booking-day').value;
    const session = document.querySelector('#booking-session').value;
    const dog = document.querySelector('#booking-dog').value;
    const service = document.querySelector('#booking-service').value;
     
      //dog input here is the dogs ID not the dogs NAME
    if (day && session && dog && service){
    const response = await fetch("/api/session", {
      method: "POST",
      body: JSON.stringify({
        day,
        session,
        dog,  //ID value
        service,
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
  else if(!service){alert("You need to provide which activity you would like to book")}

}

  // string input TBD
  document
    .querySelector("#bookBTN")
    .addEventListener("click", newBookHandler);
  