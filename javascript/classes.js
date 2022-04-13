class Trainee {
    constructor(id){
        this.traineeId = id;
        this.traineeAnswers; // attempt
    }
    
    //Add attempt
    addAttempt(attempt){
        this.traineeAnswer += attempt;
    }
}

class Exam {
    constructor(id, questionsIDList, examDuration){
        this.examID = id; // int
        this.questionIDs = questionsIDList; // int[]
        this.examDuration = examDuration; // int in minutes?
    }

    // Add question
    
}

class Question {
    constructor(id, content, markValue, markSchemeID){ // Possible parameters for MarkScheme together
        this.questionID = id; // int
        this.questionContent = content; // String
        this.markValue = markValue; // int
        this.markSchemeID = markSchemeID; // int
    }
}

class MarkScheme {
    constructor(id, correctAnswer){
        this.markSchemeID = id; // int
        this.contentAnswer = correctAnswer; // String
    }
}