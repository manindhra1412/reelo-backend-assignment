# Reelo Coding Assignment

Design and implement a Question Paper Generator backend-application

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation Steps](#installation-steps)
- [Running the Application](#running-the-application)
- [Generating Question Paper](#generating-question-paper)
- [File Structure](#file-structure)

## Getting Started

### Installation steps

```bash
git clone https://github.com/manindhra1412/reelo-backend-assignment.git
cd reelo-backend-assignment
npm install
```

### Running the Application

```bash
npm run start
or
npm run dev
```

### Generating Question Paper

```bash
To generate a question paper, make a POST request to the '/generate-paper' endpoint with the following JSON payload:

{
  "totalMarks": 100,
  "difficultyDistribution": {
    "Easy": 20,
    "Medium": 50,
    "Hard": 30
  }
}

or

{
  "totalMarks": 100,
  "difficultyDistribution": {
    "Easy": 20,
    "Medium": 50,
    "Hard": 30
  },
  "topicDistribution": {
    "Algebra": 30,
    "Waves": 30,
    "Geography": 40
  }
}


```

### File Structure

```plaintext
.
├── Store
│   ├── questionStore.js
├── index.js
├── generatePaper.js
├── node_modules/
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```
