import { getDocks } from "./database.js";
import { getHaulers } from "./database.js";

export const DockList = () => {
  const docks = getDocks();

  docks.sort((a, b) => a.location.localeCompare(b.location));

  let docksHTML = "<ul>";
  for (const dock of docks) {
    docksHTML += `<li data-type="dock" data-id="${dock.id}" data-location="${dock.location}">${dock.location} can hold ${dock.volume} tons of cargo</li>`;
  }
  docksHTML += "</ul>";
  return docksHTML;
};

// when a dock is clicked - present a message to the user "The Shanghai, China dock is currently unloading Boaty McBoatface"
// {`${dock.location} is currently unloading ${ship.name}}
// if there is no hauler at the dock (if else) present "The Shanghai, China dock is currently unloading nothing"
// if there is more than one hauler at the dock present "The Shanghai, China dock is currently unloading Boaty McBoatface, Seawise Giant"

// variables to create - haulers, location, dock id. empty string for docked haulers

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "dock") {
    const haulers = getHaulers();
    const dockLocation = itemClicked.dataset.location;
    const dockId = itemClicked.dataset.id;
    let dockedHaulers = "";

    for (const hauler of haulers) {
      if (parseInt(dockId) === hauler.dockId) {
        dockedHaulers += hauler.name + " ";
      }
    }

    if (dockedHaulers != "") {
      window.alert(`The ${dock} dock is currently unloading ${dockedHaulers}`);
    } else {
      window.alert(`The ${dockLocation} dock is currently unloading nothing`);
    }
  }
});
