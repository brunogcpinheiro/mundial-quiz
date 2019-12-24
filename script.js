const data = {
  2012: {
    time1: "corinthians",
    time2: "chelsea"
  },
  2005: {
    time1: "liverpool",
    time2: "sao paulo"
  },
  1993: {
    time1: "sao paulo",
    time2: "milan"
  }
};

function render(time, position) {
  const el = document.querySelectorAll(position);

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
  compareAndRender(time, "1993", 0);
  compareAndRender(time, "2005", 1);
  compareAndRender(time, "2012", 2);
}

function compareAndRender(time, year, index) {
  if(Object.entries(data)[index][0] === year) {
    const home = Object.values(data)[index].time1;
    const away = Object.values(data)[index].time2;

    if(home === time) {
      render(time, `.home_${year}`);
    } else if(away === time) {
      render(time, `.away_${year}`);
    }
  } else {
    alert("Something goes wrong!");
  }
}

function formElement(selector, eventHandler) {
  const form = document.getElementById(selector);
  form.addEventListener("submit", eventHandler);
}

formElement("user-input", formEventHandler);
