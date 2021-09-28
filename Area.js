const input = document.querySelectorAll(".get-sides");
console.log(input[0] + "" + input[1]);
const buttonR = document.getElementById("buttonR");
buttonR.addEventListener("click", calculate);
const output = document.getElementById("output");

function area(a, b) {
    return (a * b) / 2;
}

function calculate() {
    const base = Number(input[0].value);
    const height = Number(input[1].value);
    if (base <= 0 || height <= 0) {
        alert(
            "Base and height needs to be a positive number and can't be left emty please enter the correct data"
        );
        return;
    }
    const area1 = area(base, height);

    output.innerHTML =
        "<h1> The Area of the triangel is  " + area1.toFixed(2) + " sq.Unit</h1>";
}