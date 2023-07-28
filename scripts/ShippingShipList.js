import { getShippingShips } from "./database.js";

export const ShippingShipList = () => {
  const shippingShips = getShippingShips();
  let shipsHTML = "<ul>";
  for (const ships of shippingShips) {
    shipsHTML += `<li>Id: ${ships.id}, Name: ${ships.name}, Hauler Id: ${ships.dockId}</li>`;
  }
  shipsHTML += "</ul>";
  return shipsHTML;
};
