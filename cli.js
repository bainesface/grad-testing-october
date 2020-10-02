const program = require('commander');
const questions = require('./cli/questions');
const fs = require('fs-extra');
const path = require('path');
const stagesAvailable = require('./cli/get-stages');
const ora = require('ora');

program
  .command('export')
  .description('Export a version of the course')
  .action(async () => {
    const { chosenStage, exportDir, exportedProjectName } = await questions();
    const spinner = ora().start();

    const exportedProjectAbsolutePath = `${exportDir}/${exportedProjectName}`;
    const canonicalProjectAbsolutePath = path.resolve(`${__dirname}`);

    const stagesToKeep = stagesAvailable.slice(
      0,
      stagesAvailable.indexOf(chosenStage) + 1
    );

    await fs.copy(canonicalProjectAbsolutePath, exportedProjectAbsolutePath);
    await fs.remove(`${exportedProjectAbsolutePath}/.git`);

    const stagesInsideExportedProject = await fs.readdir(
      `${exportedProjectAbsolutePath}/src/app`
    );

    stagesInsideExportedProject.forEach(stageInExportedProject => {
      if (![...stagesToKeep, '_app'].includes(stageInExportedProject)) {
        fs.removeSync(
          `${exportedProjectAbsolutePath}/src/app/${stageInExportedProject}`
        );

        ['frontend', 'backend'].forEach(directory => {
          fs.outputFileSync(
            `${exportedProjectAbsolutePath}/src/app/${stageInExportedProject}/${directory}/start/SubscribeToPets.js`,
            `module.exports = () => {};`
          );

          fs.outputFileSync(
            `${exportedProjectAbsolutePath}/src/app/${stageInExportedProject}/${directory}/start/PetsList.js`,
            `module.exports = () => {};`
          );

          fs.outputFileSync(
            `${exportedProjectAbsolutePath}/src/app/${stageInExportedProject}/${directory}/completed/SubscribeToPets.js`,
            `module.exports = () => {};`
          );

          fs.outputFileSync(
            `${exportedProjectAbsolutePath}/src/app/${stageInExportedProject}/${directory}/completed/PetsList.js`,
            `module.exports = () => {};`
          );
        });

        fs.outputFileSync(
          `${exportedProjectAbsolutePath}/src/app/${stageInExportedProject}/challenge/start/SubscribeToPets.js`,
          `module.exports = () => {};`
        );

        fs.outputFileSync(
          `${exportedProjectAbsolutePath}/src/app/${stageInExportedProject}/challenge/start/PetsList.js`,
          `module.exports = () => {};`
        );

        fs.outputFileSync(
          `${exportedProjectAbsolutePath}/src/app/${stageInExportedProject}/challenge/completed/SubscribeToPets.js`,
          `module.exports = () => {};`
        );

        fs.outputFileSync(
          `${exportedProjectAbsolutePath}/src/app/${stageInExportedProject}/challenge/completed/PetsList.js`,
          `module.exports = () => {};`
        );

        fs.outputFileSync(
          `${exportedProjectAbsolutePath}/src/app/_app/routes/${stageInExportedProject}.js`,
          'module.exports = {};'
        );
      }
    });

    spinner.stop();
  });

program.parse(process.argv);
