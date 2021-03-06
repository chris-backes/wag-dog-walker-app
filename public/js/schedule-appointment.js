async function addDogToCalendar(event) {
  event.preventDefault();

  const calendarId = this.parentNode.dataset.calendar;

  const doggo = document.getElementById('doggos');
  const doggoSelected = doggo.options[doggo.selectedIndex].dataset.dog;

  const response = await fetch(`/api/calendars/${calendarId}`, {
    method: 'PUT',
    body: JSON.stringify({
      dog_id: doggoSelected,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.reload();
  }
}

document
  .querySelectorAll('.schedule-dog')
  .forEach((element) => element.addEventListener('click', addDogToCalendar));
