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
};

export const getDocks = () => {
  return database.docks.map((docks) => ({ ...docks }));
};
