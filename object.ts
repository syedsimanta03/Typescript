type Person = {
  name: string,
  age: number,
  fav: string[],
  role: [number, string]
}


const person: Person = {
  name: 'Pitbull',
  age: 30,
  fav: ['Bat', 'Ball'],
  role: [1, 'admin']
};

console.log(person.name);

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' }

const personTwo = {
  name: 'Simanta',
  age: 30,
  fav: ['Bat', 'Ball'],
  role2: Role.ADMIN
};