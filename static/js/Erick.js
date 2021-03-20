let minus = document.getElementById("minus");
let number = document.getElementById("number");
let plus = document.getElementById("plus");
let res = document.getElementById("res");

plus.addEventListener("click", addup);

function addup() {
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
