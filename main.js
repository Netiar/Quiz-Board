function check(){
    var a=0;    
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var result= document.getElementById("result");
    var quiz=document.getElementById("quiz");
    if (q1=="Coby") {a++}
    if (q2=="foosha village") {a++}
    if (q3=="alvinda") {a++}
    if (q4=="Zoro") {a++}    
    if (q5=="pirate hunter") {a++}

    quiz.style.display="none";

    
        }


//* Caclulate score*//
/*function scoreTest(answer, questions) {
    var score = (answer/questions) * 100;
    return score;
    }*/
    
    /*if(c<=3) {
     result.textContent='your result is $(c).watch one piece.'
    } else{
     result.textContent='your result is $(c).An emperor of the sea.'
    }*/


