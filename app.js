let submit = document.querySelector(".submit-btn");
let messege = document.querySelector(".msg");
for (let i = 0; i < 5; i++) {
  let allInputs = document.querySelectorAll(".input-field")[i];

  submit.addEventListener("click", function () {
    if (allInputs.value == "") {
      messege.classList.remove("visible");
      messege.innerText = "Fill all the details before making an appointment!";
      messege.classList.add("visible-1");
    } else if (allInputs.value !== "") {
      messege.classList.remove("visible-1");
      messege.classList.add("visible");
      messege.innerText = "Appointment recieved successfully";
    }
  });
}

let menu = document.querySelector("#menu-btn");
let navigation = document.querySelector(".nav");

menu.addEventListener("click", function () {
  navigation.classList.toggle("pressed");
  menu.classList.toggle(".fa-bars");
  menu.classList.toggle("fa-times");
});

for (let i = 0; i < 6; i++) {
  allLinks = document.querySelectorAll(".nav-link")[i];
  allLinks.addEventListener("click", function () {
    navigation.classList.remove("pressed");
    menu.classList.toggle("fa-times");
  });
}
