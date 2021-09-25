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
        console.log("clicked");
        for (let value of formvalue.values()) {
            // console.log(value + "" + result[index]);
            if (value === result[index]) {
                score++;
            }
            index++;
        }
        output.innerText = "hey your score is " + score;
    }
);

// console.log(formData.values());
// sumbitButton.addEventListener("click", getValues);
// console.log(formData);
// console.log(formData.values);