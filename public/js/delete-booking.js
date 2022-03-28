const deleteBtn = document.getElementById('deleteBtn');

async function newBookingHandler(event) {
  event.preventDefault();

  // string input TBD
  // const url = document.location.pathname;
  const id = deleteBtn.dataset.bookingId;

  if (confirm('Are you sure you want to delete this Booking?')) {
    const response = await fetch(`/api/booking/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/appointments');
    } else alert(response.status);
  }
}

// string input TBD
deleteBtn.addEventListener('click', newBookingHandler);
