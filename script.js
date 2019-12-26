(function() {
  'use strict';

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

function renderMatches() {
  const gameDIV = document.querySelector(".game");
  const gameEl = document.createElement("div");
  const titleEl = document.createElement("h3");
  const titleText = Object.keys(data);
  titleText.forEach(title => {
    titleEl.innerHTML = title
  });

  gameEl.innerHTML = `<p>Brasil</p><p class="away_club">Inglaterra</p>`;

  gameDIV.appendChild(titleEl);
  gameEl.classList.add(".time");
  gameDIV.appendChild(gameEl);
}

renderMatches();

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
  const years = Object.keys(data);
  
  years.forEach((year, i) => {
    compareAndRender(time, year, i);
  });
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
}());