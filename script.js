const data = {
  2012: {
    time1: "corinthians",
    time2: "chelsea"
  },
  2005: {
    time1: "sao paulo",
    time2: "liverpool"
  },
  1993: {
    time1: "sao paulo",
    time2: "milan"
  }
};

function render(time) {
  const el = document.querySelectorAll("#club");

  el.forEach(e => {
    e.innerHTML = time;
  });
}

function userInputField(input) {
  return document.getElementById(input);
}

function formEventHandler(e) {
  e.preventDefault();
  let userInput = userInputField("user-input-field");

  if (compare(userInput.value)) {
    render(userInput.value);
  }

  reset(userInput);
}

function reset(input) {
  return (input.value = "");
}

function compare(time) {
  // CHECAR SE O TIME ESTA DENTRO DO OBJETO COM A KEY DO ANO RESPECTIVO
}

function formElement(selector, eventHandler) {
  const form = document.getElementById(selector);
  form.addEventListener("submit", eventHandler);
}

formElement("user-input", formEventHandler);
