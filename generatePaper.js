const questionStore = require("./Store/questionStore.js");

function generatePaper(totalMarks, difficultyDistribution, topicDistribution) {
    const questionPaper = [];

    if (topicDistribution) {
        for (const difficulty in difficultyDistribution) {
            const difficultyRatio = difficultyDistribution[difficulty];

            for (const topic in topicDistribution) {
                const topicRatio = topicDistribution[topic];
                const combinedRatio = (difficultyRatio * topicRatio) / 100;

                let combinedMarks = Math.floor(totalMarks * combinedRatio);

                let filteredQuestion = questionStore.filter(q => q.difficulty === difficulty && q.topic === topic);
                const sortedQuestions = filteredQuestion.slice().sort((a, b) => a.marks - b.marks);

                for (let i = 0; i < sortedQuestions.length; i++) {
                    const question = sortedQuestions[i];
                    if (combinedMarks >= question.marks) {
                        questionPaper.push(question);
                        combinedMarks -= question.marks;
                    } else {
                        break;
                    }
                }
            }
        }
    } else {
        // Proceed with only difficultyDistribution if topicDistribution is not given
        for (const difficulty in difficultyDistribution) {
            const difficultyRatio = difficultyDistribution[difficulty];
            let difficultyMarks = Math.floor((totalMarks * difficultyRatio) / 100);

            let filteredQuestion = questionStore.filter(q => q.difficulty === difficulty);
            const sortedQuestions = filteredQuestion.slice().sort((a, b) => a.marks - b.marks);

            for (let i = 0; i < sortedQuestions.length; i++) {
                const question = sortedQuestions[i];
                if (difficultyMarks >= question.marks) {
                    questionPaper.push(question);
                    difficultyMarks -= question.marks;
                } else {
                    break;
                }
            }
        }
    }

    return questionPaper;
}

module.exports = generatePaper;