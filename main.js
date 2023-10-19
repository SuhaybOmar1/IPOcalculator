// Program Title
console.log("hi");

// Button Clicker
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let a = +document.getElementById("client-in").value;
  let b = +document.getElementById("structure-in").value;

  // PROCESS
  let grade = Math.sqrt(a ** 2 + b ** 2);

  // OUTPUT
  document.getElementById("output").innerHTML = grade;
}
