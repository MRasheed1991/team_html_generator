const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateHTML = require("./src/utils/generateHTML");
const team = [];
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const init = async () => {
  const answers = await inquirer.prompt([
    {
      name: "jobType",
      type: "list",
      message: "what is the job title of the employee",
      choices: ["Engineer", "Intern", "Manager", "None"],
    },
  ]);
  if (answers.jobType === "Engineer") {
    renderEngineer();
  } else if (answers.jobType === "Intern") {
    renderIntern();
  } else if (answers.jobType === "Manager") {
    renderManager();
  } else {
    writeFile();
  }
};

const renderEngineer = async () => {
  const engineerAnswers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your engineer's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your engineer's Email",
    },
    {
      type: "input",
      name: "github",
      message: "What is your engineer's gitHub username?",
    },
  ]);
  const engineer = new Engineer(
    engineerAnswers.name,
    engineerAnswers.id,
    engineerAnswers.email,
    engineerAnswers.github
  );
  team.push(engineer);
  init();
};
//renderIntern function goes here
renderIntern();

//render manager function goes here
renderManager();

const writeFile = () => {
  console.log("file has been created ");
  fs.writeFileSync(outputPath, generateHTML(team), "utf-8");
};
