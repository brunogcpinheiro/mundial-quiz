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

function render(time, position) {
  const el = document.querySelectorAll("position");

  console.log(el);

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
  console.log(Object.entries(data)[2])

  const casa = Object.values(data)[2].time1;
  const fora = Object.values(data)[2].time2;

  console.log(casa, fora);

  if(Object.entries(data)[0][0] === "2012") {    
    if(casa == time) {
      render(time, "#home_club");
    } else if(fora == time) {
      render(time, "#away_club");
    } else {
      console.log("errou");
    }
  }
}

function formElement(selector, eventHandler) {
  const form = document.getElementById(selector);
  form.addEventListener("submit", eventHandler);
}

formElement("user-input", formEventHandler);
