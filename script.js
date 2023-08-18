class User {
  constructor(name, age, email, id) {
    this._name = name;
    this._age = age;
    this._email = email;
    this._id = id;
  }

  getName() {
    return this._name;
  }

  setName(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      throw new Error("The name field must be filled in.");
    }
  }

  getAge() {
    return this._age;
  }

  setAge(newAge) {
    if (newAge > -1) {
      this._age = newAge;
    } else {
      throw new Error("The age must be a positive number");
    }
  }

  getEmail() {
    return this._email;
  }

  setEmail(newEmail) {
    this._email = newEmail;
  }

  getId() {
    return this._id;
  }

  setId(newId) {
    this._id = newId;
  }
}

let idCount = 1;
let userList = [];

const userForm = document.getElementById("userForm");

function updateUserList() {
  const output = document.getElementById("output");

  const userDetails = userList
    .map((user) => {
      return `
      <div class="userDetails">
        <p class="detail">ID: ${user.getId()}</p>
        <p class="detail">Name: ${user.getName()}</p>
        <p class="detail">Age: ${user.getAge()}</p>
        <p class="detail">Email: ${user.getEmail()}</p>
      </div>
    `;
    })
    .join("");

  output.innerHTML = userDetails;
}

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");

  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const emailInput = document.getElementById("email");

  const user = new User();
  user.setName(nameInput.value);
  user.setAge(ageInput.value);
  user.setEmail(emailInput.value);
  user.setId(idCount);

  idCount++;

  userList.push(user);

  updateUserList();

  nameInput.value = "";
  ageInput.value = null;
  emailInput.value = "";
});
