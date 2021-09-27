const inputs = document.querySelectorAll(".angle-input");
const output = document.getElementById("output");
const triangle_button = document.getElementById("isTriangleButton");
// triangle_button.addEventListener("click", isTriangle);
triangle_button.addEventListener("click", isTriangle);

// console.log(inputs[0].value, inputs[1].value, inputs[2].value);

function calculateSum(a, b, c) {
    return a + b + c;
}

function isTriangle() {
    const side1 = Number(inputs[0].value);
    const side2 = Number(inputs[1].value);
    const side3 = Number(inputs[2].value);
    if (side1 < 1 || side2 < 1 || side3 < 1) {
        alert("sides cant be negative and empty please give the correct input");
        return;
    }
    let sum = calculateSum(side1, side2, side3);

    if (sum == 180) {
        // output.innerText = "<h1>hello</h1>";
        output.innerHTML = "<h1>Triangle is correct!</h1>";
    } else {
        output.innerHTML = "<h1>Oops it is not correct!</h1>";
    }
}