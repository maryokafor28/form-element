const name = document.getElementById("Name");
const user_email = document.getElementById("user_email");
const Age = document.getElementById("Age");
const form = document.getElementById("form");
const cusradio = document.getElementById("custom-radio");

// form.addEventListener("submit", (event) => {
//    event.preventDefault();
// });

if (cusradiovalue === "") {
  setError(cusradio, "Select an option");
} else if (!isValidEmail(emailValue)) {
  setError(cusradio, "Provide a valid email address");
} else {
  setSuccess(cusradio);
}
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  window.alert("your request was sent successfully");
});
