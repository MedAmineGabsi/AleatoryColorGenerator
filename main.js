let hex = document.querySelector("#hex");
let instruction = document.querySelector("span");

const getColor = () => {
  let color = "#" + Math.random().toString(16).slice(2, 8);

  document.querySelector("body").style.backgroundColor = color;
  document.querySelector("#hex").innerHTML = color;
  document.querySelector("#hex").style.color = "white";
  document.querySelector("span").innerHTML = "";
};

document.body.onkeyup = (e) => {
  if (e.keyCode === 32) {
    getColor();
  }
};
