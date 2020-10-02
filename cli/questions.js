const inquirer = require('inquirer');
const path = require('path');
const stagesToChooseFrom = require('./get-stages');

module.exports = () =>
  inquirer.prompt([
    {
      type: 'list',
      message: 'Choose the stage you would like to export up to',
      name: 'chosenStage',
      choices: stagesToChooseFrom
    },
    {
      type: 'question',
      message: 'Where would you like to export the project to?',
      name: 'exportDir',
      default: path.resolve(`${__dirname}/../..`)
    },
    {
      type: 'question',
      message: 'What would you like to call the exported project?',
      name: 'exportedProjectName',
      default: 'tdd-workshop-exported'
    }
  ]);
