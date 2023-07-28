import { getHaulers } from "./database.js";

export const HaulersList = () => {
  const haulers = getHaulers();
  let haulersHTML = "<ul>";
  for (const hauler of haulers) {
    haulersHTML += `<li>Id: ${hauler.id}, Name: ${hauler.name}, Dock Id: ${hauler.dockId}</li>`;
  }
  haulersHTML += "</ul>";
  return haulersHTML;
};
