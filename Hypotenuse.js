const input = document.querySelectorAll(".get-sides");
console.log(input[0] + "" + input[1]);
const buttonR = document.getElementById("buttonR");
buttonR.addEventListener("click", calculate);
const output = document.getElementById("output");

function squares(a, b) {
    return a * a + b * b;
}

function calculate() {
    const sumOfSquares = squares(Number(input[0].value), Number(input[1].value));

    const sqrt = Math.sqrt(sumOfSquares);

    output.innerHTML =
        "<h1> The hypotenuse of the triangel is  " + sqrt + " </h1>";
}