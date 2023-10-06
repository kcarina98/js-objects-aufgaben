let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

const nameArr = [];
console.log(nameArr);
const priceArr = [];
console.log(priceArr);
const changeArr = [];
console.log(changeArr);

//- mit forEach()
edelMetallPreise.forEach((elt) => nameArr.push(elt.name));
edelMetallPreise.forEach((elt) => priceArr.push(elt.preiseGramEuro));
edelMetallPreise.forEach((elt) => changeArr.push(elt.veraenderung));

// - mit map()
const nameArr2 = edelMetallPreise.map(function (elt) {
  return elt.name;
});
console.log(nameArr2);

const priceArr2 = edelMetallPreise.map(function (elt) {
  return elt.preiseGramEuro;
});
console.log(priceArr2);

const changeArr2 = edelMetallPreise.map(function (elt) {
  return elt.veraenderung;
});
console.log(changeArr2);

let tabelle =
  "<table> <tr> <th>Name</th><th>PreiseGrammEuro</th> <th>Veränderungen</th> </tr>";
for (let i = 0; i < edelMetallPreise.length; i++) {
  tabelle += `<tr> <td>${nameArr[i]}</td> <td>${priceArr[i]}</td> <td>${changeArr[i]}</td> </tr>`;
}

document.body.innerHTML += tabelle + "</table>";
