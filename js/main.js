const user = {
  id: 6272673,
  name: "John",
  lastName: "Doe",
  email: "john.doe@mail.com",
  tags: ["sport", "it", "news"],
  sayHello() {
    console.log(`I am ${this.name}`);
  }
};

// ---------------------------------------------------------------------
// Praca z JSON

//
// const userJSON = JSON.stringify(user);
//
// console.log(userJSON);
//
// const json = '{"name":"Joseph","email":"joseph@mail.com","subscriber":false}';
//
// const joseph = JSON.parse(json);
// console.log(joseph.name);


// ---------------------------------------------------------------------
// Obsługa błędów

// const wrongJson = '{"name":Melchior","email":"joseph@mail.com","subscriber":false}';
//
// try {
//   const melchior = JSON.parse(wrongJson);
//   console.log(melchior);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }
//
// console.log("here!");


// ---------------------------------------------------------------------
// Faze przed wykonanie kodu

//
// console.log("This is my text!");
//
// cons myVar = "Hej!";


// ---------------------------------------------------------------------
// Praca z local storage


// localStorage.setItem("name", "Melchior");
// localStorage.setItem("theme", "dark");
//
// const config = {
//   name: "Melchior",
//   theme: "dark",
//   basket: [
//     {
//       id: 37373,
//       price: 12233,
//       count: 3
//     },
//     {
//       id: 35455673,
//       price: 133,
//       count: 1
//     }
//   ]
// };
//
// localStorage.setItem("config", JSON.stringify(config));
//
//
// const theme = localStorage.getItem("theme");
// console.log(theme);
// const configFromLS = localStorage.getItem("config");
// const parsedConfig = JSON.parse(configFromLS);
//
// console.log(parsedConfig.basket);
//
// localStorage.removeItem("theme");
// console.log(localStorage.getItem("theme"));
//
// localStorage.clear();


// ---------------------------------------------------------------------
// Zapisywanie danych z formularza do local storage

// const form = document.querySelector("#message-form");
// const output = document.querySelector("#output");
//
// const LOCALSTORAGE_KEY = "goit-message";
//
// form.addEventListener("submit", saveMessage);
//
// function saveMessage(event) {
//   event.preventDefault();
//   localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//   updateOutput();
//   form.reset();
// }
//
// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
// }



// ---------------------------------------------------------------------
// Użycie serwisu storage.js

// import Storage from "./storage.js";
//
// Storage.save("user", user);
// const myUser = Storage.load("user");
//
// console.log(myUser.id);

































