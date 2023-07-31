import { getShippingShips, getHaulers } from "./database.js";

export const ShippingShipList = () => {
  const shippingShips = getShippingShips();
  let shipsHTML = "<ul>Shipping Ships";
  for (const ship of shippingShips) {
    shipsHTML += `<li data-id="${ship.id}" data-haulerid="${ship.haulerId}" data-name="${ship.name}" data-type="shippingShips">${ship.name}</li>`;
  }
  shipsHTML += "</ul>";
  return shipsHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  // Was a shipping ship list item clicked?
  if (itemClicked.dataset.type === "shippingShips") {
    // Get the haulerId value of the shipping ship clicked
    const haulerId = itemClicked.dataset.haulerid;
    // Define a default object for the found hauler
    let haulingShip = { name: "" };
    // Iterate the array of hauler objects
    const haulers = getHaulers();
    for (const ship of haulers) {
      // Does the haulerId foreign key match the id of the current hauler?
      if (parseInt(haulerId) === ship.id) {
        // Reassign the value of `haulingShip` to the current hauler
        haulingShip = { name: `${ship.name}` };
        window.alert(
          `${itemClicked.dataset.name} is being hauled by ${haulerId}`
        );
      }
    }
    // Show an alert to the user with this format...
    // Palais Royal is being hauled by Seawise Giant
  }
});
