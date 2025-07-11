

    const mainSection = document.querySelector("#body");
const form = document.querySelector("form");
const input = document.querySelector("form input");
const button = document.querySelector("#submit");
const successMsg = document.querySelector("#success-msg");
const emailSpan = document.querySelector("#email");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/i;

button.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission

  const email = input.value.trim();

  clearError();

  if (email === "") {
    showError("Email is required");
    return;
  }

  if (!emailRegex.test(email)) {
    showError("Valid email required");
    return;
  }

  mainSection.style.display = "none";
  successMsg.style.display = "block";
  emailSpan.textContent = email;
});

const dismissButton = document.querySelector("#disabled");

dismissButton.addEventListener("click", () => {
  successMsg.style.display = "none";
  mainSection.style.display = "flex";
  input.value = "";
  clearError();
});

function showError(message) {
  let errorMsg = document.querySelector("form p");
  if (!errorMsg) {
    errorMsg = document.createElement("p");
    errorMsg.style.color = "red";
    form.appendChild(errorMsg);
  }
  errorMsg.textContent = message;
  input.classList.add("error");
};

function clearError() {
  const errorMsg = document.querySelector("form p");
  if (errorMsg) {
    errorMsg.textContent = "";
  }
  input.classList.remove("error");
};
