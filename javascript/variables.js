let questionArray = new Array(
    new Question(1, "When was the first computer invented?", 1, 1),
    new Question(2, "What was the name of the first computer invented?", 1, 2),
    new Question(3, "Who is known as the father of computers?", 1, 3),
    new Question(4, "What was the first mass-produced computer?", 1, 4),
    new Question(5, "What is Computer programming?", 2, 5),
    new Question(6, "How does programming work?", 3, 6),
    new Question(7, "When a syntax error occurs?", 2, 7),
    new Question(8, "When a runtime error occurs?", 3, 8),
    new Question(9, " What are reserved words?", 1, 9),
);

let markSchemeArray = new Array(
    new MarkScheme(1, '1943'),
    new MarkScheme(2, 'Electronic Numerical Integrator and Computer (ENIAC)'),
    new MarkScheme(3, 'Charles Babbage'),
    new MarkScheme(4, 'IBM 650'),
    new MarkScheme(5, 'Computer Programming is also known as programming or coding. Programming is a process which includes processes such as coding, maintaining, updating, debugging, writing, designing (algorithm), etc'),
    new MarkScheme(6, 'Programming contains a set of instructions for the computer to perform different tasks. In fact, those instructions are executable commands, each having a different purpose'),
    new MarkScheme(7, 'A syntax error occurs when the program violates one or more grammatical rules of the programming language. These errors are detected at compile time, i.e., when the translator (compiler or interpreter) attempts to translate the program'),
    new MarkScheme(8, 'A runtime error occurs when the computer is directed to perform an illegal operation by the program such as dividing a number by zero. Runtime errors are the only errors which are displayed immediately during the execution of a program. When these errors occur, the computer stops the execution of the programming and can display a diagnostic message that will help in locating the error'),
    new MarkScheme(9, 'Reserved words or keywords are the words, which have predefined meanings. They have predefined uses and cannot be used or redefined for any other purpose in a programming language'),
);

let traineeAnswers;
if (JSON.parse(sessionStorage.getItem('traineeAnswers') == null)){
    traineeAnswers = new Array(
        "1980",
        "Programming follows a set of instructions that the computer follows...",
        "Syntax error occurs when a code if not properly formatted",
    );
}
else{
    traineeAnswers = JSON.parse(sessionStorage.getItem('traineeAnswers'));
}

let marksGivenArray;
if (JSON.parse(sessionStorage.getItem('markResultArray') == null)){
    marksGivenArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
else{
    marksGivenArray = JSON.parse(sessionStorage.getItem('markResultArray'));
}