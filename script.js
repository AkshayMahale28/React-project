let input = document.getElementById('inputText');
let count = document.getElementById('charCount');
let error = document.getElementById('error');

// Convert maxlength to a number
let maxlength = parseInt(input.getAttribute("maxlength"));

input.addEventListener("input", () => {
  let currLength = input.value.length;

  count.textContent = `${currLength}/${maxlength}`;

  if (currLength > maxlength) {
    error.classList.remove('hidden');
  } else {
    error.classList.add("hidden");
  }
});
