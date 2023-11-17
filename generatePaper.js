const questionStore = require("./Store/questionStore.js");

function generatePaper(totalMarks,difficultyDistribution){
    const questionPaper=[];
    let remainingMarks=totalMarks;
    for(const difficulty in difficultyDistribution){
        const difficultyRatio = difficultyDistribution[difficulty];
        let difficultyMarks = Math.floor((totalMarks * difficultyRatio)/100);

        let filteredQuestion=questionStore.filter(q=>(q.difficulty === difficulty));
        const sortedQuestions=filteredQuestion.slice().sort((a, b) => a.marks - b.marks);
        // Adding questions to the question paper
        for (let i = 0; i < sortedQuestions.length; i++){
            const question = sortedQuestions[i];
            if(difficultyMarks>=question.marks){
                questionPaper.push(question);
                difficultyMarks-=question.marks;
            }else{
                break;
            }
        }
    }
    return questionPaper;
}

module.exports = generatePaper;