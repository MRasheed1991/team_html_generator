const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const {
  generateHTML,
  generateEngineerHTML,
  generateInternHTML,
  generateManagerHTML,
} = require("./src/utils/generateHTML");
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
    team.join("");
    writeFile(team);
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
  const engineerHTML = generateEngineerHTML(engineer);
  team.push(engineerHTML);
  init();
};
//renderIntern function goes here
const renderIntern = async () => {
  const internAnswers = await inquirer.prompt([
    { type: "input", name: "name", message: "What is your intern's name?" },
    {
      type: "input",
      name: "id",
      message: "What is your intern's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your intern's Email",
    },
    {
      type: "input",
      name: "school",
      message: "What school did your intern attend?",
    },
  ]);
  const intern = new Intern(
    internAnswers.name,
    internAnswers.id,
    internAnswers.email,
    internAnswers.school
  );
  const internHTML = generateInternHTML(intern);
  team.push(internHTML);
  init();
};

//render manager function goes here
const renderManager = async () => {
  const managerAnswers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is you manager's Email",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your manager's office number?",
    },
  ]);
  const manager = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officeNumber
  );
  const managerHTML = generateManagerHTML(manager);
  team.push(managerHTML);
  init();
};
init();
const writeFile = (team) => {
  console.log("file has been created ");
  fs.writeFileSync(outputPath, generateHTML(team), "utf-8");
};
