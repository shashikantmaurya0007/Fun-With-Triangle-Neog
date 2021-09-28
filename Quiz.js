const quizForm = document.getElementById("quiz-form");
let sumbitButton = document.getElementById("submitB");
let output = document.getElementById("output");
const result = ["180", "Equ", "Iso", "Sca", "3"];

sumbitButton.addEventListener(
    "click",

    function getValues() {
        const formvalue = new FormData(quizForm);
        let index = 0;
        let score = 0;
        const arr = [];
        for (let value of formvalue.values()) {
            // console.log(value + "" + result[index]);
            console.log(value);
            arr.push(value);
            if (value === result[index]) {
                score++;
            }
            index++;
        }
        console.log(arr.length);
        if (arr.length == 0) {
            output.innerHTML =
                "<h3>*please atlease answer one quiz to get the score*</h3>";
        } else {
            output.innerHTML = "<h3> hey your score is" + score + "</h3>";
        }
    }
);

// console.log(formData.values());
// sumbitButton.addEventListener("click", getValues);
// console.log(formData);
// console.log(formData.values);