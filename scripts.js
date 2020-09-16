document.addEventListener("DOMContentLoaded", function() {
  const my_input = document.getElementById("input");
  const my_button = document.getElementById("button");
  const my_result = document.getElementById("result");

  my_button.addEventListener("click", function() {
    const text = upper(my_input.value);

    my_result.innerText = text;
  });

  function upper(text) {
    return text.toUpperCase();
  }
});
