const express = require("express");
const bodyParser = require("body-parser");
const questionStore = require("./Store/questionStore.js");
const generatePaper=require("./generatePaper.js");

const PORT=3000;
const app = express();
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hit /generate-paper for generating question paper");
})

/* Api for generating question paper */
app.post('/generate-paper',(req,res)=>{
    const {totalMarks,difficultyDistribution}=req.body;
    if(!totalMarks || !difficultyDistribution) res.status(400).json({error:"Total marks or difficulty distribution is not provided"});
    
    const questionPaper=generatePaper(totalMarks,difficultyDistribution);
    res.json(questionPaper);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});