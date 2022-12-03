const prompt = require("prompt-sync")({sigint:true}); //Initialize prompt method
let studentMarks = (Number(prompt("Enter student marks: "))); //function for userinputting student marks
function gradeGenerator(studentMarks){
    if(studentMarks >=0 && studentMarks <= 100){
        switch (true) {
            case (studentMarks >= 79):
                grade = "A";
                break;
            case (studentMarks < 79 && studentMarks >= 60):
                grade = "B";
                break;
            case (studentMarks < 60 && studentMarks >= 49):
                grade = "C";
                break;
            case (studentMarks < 49 && studentMarks >= 40):
                grade = "D";
                break;
            case (studentMarks < 40):
                grade = "E";
                break;
            default:
                grade = "E";
                break;                
        }
        console.log (`Your grade is ${studentMarks} ${grade}`)   
    } else {
        console.error("Input should be between 0 and 100")
    }
}
return gradeGenerator(studentMarks)