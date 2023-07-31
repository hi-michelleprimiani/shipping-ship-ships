const database = {
  docks: [
    { id: 1, location: "Shanghai, China", volume: "43.5" },
    { id: 2, location: "Busan, South Korea", volume: "21.6" },
    { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
    { id: 4, location: "Antwerp, Belgium", volume: "12.04" },
    { id: 5, location: "Singapore", volume: "18.2" },
    { id: 6, location: "Dubai, United Arab Emirates", volume: "9.8" },
    { id: 7, location: "Hamburg, Germany", volume: "15.1" },
    { id: 8, location: "Los Angeles, USA", volume: "25.3" },
    { id: 9, location: "Long Beach, USA", volume: "20.5" },
    { id: 10, location: "Kaohsiung, Taiwan", volume: "16.9" },
    { id: 11, location: "Valencia, Spain", volume: "11.2" },
    { id: 12, location: "Piraeus, Greece", volume: "8.7" },
    { id: 13, location: "Genoa, Italy", volume: "13.6" },
    { id: 14, location: "Port Klang, Malaysia", volume: "17.9" },
    { id: 15, location: "Jebel Ali, UAE", volume: "10.3" },
  ],
  haulers: [
    {
      id: 1,
      name: "Pioneering Spirit",
      dockId: 4,
    },
    {
      id: 2,
      name: "Celestial Hauler",
      dockId: 6,
    },
    {
      id: 3,
      name: "Nebula Voyager",
      dockId: 7,
    },
    {
      id: 4,
      name: "WarpLift Transporter",
      dockId: 1,
    },
    {
      id: 5,
      name: "Quantum Express",
      dockId: 3,
    },
    {
      id: 6,
      name: "Hyperflux Haulstar",
      dockId: 8,
    },
    {
      id: 7,
      name: "Transcendence Transporter",
      dockId: 5,
    },
    {
      id: 9,
      name: "LunarHauler",
      dockId: 2,
    },
    {
      id: 10,
      name: "SolarWinds Carrier",
      dockId: 8,
    },
  ],
  shippingShips: [
    { id: 1, name: "StarGlider-IX", haulerId: 2 },
    { id: 2, name: "QuantumHauler", haulerId: 1 },
    { id: 3, name: "HyperNovaCarrier", haulerId: 1 },
    { id: 4, name: "AeroTechVoyager", haulerId: 5 },
    { id: 5, name: "MagLevMegaFreighter", haulerId: 5 },
    { id: 6, name: "NovaCarrier X-14", haulerId: 7 },
    { id: 7, name: "AstroFreighter Prime", haulerId: 6 },
    { id: 8, name: "WarpLift Transporter", haulerId: 9 },
  ],
};

export const getDocks = () => {
  return database.docks.map((docks) => ({ ...docks }));
};

export const getHaulers = () => {
  return database.haulers.map((haulers) => ({ ...haulers }));
};

export const getShippingShips = () => {
  return database.shippingShips.map((shippingShips) => ({ ...shippingShips }));
};
