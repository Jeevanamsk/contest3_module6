const filterButton = document.getElementById("filter-button");
const professionDropdown = document.getElementById("profession");
const addUserForm = document.getElementById("add-user-form");
const userList = document.getElementById("user-list");

// User list
const users = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
  { id: 4, name: "alpha", age: "18", profession: "developer" },
  { id: 5, name: "jane", age: "20", profession: "admin" },
  { id: 6, name: "jill", age: "19", profession: "admin" }
];

filterButton.addEventListener("click", () => {
  // Get the selected profession
  const profession = professionDropdown.value;

  // Filter the cards by profession
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (card.dataset.profession === profession) {
      card.style.display = "block";
      div.innerText = card.id + ".  Name:" + card.name + "    Profession:" + card.profession + "    Age:" + card.age;
            userList.append(div);
    } else {
      card.style.display = "none";
    }
  });

  // If no profession is selected, show an alert
  if (!profession) {
    alert("Please select a profession before clicking the button.");
  }
});

addUserForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the form values
  
  const name = document.getElementById("name").value;
  const profession = document.getElementById("profession").value;
  const age = document.getElementById("age").value;

  // Add the user to the list
  const user = { name, profession, age };
  users.push(user);

  // Render the user in the UI
  const userElement = document.createElement("div");
  userElement.classList.add("user");
  userElement.innerHTML = `
    
    <div class="name">Name: ${name}</div>
    <div class="profession">Profession: ${profession}</div>
    <div class="age">age: ${age}</div>
  `;
  userList.appendChild(userElement);

  // Clear the form
  addUserForm.reset();

  // Log the user list to the console
  console.log(users);
});






















