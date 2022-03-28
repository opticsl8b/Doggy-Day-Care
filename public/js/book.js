async function newBookHandler(event) {
    event.preventDefault();  
    // string input TBD
    const day = document.querySelector('#booking-day').value;
    const session = document.querySelector('#booking-session').value;
    const dog = document.querySelector('#booking-dog').value;    
    const service = document.querySelector('#booking-service').value;
    const daysession = day + " " + session;
    
    //dog input here is the dogs ID not the dogs NAME
    if (daysession && dog && service){
    const response = await fetch("/api/booking", {
      method: "POST",
      body: JSON.stringify({
        daysession, // YYYY-MM-DD HH-MM-SS format
        dog,  //ID value
        service,
              }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      
      document.location.replace('/appointments');
      alert(`Thank You!Your booking is received successfully`);
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
  