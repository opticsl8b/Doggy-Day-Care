async function newBookingHandler(event) {
    event.preventDefault();
    
    // string input TBD
    // const url = document.location.pathname;
    const id = document.querySelector('.id').value.trim()

    if (id) {

    if (confirm("Are you sure you want to delete this post?")) {
        const response = await fetch(`/api/booking/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {          
            document.location.replace('/appointments');
        }else alert(response.status);
      }
    }
   
}
  
// string input TBD
document.querySelector('#deleteBtn').addEventListener('click', newBookingHandler);