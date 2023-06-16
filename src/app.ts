import { FileParser } from "./file_parser";
import { dataFileToRepo } from "./data_file_to_repo";
import { setTimeout } from "timers/promises";

const main = async () => {
  const fileParser = new FileParser();

  for (const fileName in dataFileToRepo) {
    const repo = dataFileToRepo[fileName].repo;
    const entities = fileParser.readDataFile(fileName);
    console.log(`filename:${fileName} - repo:${repo} `);
    console.log(`${fileName} leído, ${entities.length} entidades encontradas a insertar con ${repo.name}`);

    for (const entity of entities) {
      repo.insert(entity);
      console.log(JSON.stringify(entity));
      await setTimeout(10);
    }
    
  }

};
/*
const query = async () => {
  const status = BaseRepository<Status>("status").getAll();
  return status;
}
// return query status
const status = query().then((status) => {
  console.log(status);
  return status;
});
console.log(status);
*/

main();