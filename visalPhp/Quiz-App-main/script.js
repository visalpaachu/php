// Quz data 

const quizData=[
    {
        question:"who is the best football player in the world?",
        options :['lionel messi','cristiano ronaldo','visal krishna k','neymar jr'],
        correct:2

    },

    {
        question:"1+1=?",
        options:['11 ','II','2','none of these'],
        correct:0
    },

    {
        question:"Who is our prime minister?",
        options:['aswin ar','me','indira gandhi','modiji'],
        correct:0
    },

    {

        question:"Who is the king of jungle?",
        options:['snake','dog','lion','sania'],
        correct:3
    },

    {
        question: "who is more funny?",
        options:['abhijith','sania','athul','ajaynath'],
        correct:2
    }

    
];

let currentQuizIndex=0;
let result=document.querySelector('.result');
console.log(result);
let nextbtn=document.querySelector('.next');
let score=0;


loadQuiz();

// Function to load or display Quiz;
function loadQuiz(){
    let quiz=quizData[currentQuizIndex];
    console.log(quiz);

    // setting the question
    document.getElementById('question').innerHTML=quiz.question;

    // setting the options 
    document.getElementById('option1').innerHTML=quiz.options[0];
    document.getElementById('option2').innerHTML=quiz.options[1];
    document.getElementById('option3').innerHTML=quiz.options[2];
    document.getElementById('option4').innerHTML=quiz.options[3];
    nextbtn.disabled=true;
    result.innerHTML=" ";
    
}


// function to submit the answer 
function checkAnswer(user_Selected_Answer){
    nextbtn.disabled=false; //when the user seleeeceted any answer ,the next button turn off the  the disabled state 
    // checking condition
    if(user_Selected_Answer===quizData[currentQuizIndex].correct){
        result.innerHTML="correct answer";
        // document.getElementById('option1').style.backgroundColor='green';
        score++;
    }else{
        score--;
        result.innerHTML="Oops wrong answer.";
        return;
    }
    
    currentQuizIndex++; //incrementing teh quiz index 
}


// this is to load the next question when the user clicks the next button 
nextbtn.addEventListener('click',()=>{
    if(currentQuizIndex<quizData.length){
        loadQuiz(); //load next quiz if the index is less than ttoal question length
        document.body.style.backgroundColor='white';
        document.body.style.color='black';

    }else{
        document.body.innerHTML=`QUIZ FINSHED <br> score:<b> ${score} / ${quizData.length}  </b>`;
        document.body.style.fontSize="1.8rem"
        document.body.style.color="#fff";
    }

})