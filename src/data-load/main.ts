import { dataFileToRepo } from "./data_file_to_repo";
import { FileParser } from "./file_parser";

const main = async () => {
  const fileParser = new FileParser();

  console.log('Iniciando importación de datos...');
  const importStartTime = Date.now();

  for (const dataFile of dataFileToRepo) {
    const fileName = dataFile.fileName;
    const repo = dataFile.repo;
    const transforms = dataFile.transforms;

    console.log(`Leyendo archivo de ${fileName}...`);
    const entities = fileParser.readDataFile(fileName, transforms);
    console.log(`Archivo de ${fileName} leído, ${entities.length} entidades encontradas a insertar con ${repo.name}`);

    await repo.insertBatch(entities);
    console.log(`Archivo de ${fileName} insertado con ${repo.name}`);
  }

  console.log(`Importación de datos finalizada en ${Date.now() - importStartTime}ms.`);
};

export default main;