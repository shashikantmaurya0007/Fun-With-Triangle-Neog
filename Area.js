const input = document.querySelectorAll(".get-sides");
console.log(input[0] + "" + input[1]);
const buttonR = document.getElementById("buttonR");
buttonR.addEventListener("click", calculate);
const output = document.getElementById("output");

function area(a, b) {
    return (a * b) / 2;
}

function calculate() {
    const area1 = area(Number(input[0].value), Number(input[1].value));

    output.innerHTML = "<h1> The Area of the triangel is  " + area1 + " </h1>";
}