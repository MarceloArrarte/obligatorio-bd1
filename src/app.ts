import { FileParser } from "./file_parser";
import { dataFileToRepo } from "./data_file_to_repo";

const main = async () => {
  const fileParser = new FileParser();

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
};

main();