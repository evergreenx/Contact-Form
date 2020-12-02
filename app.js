"use stirct ";

let url = "https://reqres.in/api/users?";

let textArea = document.getElementById("textarea");
let datePicker = document.getElementById("date-picker");

let submitBtn = document.getElementById("contact-submit");

let select = document.getElementById("contact");
let myForm = document.getElementById("myForm");
let modal = document.querySelector(".overlay");
let content = document.querySelector(".content");

console.log(myForm);

// myForm.addEventListener("submit", validateForm);

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // alert(datePicker.value + textArea.value + select.value);

  modal.style.display = "block";
  content.innerText = datePicker.value + textArea.value + select.value;

  myForm.reset();
});

fetch(url)
  .then((res) => {
    return res.json();
  })

  .then(function (data) {
    let contact = data.data; // Get the results

    console.log(data.data);

    for (x in contact) {
      var sel = document.createElement("option");
      sel.innerHTML = contact[x].first_name + " " + contact[x].last_name;
      sel.value = contact[x].first_name + " " + contact[x].last_name;
      document.getElementById("contact").appendChild(sel);
    }
  });
