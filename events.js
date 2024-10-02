const eventsList = document.getElementById("events-list");

events.forEach(event => {
  const eventElement = document.createElement("div");
  eventElement.classList.add("event");

  eventElement.innerHTML = `
    <h2>${event.title}</h2>
    <p>Fecha: ${event.date} - Hora: ${event.time}</p>
    <p>Lugar: ${event.location}</p>
    <img src="${event.image}" alt="Imagen del evento">
  `;

  eventsList.appendChild(eventElement);
});
