// const name = document.getElementById("Name");
// const user_email = document.getElementById("user_email");
// const Age = document.getElementById("Age");
// const form = document.getElementById("form");
// const cusradio = document.getElementById("custom-radio");

// // form.addEventListener("submit", (event) => {
// //    event.preventDefault();
// // });

// if (cusradiovalue === "") {
//   setError(cusradio, "Select an option");
// } else if (!isValidEmail(emailValue)) {
//   setError(cusradio, "Provide a valid email address");
// } else {
//   setSuccess(cusradio);
// }
// const submitButton = document.getElementById("submit");

// submitButton.addEventListezzzzzzzzzxner("click", () => {
//   window.alert("your request was sent successfully");
// });

// {
//     alert('please fill in the required fields,');

// } else {
//     this.submit();
// }

// document.getElementById(form),
//   addEventListener("submit", function (event) {
//     event.preventDefault();

//     const name = document.getElementById("Name").value;

//     const user_email = document.getElementById("user_email").value;

//     const Age = document.getElementById("Age").value;

//     const cusradio = document.getElementById("custom-radio").value;

//     if (name === "" || user_email === "" || Age === "" || cusradio === "") {
//       showModal("please fill in all required fields.");
//     } else {
//       this.submit;
//     }
//   });
document.getElementById(form),
  addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("Name").value;

    const user_email = document.getElementById("user_email").value;

    const Age = document.getElementById("Age").value;

    const cusradio = document.getElementById("custom-radio").value;

    if (name === "" || user_email === "" || Age === "" || cusradio === "") {
      showModal("please fill in all required fields.");
    } else {
      this.submit();
    }
  });
let popup = document.getElementById("popup");

function openpopup() {
  popup.classList.add("open-popup");
}
function closepopup() {
  popup.classList.remove("open-popup");
}
