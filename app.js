import json from "./state.json" assert { type: "json" };

const states = document.getElementById("state");
const dis = document.getElementById("district");
const button = document.getElementById("button");

json.states.map((e) => {
  let optiob = document.createElement("option");
  optiob.value = [[e.districts], [e.state]];
  optiob.textContent = e.state;
  states.insertAdjacentElement("beforeend", optiob);
});

let currentState = "";

states.addEventListener("change", (e) => {
  console.log(states.value);

  let districts = states.value;
  let districtArr = districts.split(",");
  currentState = districtArr.pop();
  console.log(districtArr);

  while (dis.firstChild) {
    dis.firstChild.remove();
  }
  dis.innerHTML = "<option>choose one</option>";
  districtArr.map((e) => {
    let optiob = document.createElement("option");
    optiob.value = e;
    optiob.textContent = e;
    dis.insertAdjacentElement("beforeend", optiob);
  });
});

let currentDistrict = "";

dis.addEventListener("change", () => {
  currentDistrict = dis.value;
});

button.addEventListener("click", () => {
  document.getElementById(
    "para"
  ).textContent = `you choosen the state (${currentState}) and district as (${currentDistrict}}`;
});
