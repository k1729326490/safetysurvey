// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
                type: "radiogroup",
                name: "question1",
                title: "What is the most common cause of lifeguard injuries?",
                choices: [
                    "Slip and fall accidents", "Pool chemicals", "Sunburns", "Sharks"
                ],
                correctAnswer: "Slip and fall accidents"
            },
            {
                type: "radiogroup",
                name: "question2",
                title: "Which of the following is a primary responsibility of a lifeguard??",
                choices: [
                    "Selling snacks at the poolside", "Checking pool water pH levels", " Enforcing safety rules and regulations", "Providing swimming lessons"
                ],
                correctAnswer: " Enforcing safety rules and regulations"
            },
             {
                type: "radiogroup",
                name: "question3",
                title: "What is the recommended action if someone is drowning in a pool?",
                choices: [
                    "Jump into the water immediately", "Call out for other swimmers to help", " Throw a flotation device to the person", "Ignore the situation and continue observing"
                ],
                correctAnswer: " Throw a flotation device to the person"
            },
            {
                type: "radiogroup",
                name: "question4",
                title: "What should a lifeguard do if they suspect a swimmer has a spinal injury?",
                choices: [
                    "Assist the swimmer to the edge of the pool", "Pull the swimmer out of the water immediately", "Perform CPR on the swimmer", " Leave the swimmer in the water until medical professionals arrive"
                ],
                correctAnswer: "Pull the swimmer out of the water immediately"
            },
            {
                type: "radiogroup",
                name: "question5",
                title: "What is the purpose of regular lifeguard training sessions?",
                choices: [
                    "To learn how to perform advanced water acrobatics", "To improve physical fitness for personal health benefits", "To maintain and enhance lifeguard skills and knowledge", "To socialize and network with other lifeguards"
                ],
                correctAnswer: "To maintain and enhance lifeguard skills and knowledge"
            },
            {
                type: "radiogroup",
                name: "question6",
                title: "When should lifeguards typically conduct safety inspections of the swimming pool?",
                choices: [
                    "Only when there are no swimmers present", "At the end of their shift", "Throughout their shift at regular intervals", "Once a week on weekends"
                ],
                correctAnswer: "Throughout their shift at regular intervals"
            },
            {
                type: "radiogroup",
                name: "question7",
                title: "What is an essential item for a lifeguard to have on duty?",
                choices: [
                    "Sunglasses for personal style", "Sunscreen for personal protection", "Snacks for personal consumption", "Swim fins for personal training"
                ],
                correctAnswer: "Sunscreen for personal protection"
            },
            {
                type: "radiogroup",
                name: "question9",
                title: "What is an essential item for a lifeguard to have on duty?",
                choices: [
                    "Sunglasses for personal style", "Sunscreen for personal protection", "Snacks for personal consumption", "Swim fins for personal training"
                ],
                correctAnswer: "Sunscreen for personal protection"
            },
            {
                type: "radiogroup",
                name: "question10",
                title: "How much sunscreen should you apply?",
                choices: [
                    "teaspoon", "tablespoon", "quart", "gallon"
                ],
                correctAnswer: "tablespoon"
            }];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Lifeguard Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Lifeguard Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}
