import { getDocks } from "./database.js";
import { getShippingShips, getHaulers } from "./database.js";

export const DockList = () => {
  const docks = getDocks();
  let docksHTML = "<ul>";
  for (const dock of docks) {
    docksHTML += `<li data-type="dock" data-id="${dock.id}" data-location="${dock.location}">Location: ${dock.location}</li>`;
  }
  docksHTML += "</ul>";
  return docksHTML;
};

// when a dock is clicked - present a message to the user "The Shanghai, China dock is currently unloading Boaty McBoatface"
// {`${dock.location} is currently unloading ${ship.name}}
// if there is no hauler at the dock (if else) present "The Shanghai, China dock is currently unloading nothing"
// if there is more than one hauler at the dock present "The Shanghai, China dock is currently unloading Boaty McBoatface, Seawise Giant"

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  const haulers = getHaulers();
  const dockLocation = itemClicked.dataset.location;
  const dockId = itemClicked.dataset.id;
  let dockedHaulers = "";

  for (const hauler of haulers) {
    if (dockId === hauler.dockId) {
      dockedHaulers += hauler.name + " ";
    }
  }

  if (itemClicked.dataset.location === "dock") {
    window.alert(`${dock.location} is currently unloading ${ship.name}`);
  } else if (dockedHaulers != "") {
    window.alert(
      `The ${dockLocation} dock is currently unloading ${dockedHaulers}`
    );
  } else {
    window.alert(`The ${dockLocation} dock is currently unloading nothing`);
  }
});
