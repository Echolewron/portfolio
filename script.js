const input_box = document.querySelector("input");
const guess_button = document.querySelector("button");
const result_para = document.querySelector(".result");

const correct_answer = Math.floor(Math.random() * 100) + 1;

let guess_count = 0;

guess_button.addEventListener("click", checkGuess);

function checkGuess() {
  let num = parseInt(input_box.value);

  if (isNaN(num)) {
    return;
  }

  if (num < correct_answer) {
    result_para.textContent = "Value is too low";
  } else if (num > correct_answer) {
    result_para.textContent = "Value is too high";
  } else {
    result_para.textContent = "Correct answer!";
  }

  input_box.value = "";
  input_box.focus();
}
