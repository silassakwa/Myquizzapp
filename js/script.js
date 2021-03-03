function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score+"/10" + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("Give an example of computer input Device?", ["Keybaord","Mouse","Trackball","All"],"All"),
    new Question("Computer can be classified according to the following ways except?", ["Purpose","Size","Data","Technology"],"Data"),
    new Question("Give the charactericts of RAM", ["Volatile","slow","Permanent","Large in physical size"],"Volatile"),
    new Question("Which of these is not an example of auxillary storage", ["Usb","Flash disk","Hard disk","CD"],"Hard disk"), 
    new Question("Which of the following is an example of a pointing Device", ["Trackball","jazz disk","Obr","Screen"],"Trackball"),
    new Question("Which of the following is the function of the operating system", ["Processor management","Error alert","Input output management","all"],"all"),
    new Question("which is the ideal Use of computers in research for data management", ["Used for data manipulation"," data capturing","to generate reports","All"],"All"),
    new Question("What is Data",["Processed information","None processed information","redable things","None"],"None processed information"),
    new Question("Which of the following is not an example of micro-computer", ["Desktop","Laptop","smartphone","Mini computer"],"Mini computer"),
    new Question("Give an example of An aplication software", ["barcode reader","Word processor","Calculator","None of the above"],"Word processor")
    


];
   
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();