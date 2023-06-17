import inquirer from "inquirer";

const cliLineSeparator = new inquirer.Separator().line;

const writeSeparator = () => {
  console.log(cliLineSeparator);
}

const hideLogs = () => {
  console.log = () => {};
}

const showLogs = () => {
  console.log = console.log;
}

const enterToContinue = async () => {
  await inquirer.prompt([
    {
      type: 'confirm',
      message: 'Presione enter para continuar...'
    }
  ]);
}

export {
  enterToContinue,
  hideLogs,
  showLogs,
  cliLineSeparator as separator,
  writeSeparator
}