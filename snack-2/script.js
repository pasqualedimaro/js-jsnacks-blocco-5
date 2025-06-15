const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// uso map per estrarre i nomi e poi stamparli
const names = people.map(person => person.name);
console.log(`'${names[0]}, ${names[1]}, ${names[2]}'`);

// Risultato: 'Paolo', 'Giulia', 'Marco'