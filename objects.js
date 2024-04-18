// question1

function getAdultNames(people) {

  const adults = people.filter(person => person.age >= 18);
  const adultNames = adults.map(person => person.name);

  return adultNames;
}


const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];

const adultNamesArray = getAdultNames(people);
console.log(adultNamesArray); 

// question2

function groupByCategory(products) {
  const groupedCategories = {};

  for (const product of products) {
    const { name, price, category } = product;

    if (!groupedCategories[category]) {
      groupedCategories[category] = [];
    }

    groupedCategories[category].push({ name, price });
  }

  return groupedCategories;
}


const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Headphones', price: 80, category: 'Electronics' },
  { name: 'Shoes', price: 60, category: 'Clothing' },
];
console.log(groupByCategory(products))

// question3

function getHighscoringStudents(students) {
  return students
    .filter(student => {
      const averageScore = student.scores.reduce((sum, score) => sum + score) / student.scores.length;
      return averageScore >= 85;
    })
    .map(student => student.name);
}


const students = [
  { name: 'John', scores: [90, 80, 85] },
  { name: 'Jane', scores: [95, 92, 88] },
  { name: 'Jim', scores: [70, 80, 75] },
  { name: 'Jill', scores: [85, 90, 84] },
];

const highscoringNames = getHighscoringStudents(students);
console.log(highscoringNames);


// question4

const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  age: function() {
    const currentAge = 2024 - this.year
   console.log( currentAge);
  }
};


car.age();
