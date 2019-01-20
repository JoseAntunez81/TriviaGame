

    // var correctAnswers = 0;
    // var incorrectAnswers = 0;
    // var unanswered = 0;
    // var number = 30;
    // var intervalId;
    // //Variables to hold the html classes
    
    var results = $("#results_container");
    var timer =  $("#time_remaining");
    
    //Array object for questions
    var questions = [{
    question: "What is your name?",
    answers:["Adam", "Ben", "Eddie"],
    correctAnswer: "Eddie",  
    },
    {
    question: "What is my favorite color",
    answers:["Black", "Red", "Blue"],
    correctAnswer: "Red",  
    },

    {
    question: "What car do I drive",
    answers:["BMW", "Audi", "Lexus"],
    correctAnswer: "Lexus",  
    },
  ];

  // Start game button
$("button").on('click', function(){

    for (var i = 0; i < questions.length; i++) {
        $("#question_container").append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
            $("#question_container").append('<p>' + questions[i].answers[j] + '</p>');
            } 
} 
});
// //Set and start the timer
// function run() {
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
    
// }

// function decrement() {
// number--;
// $("#time_remaining").html("<h2>" + number + "</h2>");
//    if (number === 0) {
//        stop();
//        alert("Time is up!");
       
//    } 
// }
// function stop() {
//     clearInterval(intervalId);
    
// }

// run();

//     if (answers[i] === correctAnswer) {
//         correctAnswers++;
//         alert("Correct!!!"); 
//     }else{
//         alert("WRONG!");
//         incorrectAnswers++;
//     }
//User selects an answer and only one
//Check if the answer is correct or not
//if the answer is correct win counter goes up
//if the answer is not correct lose counter goes up
//if timer runs out game ends
//when games ends show correct/incorrect answers and unanswered 


