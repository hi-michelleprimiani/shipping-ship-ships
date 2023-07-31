import { DockList } from "./DockList.js";
import { ShippingShipList } from "./ShippingShipList.js";
import { HaulersList } from "./HaulerList.js";

let dockDisplay = DockList();
let haulersDisplay = HaulersList();
let shippingShipsDisplay = ShippingShipList();

const dockHTML = document.querySelector("#DockList");
const haulersHTML = document.querySelector("#HaulerList");
const cargoHTML = document.querySelector("#ShippingShipList");

dockHTML.innerHTML = dockDisplay;
haulersHTML.innerHTML = haulersDisplay;
cargoHTML.innerHTML = shippingShipsDisplay;
