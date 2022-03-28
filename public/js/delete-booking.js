// const deleteBtn = document.getElementById('deleteBtn');
const bookingContainer = document.querySelector('.booking-container');

async function newBookingHandler(event) {
  event.preventDefault();
  console.log(event.target);
  if (event.target.matches('button')) {
    const deleteBtn = event.target;
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
}
// string input TBD
bookingContainer.addEventListener('click', newBookingHandler);
