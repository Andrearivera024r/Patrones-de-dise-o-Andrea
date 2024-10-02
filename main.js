class Event {
    constructor(title, date, location) {
      if (Event.instance) {
        return Event.instance;
      }
      this.title = title;
      this.date = date;
      this.location = location;
      Event.instance = this;
    }
  
    getEventDetails() {
      return `${this.title} - Fecha: ${this.date} - Lugar: ${this.location}`;
    }
  }
  
  class AttendeeFactory {
    static createAttendee(type, name, email) {
      switch (type) {
        case "Student":
          return new StudentAttendee(name, email);
        case "Professional":
          return new ProfessionalAttendee(name, email);
        default:
          throw new Error("Tipo de asistente no válido");
      }
    }
  }
  
  document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;
  
    const attendee = AttendeeFactory.createAttendee(role, name, email);
  
    localStorage.setItem("attendeeName", attendee.name);
    localStorage.setItem("attendeeEmail", attendee.email);
    localStorage.setItem("attendeeRole", attendee.role);
  
    window.location.href = "events.html";
  });
  