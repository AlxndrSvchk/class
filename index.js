const btnShowName = document.querySelector("#showName");

const malename = [
  "Allen",
  "Bob",
  "Carlton",
  "David",
  "Ernie",
  "Foster",
  "George",
  "Howard",
  "Ian",
  "Jeffery",
  "Kenneth",
  "Lawrence",
  "Michael",
  "Nathen",
  "Orson",
  "Peter",
  "Quinten",
  "Reginald",
  "Stephen",
  "Thomas",
  "Morris",
  "Victor",
  "Walter",
  "Xavier",
  "Charles",
  "Anthony",
  "Gordon",
  "Percy",
  "Conrad",
  "Quincey",
  "Armand",
  "Jamal",
  "Andrew",
  "Matthew",
  "Mark",
  "Gerald",
];

const lastname = [
  "Adams",
  "Bowden",
  "Conway",
  "Darden",
  "Edwards",
  "Flynn",
  "Gilliam",
  "Holiday",
  "Ingram",
  "Johnson",
  "Kraemer",
  "Hunter",
  "McDonald",
  "Nichols",
  "Pierce",
  "Sawyer",
  "Saunders",
  "Schmidt",
  "Schroeder",
  "Smith",
  "Douglas",
  "Ward",
  "Watson",
  "Williams",
  "Winters",
  "Yeager",
  "Ford",
  "Forman",
  "Dixon",
  "Clark",
  "Churchill",
  "Brown",
  "Blum",
  "Anderson",
  "Black",
  "Cavenaugh",
  "Hampton",
  "Jenkins",
  "Prichard",
];

console.log(malename);

class User {
  country = "Москва";
  colorSkin = "Белая";

  constructor(
    name = malename[Math.floor(Math.random() * malename.length)],
    surname = lastname[Math.floor(Math.random() * lastname.length)],
    birthday = Math.floor(Math.random() * (2000 - 1965) + 1965),
    salary = Math.floor(Math.random() * (20000 - 6000) + 6000)
  ) {
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
    this._salary = salary;
  }

  showName() {
    // console.log(`Имя: ${this.name}  Фамилия: ${this.surname}`);
    return `Name: ${this.name} ${this.surname}`;
  }
  showAge() {
    // console.log(`Возраст: ${2022 - this.birthday}`);
    return `Age: ${2022 - this.birthday}`;
  }
  get salary() {
    return this._salary;
  }

  set salary(value) {
    value > this._salary ? (this._salary = value) : this._salary;
  }
}

const person = new User();
person.salary = 12;

const dataNames = [];

for (let i = 0; i < 10; i++) {
  dataNames.push(new User());
}

btnShowName.addEventListener("click", (e) => {
  e.preventDefault();

  const content = document.createElement("div");
  content.classList.add("content");

  dataNames.map((user) => {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const h2 = document.createElement("h2");
    const h1 = document.createElement("h1");

    h1.innerHTML = user.showName();
    h2.innerHTML = user.showAge();
    h3.innerHTML = `Salary: ${user.salary} `;
    div.append(h1, h2, h3);
    content.append(div);
  });

  document.body.prepend(content);
});
