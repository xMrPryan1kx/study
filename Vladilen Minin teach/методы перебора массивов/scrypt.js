const people = [
  { name: "Алексей", age: 26, budget: 40000 },
  { name: "Максим", age: 27, budget: 30000 },
  { name: "Андрей", age: 24, budget: 20000 },
  { name: "Ольга", age: 15, budget: 10000 },
  { name: "Елена", age: 22, budget: 15000 }
];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// for (const person of people) {
//     console.log(person);
// }

//ForEach

// ES 5
// people.forEach(function(person, index, pArr) { // принимает до 3 параметров (person- элемент массива, index - номер элемента, pArr - Сам массив)
//     console.log(person);
//     console.log(index);
//     console.log(pArr);
// })

// ES 6
// people.forEach(person => console.log(person));

// Map

// const newPeople = people.map(person => `${person.name} (${person.age})`)
// console.log(newPeople);

//                              Filter

// const adults = people.filter(person => person.age >= 18)
// console.log(adults);

//                              Reduce

// const amount = people.reduce((total, person) => total + person.budget, 0);

// console.log(amount);

//                              Find

// const alex = people.find(person => person.name === 'Алексей');
// console.log(alex);
//

//                              findIndex

// const alexIndex = people.findIndex(person => person.name === 'Алексей');
// console.log(alexIndex);



//                              Пример

const amount = people
  .filter(person => person.budget > 3000)
  .map(person => {
    return {
      info: `${person.name} (${person.age})`,
      budget: Math.sqrt(person.budget)
    };
  })
  .reduce( (total, person) => total + person.budget, 0)

  console.log(amount);
