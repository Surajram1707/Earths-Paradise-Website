var myQuestions = [
    {
        question: "1. What is the national animal of Canada?",
        answers: {
            a: 'Jersey &nbsp;&nbsp;&nbsp;' ,
            b: 'North American beaver &nbsp;&nbsp;&nbsp;' ,
            c: 'Golden Eagle&nbsp;&nbsp;&nbsp;'
        },
        correctAnswer: 'b'
    },
    {
        question: "2. What is the national animal of Albania?",
        answers: {
            a: 'Albanian Dog&nbsp;&nbsp;&nbsp;',
            b: 'Sea Cow&nbsp;&nbsp;&nbsp;',
            c: 'Golden Eagle&nbsp;&nbsp;&nbsp;'
        },
        correctAnswer: 'c'
    },
    {
        question: "3. Which dog used to be sacred in China?",
        answers: {
            a: 'Albanian Dog&nbsp;&nbsp;&nbsp;',
            b: 'German Shepard&nbsp;&nbsp;&nbsp;',
            c: 'Pekingese&nbsp;&nbsp;&nbsp;'
        },
        correctAnswer: 'c'
    },
    {
        question: "4. What kind of animal is the largest living creature on Earth?",
        answers: {
            a: 'Blue Whale&nbsp;&nbsp;&nbsp;',
            b: 'Whale&nbsp;&nbsp;&nbsp;',
            c: 'Golden Eagle&nbsp;&nbsp;&nbsp;'
        },
        correctAnswer: 'a'
    },
    {
        question: "5. Which bird can swim but cannot fly?",
        answers: {
            a: 'Hen&nbsp;&nbsp;&nbsp;',
            b: 'Ostrich&nbsp;&nbsp;&nbsp;',
            c: 'Penguin&nbsp;&nbsp;&nbsp;'
        },
        correctAnswer: 'c'
    },

];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){

            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){

        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + ' &nbsp;&nbsp; Refresh to take up the quiz again';


    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}
