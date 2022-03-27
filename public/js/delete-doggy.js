async function newDogHandler(event) {
    event.preventDefault();
    
    // string input TBD
    const url = document.location.pathname;
    const id = url.substring(url.lastIndexOf("/") + 1);

    if (id) {

    if (confirm("Are you sure you want to delete this post?")) {
        const response = await fetch(`/api/dogs/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {          
            document.location.replace('/manage');
        }
      }
    }
   
}
  
// string input TBD
document.querySelector('#deleteBtn').addEventListener('click', newDogHandler);