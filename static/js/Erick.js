let minus = document.getElementById("minus");
let number = document.getElementById("number");
let plus = document.getElementById("plus");
let res = document.getElementById("res");

plus.addEventListener("click", addUp);

function addUp() {
  let currentNum = number.innerHTML;
  number.innerHTML = Number(currentNum) + 1;
}

minus.addEventListener("click", minusDown);

function minusDown() {
  let currentNum = number.innerHTML;
  if (currentNum > 0) {
    number.innerHTML = Number(currentNum) - 1;
  }
}

res.addEventListener("click", mal);

function mal() {
  number.innerHTML = 0;
}
document.addEventListener("keydown", die);

function die(event) {
  if (event.key === "a" || event.key === "+") {
    addUp();
  } else if (event.key === "s" || event.key === "-") {
    minusDown();
  } else if (event.key === "r"|| event.key === "0") {
    mal();

  }


}
