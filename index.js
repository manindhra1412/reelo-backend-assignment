const express = require("express");
const bodyParser = require("body-parser");
const questionStore = require("./Store/questionStore.js");

const PORT=3000;
const app = express();
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("API is working fine!");
})

app.post('generate-paper',(req,res)=>{
    const {totalMarks}=req.body;
    if(!totalMarks) res.status(400).json({error:"Total marks not provided"});
    
    const questionPaper=generatePaper(totalMarks);
    res.json(questionPaper);
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});