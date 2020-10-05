//server api
const serverApiPath = "http://localhost:3000/events";

//where to keep it in the document, use the id in the index.html
const listWrapper = document.getElementById("events-list");

//get events data
const getEventsList = async (path) => {
  const response = await fetch(path, {
    mode: "cors",
  });
  return await response.json();
};

//creating row for each event
const renderEventRow = (event) => {
  const li = document.createElement("li");
  li.innerText = "Event Name: " + event.name + ", Event Date: " + event.date;
  return li;
};

//presenting all the events
const renderEventsList = (list, parent) => {
  for (let i = 0; i < list.length; i++) {
    parent.appendChild(renderEventRow(list[i]));
  }
};

//rendering the events using path (api) and element to keep it
const render = async (path, elem) => {
  try {
    const events = await getEventsList(path);
    renderEventsList(events, elem);
  } catch (elem) {
    console.error(elem);
    alert("Error");
  }
};

//rendering
render(serverApiPath, listWrapper);
