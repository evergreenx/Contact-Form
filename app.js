"use stirct ";
let url = "https://reqres.in/api/users?page=1";

let textArea = document.getElementById("textarea");
let datePicker = document.getElementById("date-picker");

let submitBtn = document.getElementById("contact-submit");

let select = document.getElementById("contact");
let myForm = document.getElementById("myForm");
let modal = document.querySelector(".overlay");
let content = document.querySelector(".content");
let closeModal = document.querySelector(".close");

// submit eventlistener

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  modal.style.display = "block";

  if (textArea.value == "") {
    textArea.value = "No comment";
  }

  let temp = `
  <p> Contact: ${select.value} </p> 
  <p> Date: ${datePicker.value} </p> 
   <p> Comment: ${textArea.value} <p>
   `;
  content.innerHTML = temp;

  myForm.reset();
});
// submit eventlistener end

// close Modal
closeModal.addEventListener("click", (e) => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// fetch contact from api
const populateSelect = () => {
  fetch(url)
    .then((res) => {
      return res.json();
    })

    .then(function (data) {
      let contact = data.data; // Get the results

      for (x in contact) {
        var sel = document.createElement("option");
        sel.innerHTML = contact[x].first_name + " " + contact[x].last_name;
        sel.value = contact[x].first_name + " " + contact[x].last_name;
        document.getElementById("contact").appendChild(sel);
      }
    });
};
populateSelect();
