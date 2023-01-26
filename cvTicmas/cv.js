document.getElementById('btn1').onclick = function() {
    targetDiv = document.getElementById("int1");
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
        document.getElementById('btn1').innerHTML = "Ver intereses"
      } else {
        targetDiv.style.display = "block";
        document.getElementById('btn1').innerHTML = "Ocultar intereses"
      }
}