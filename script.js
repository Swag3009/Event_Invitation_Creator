const form = document.getElementsByClassName("formContainer")[0];
const modal = document.getElementById("modal");
const display = document.getElementById("display");
const submitBtn = document.getElementById("submit");
const displayData = ({
  eventName,
  eventDate,
  startTime,
  endTime,
  eventDesc,
  location,
}) => {
  display.style.display = "flex";
  const invitation = document.createElement("h1");
  const toJoin = document.createElement("h3");
  const event = document.createElement("h2");
  const date = document.createElement("p");
  const time = document.createElement("p");
  const locationData = document.createElement("p");
  const description = document.createElement("p");
  invitation.setAttribute("id", "invitation");
  toJoin.setAttribute("id", "toJoin");
  event.setAttribute("id", "event");
  date.setAttribute("id", "date");
  time.setAttribute("id", "time");
  locationData.setAttribute("id", "locationData");
  description.setAttribute("id", "description");
  invitation.textContent = "YOU ARE INVITED";
  toJoin.textContent = "TO JOIN THE";
  event.textContent = eventName;
  let dateFormat = new Date(eventDate);
  date.textContent = dateFormat.toDateString();
  time.textContent = `${startTime} - ${endTime}`;
  locationData.textContent = location;
  description.textContent = eventDesc;
  display.append(
    invitation,
    toJoin,
    event,
    date,
    time,
    locationData,
    description,
  );
};
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const eventName = document.getElementById("eventName").value;
  const eventDate = document.getElementById("eventDate").value;
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;
  const eventDesc = document.getElementById("eventDesc").value;
  const location = document.getElementById("location").value;
  let isFormFilled = !(
    !eventName ||
    !eventDate ||
    !eventDesc ||
    !startTime ||
    !endTime ||
    !location
  );
  if (isFormFilled) {
    form.style.display = "none";
    let data = {
      eventName,
      eventDate,
      startTime,
      endTime,
      eventDesc,
      location,
    };
    displayData(data);
  } else {
    modal.style.display = "flex";
    const closeBtn = document.getElementById("clsBtn");
    closeBtn.addEventListener("click", (event) => {
      modal.style.display = "none";
    });
  }
});
