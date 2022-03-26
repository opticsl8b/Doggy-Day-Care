async function newDogHandler(event) {
  event.preventDefault();
  console.log('AddDog');
  // string input TBD
  const name = document.querySelector('#dog-name').value.trim();
  const gender = document.querySelector('#dog-gender').value.trim();
  const age = document.querySelector('#dog-age').value.trim();
  const breed = document.querySelector('#dog-breed').value.trim();
  const size = document.querySelector('#dog-size').value.trim();
  const additionalInfo = document.querySelector('#dog-info').value.trim();

  if (name && gender && age & breed && size) {
    const response = await fetch("/api/dogs", {
      method: 'POST',
      body: JSON.stringify({
        name,
        gender,
        age,
        breed,
        size,
        additionalInfo,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      // back to manage my dog page
      document.location.replace('/manage');
    } else alert(response.status);
  } else if (!name) {
    alert("Please Tell us Your Dog's Name");
  } else if (!gender) {
    alert("Please Tell us Your Dog's Gender");
  } else if (!age) {
    alert("Please Tell us Your Dog's age");
  } else if (!breed) {
    alert("Please Tell us Your Dog's Breed");
  } else if (!size) {
    alert('Please Choose Your Dogs Size.');
  }
}

// string input TBD
document.querySelector('#addBtn').addEventListener('click', newDogHandler);
