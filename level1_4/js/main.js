let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere);
console.log(unsereHaustiere[0].names[1]); //// Nala
console.log(unsereHaustiere[1].names[2]); //// Droopy
console.log(unsereHaustiere[1].names); //// alle Hundenamen

unsereHaustiere[1].names = ["Goofy", "Rex"];
console.log(unsereHaustiere[1].names); //// alle Hundenamen geändert
