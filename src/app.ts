import { FileParser } from "./file_parser";
import { dataFileToRepo } from "./data_file_to_repo";

const main = async () => {
  const fileParser = new FileParser();

  for (const fileName in dataFileToRepo) {
    const repo = dataFileToRepo[fileName];
    const entities = fileParser.readDataFile(fileName);

    console.log(`${fileName} leído, ${entities.length} entidades encontradas a insertar con ${repo.name}`);

    // for (const entity of entities) {
    //   repo.insert(entity);
    //   console.log(JSON.stringify(entity));
    // }
  }

};

main();