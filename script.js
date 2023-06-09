document.addEventListener("DOMContentLoaded", function () {
  var winput = document.getElementById("winput");
  var hinput = document.getElementById("hinput");
  var calculateBtn = document.getElementById("calculate");
  var resultInput = document.getElementById("result");
  var resetBtn = document.getElementById("reset");

  calculateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    weightValue = winput.value;
    heightValue = hinput.value;
    if (weightValue == 0) {
      alert("Weight not empty");
      return;
    }
    if (heightValue == 0) {
      alert("Height not empty");
      return;
    }
    var resultValue = (
      weightValue /
      ((heightValue / 100) * (heightValue / 100))
    ).toFixed(1);
    resultInput.value = resultValue;
  });

  resetBtn.addEventListener("click", function (event) {
    event.preventDefault();
    winput.value = "";
    hinput.value = "";
    resultInput.value = "";
  });
});
