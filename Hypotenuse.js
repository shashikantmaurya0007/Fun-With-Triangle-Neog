const input = document.querySelectorAll(".get-sides");
console.log(input[0] + "" + input[1]);
const buttonR = document.getElementById("buttonR");
buttonR.addEventListener("click", calculate);
const output = document.getElementById("output");

function squares(a, b) {
    return a * a + b * b;
}

function calculate() {
    const side1 = Number(input[0].value);
    const side2 = Number(input[1].value);
    if (side1 < 1 || side2 < 1) {
        alert("a and b needs to be a positive value and can't be empty");
        return;
    }
    const sumOfSquares = squares(side1, side2);

    const sqrt = Math.sqrt(sumOfSquares);

    output.innerHTML =
        "<h1> The hypotenuse of the triangel is  " + sqrt + " </h1>";
}