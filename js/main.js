const ques = ["Fav Actor", "Fav Actress", "Fav Music Director", "Fav Singer"];
const question = document.getElementById("question");
const input = document.getElementsByTagName("input");
let ans = [];
let count = 0;

let index = 0;
question.innerHTML = ques[index];
const acc = document.getElementsByClassName("accept");
const dec = document.getElementsByClassName("decline");
acc[0].addEventListener("click", () => {
  console.log(input.value);
  if (input[0].value === "" || input[0].value === null) {
    alert("You must enter Something to this question");
  } else {
    index++;
    if (index > ques.length - 1) {
    
    } else {
      count++;
      question.innerHTML = ques[index];
      ans.push(input.value);
      input[0].value = "";
    }
  }
});

dec[0].addEventListener("click", () => {
  index++;
  if (index > ques.length - 1) {
    // alert("This is the last question");
    // index++;
  } else {
    question.innerHTML = ques[index];
    input[0].value = "";
  }
});

if(index==ques.length && count<(ques.length)/2){
    alert("You Decline half of the questions");
}