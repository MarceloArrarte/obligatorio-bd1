import inquirer from "inquirer";
import { enterToContinue, hideLogs, separator, showLogs, writeSeparator } from "./utils";
import CircuitsRepository from "../repositories/circuits";
import loadDataFiles from "../data-load/main";
import { promptQueryMenu } from "./queries";


export const start = async () => {
  console.log('Bienvenido al sistema de consultas del histórico de Fórmula 1');
  writeSeparator();
  await promptCheckStoredData();
  writeSeparator();
  await promptMainMenu();
};


const promptCheckStoredData = async () => {
  console.log('Verificando base de datos...');
  writeSeparator();
  const dbHasData = await CircuitsRepository.hasData();

  if (dbHasData) {
    console.log('Base de datos verificada.');
    return;
  }

  console.log('No hay datos cargados en la base de datos.');

  await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Copie los archivos del conjunto de datos en la carpeta "files/" y presione enter para continuar. Este proceso puede demorar varios minutos.',
    }
  ]);

  console.log('Iniciando importación de datos. Espere por favor...');
  hideLogs();
  await loadDataFiles();
  showLogs();
  console.log('Importación de datos finalizada.');
  await enterToContinue();
};


const promptMainMenu = async () => {
  console.log('Menú principal');
  writeSeparator();
  const opcion = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedOption',
      message: 'Seleccione una opción:',
      choices: [
        {
          name: '1. Realizar consulta.',
          value: 1
        },
        {
          name: '2. Salir.',
          value: 2
        }
      ]
    }
  ]);

  switch (opcion.selectedOption) {
    case 1:
      await promptQueryMenu();
      break;
    case 2:
      console.log('Saliendo del sistema...');
      return;
  }
};