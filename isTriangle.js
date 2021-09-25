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
    let sum = calculateSum(
        Number(inputs[0].value),
        Number(inputs[1].value),
        Number(inputs[2].value)
    );

    if (sum == 180) {
        // output.innerText = "<h1>hello</h1>";
        output.innerHTML = "<h1>Triangle is correct!</h1>";
    } else {
        output.innerHTML = "<h1>Oops it is not correct!</h1>";
    }
}