const ul_1 = document.querySelector(".option1");
const ul_2 = document.querySelector(".option2");
const ul_3 = document.querySelector(".option3");
const ul_4 = document.querySelector(".option4");
const ul_5 = document.querySelector(".option5");
const ul_6 = document.querySelector(".option6");
const ul_7 = document.querySelector(".option7");
const ul_8 = document.querySelector(".option8");
const ul_9 = document.querySelector(".option9");
const ul_10 = document.querySelector(".option10");
const ul_11 = document.querySelector(".option11");
const ul_12 = document.querySelector(".option12");
const ul_13 = document.querySelector(".option13");
const ul_14 = document.querySelector(".option14");
const ul_15 = document.querySelector(".option15");
const ul_16 = document.querySelector(".option16");
const ul_17 = document.querySelector(".option17");
const ul_18 = document.querySelector(".option18");
const ul_19 = document.querySelector(".option19");
const ul_20 = document.querySelector(".option20");





// consts for Loved One questions

const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const q5 = document.querySelector(".q5");
const q6 = document.querySelector(".q6");
const q7 = document.querySelector(".q7");
const q8 = document.querySelector(".q8");
const q9 = document.querySelector(".q9");
const q10 = document.querySelector(".q10");
const q11 = document.querySelector(".q11");
const q12 = document.querySelector(".q12");
const q13 = document.querySelector(".q13");
const q14 = document.querySelector(".q14");
const q15 = document.querySelector(".q15");
const q16 = document.querySelector(".q16");
const q17 = document.querySelector(".q17");
const q18 = document.querySelector(".q18");
const q19 = document.querySelector(".q19");
const q20 = document.querySelector(".q20");


// consts for addict questions
const q1Addict = document.querySelector(".q1Addict");
const q2Addict = document.querySelector(".q2Addict");
const q3Addict = document.querySelector(".q3Addict");
const q4Addict = document.querySelector(".q4Addict");
const q5Addict = document.querySelector(".q5Addict");
const q6Addict = document.querySelector(".q6Addict");
const q7Addict = document.querySelector(".q7Addict");
const q8Addict = document.querySelector(".q8Addict");
const q9Addict = document.querySelector(".q9Addict");
const q10Addict = document.querySelector(".q10Addict");
const q11Addict = document.querySelector(".q11Addict");
const q12Addict = document.querySelector(".q12Addict");
const q13Addict = document.querySelector(".q13Addict");
const q14Addict = document.querySelector(".q14Addict");
const q15Addict = document.querySelector(".q15Addict");
const q16Addict= document.querySelector(".q16Addict");
const q17Addict = document.querySelector(".q17Addict");
const q18Addict = document.querySelector(".q18Addict");
const q19Addict = document.querySelector(".q19Addict");
const q20Addict = document.querySelector(".q20Addict");


const survey = document.querySelector(".questionnaire");
const end = document.querySelector(".end");




// loved one question controls


//  question 1

ul_1.addEventListener("click", function() {
  q1.style.display = "none";
  q2.style.display = "block";

});

 //  question 2

ul_2.addEventListener("click", function() {
  q2.style.display = "none";
  q3.style.display = "block";

});

//  question 3

ul_3.addEventListener("click", function() {
  q3.style.display = "none";
  q4.style.display = "block";

});

//  question 4

ul_4.addEventListener("click", function() {
  q4.style.display = "none";
  q5.style.display = "block";

});
//  question 5

ul_5.addEventListener("click", function() {
  q5.style.display = "none";
  q6 .style.display = "block";

});
//  question 6

ul_6.addEventListener("click", function() {
  q6.style.display = "none";
  q7 .style.display = "block";

});
//  question 7

ul_7.addEventListener("click", function() {
  q7.style.display = "none";
  q8 .style.display = "block";

});
//  question 8

ul_8.addEventListener("click", function() {
  q8.style.display = "none";
  q9 .style.display = "block";

});
//  question 9

ul_9.addEventListener("click", function() {
  q9.style.display = "none";
  q10 .style.display = "block";

});
//  question 10

ul_10.addEventListener("click", function() {
  q10.style.display = "none";
  q11 .style.display = "block";

});
//  question 11

ul_11.addEventListener("click", function() {
  q11.style.display = "none";
  q12 .style.display = "block";

});
//  question 12

ul_12.addEventListener("click", function() {
  q12.style.display = "none";
  q13 .style.display = "block";

});
//  question 13

ul_13.addEventListener("click", function() {
  q13.style.display = "none";
  q14 .style.display = "block";

});
//  question 14

ul_14.addEventListener("click", function() {
  q14.style.display = "none";
  q15 .style.display = "block";

});
//  question 15

ul_15.addEventListener("click", function() {
  q15.style.display = "none";
  q16 .style.display = "block";

});
//  question 16

ul_16.addEventListener("click", function() {
  q16.style.display = "none";
  q17 .style.display = "block";

});
//  question 17

ul_17.addEventListener("click", function() {
  q17.style.display = "none";
  q18 .style.display = "block";

});
//  question 18

ul_18.addEventListener("click", function() {
  q18.style.display = "none";
  q19 .style.display = "block";

});
//  question 19

ul_19.addEventListener("click", function() {
  q19.style.display = "none";
  q20 .style.display = "block";

});
//  question 20 (end)

ul_20.addEventListener("click", function() {
  q20.style.display = "none";
  end.style.display = "block";
  var timer = setTimeout(function() {
            window.location='loading-POA-LovedOne.html'
        }, 5000);


});








// addict question controls




//  question 1

ul_1.addEventListener("click", function() {
  q1Addict.style.display = "none";
  q2Addict.style.display = "block";

});

 //  question 2

ul_2.addEventListener("click", function() {
  q2Addict.style.display = "none";
  q3Addict.style.display = "block";

});

//  question 3

ul_3.addEventListener("click", function() {
  q3Addict.style.display = "none";
  q4Addict.style.display = "block";

});

//  question 4

ul_4.addEventListener("click", function() {
  q4Addict.style.display = "none";
  q5Addict.style.display = "block";

});
//  question 5

ul_5.addEventListener("click", function() {
  q5Addict.style.display = "none";
  q6Addict.style.display = "block";

});
//  question 6

ul_6.addEventListener("click", function() {
  q6Addict.style.display = "none";
  q7Addict.style.display = "block"
});
//  question 7

ul_7.addEventListener("click", function() {
  q7Addict.style.display = "none";
  q8Addict.style.display = "block";

});
//  question 8

ul_8.addEventListener("click", function() {
  q8Addict.style.display = "none";
  q9Addict.style.display = "block";

});
//  question 9

ul_9.addEventListener("click", function() {
  q9Addict.style.display = "none";
  q10Addict.style.display = "block";

});
//  question 10

ul_10.addEventListener("click", function() {
  q10Addict.style.display = "none";
  q11Addict.style.display = "block";

});
//  question 11

ul_11.addEventListener("click", function() {
  q11Addict.style.display = "none";
  q12Addict.style.display = "block";

});
//  question 12

ul_12.addEventListener("click", function() {
  q12Addict.style.display = "none";
  q13Addict.style.display = "block";

});
//  question 13

ul_13.addEventListener("click", function() {
  q13Addict.style.display = "none";
  q14Addict.style.display = "block";

});
//  question 14

ul_14.addEventListener("click", function() {
  q14Addict.style.display = "none";
  q15Addict.style.display = "block";

});
//  question 15

ul_15.addEventListener("click", function() {
  q15Addict.style.display = "none";
  q16Addict.style.display = "block";

});
//  question 16

ul_16.addEventListener("click", function() {
  q16Addict.style.display = "none";
  q17Addict.style.display = "block";

});
//  question 17

ul_17.addEventListener("click", function() {
  q17Addict.style.display = "none";
  q18Addict.style.display = "block";

});
//  question 18

ul_18.addEventListener("click", function() {
  q18Addict.style.display = "none";
  q19Addict.style.display = "block";

});
//  question 19

ul_19.addEventListener("click", function() {
  q19Addict.style.display = "none";
  q20Addict.style.display = "block";

});
//  question 20 (end)

ul_20.addEventListener("click", function() {
  q20Addict.style.display = "none";
  end.style.display = "block";
  var timer = setTimeout(function() {
            window.location='loading-POA-LovedOne.html'
        }, 5000);


});
