import inquirer from "inquirer";

const cliLineSeparator = new inquirer.Separator().line;

const writeSeparator = () => {
  console.log(cliLineSeparator);
}

const logger = console.log;
const noop = () => {};

const hideLogs = () => {
  console.log = noop;
}

const showLogs = () => {
  console.log = logger;
}

const enterToContinue: () => Promise<void> = async () => {
  await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
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