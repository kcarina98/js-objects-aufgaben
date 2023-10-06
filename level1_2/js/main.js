const person = {
  name: "Carina",
  age: "25",
  sagNameAlter: () => {
    alert(`Hallo ich heiße ${person.name} und bin ${person.age} Jahre alt.`);
    console.log(person.name);
    console.log(person.age);
  },
};

console.log(person.sagNameAlter());
