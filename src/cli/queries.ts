import inquirer from "inquirer";
import DriverRepository from "../repositories/drivers";
import ConstructorsRepository from "../repositories/constructors";
import RacesRepository from "../repositories/races";

export const promptQueryMenu = async () => {
  const result = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedQuery',
      message: 'Seleccione una consulta:',
      loop: false,
      choices: [
        {
          name: '1. Piloto que ha ganado más campeonatos mundiales.',
          value: DriverRepository.getDriverWithMostChampionships
        },
        {
          name: '2. Escudería que ha ganado el campeonato de constructores más veces en la historia.',
          value: ConstructorsRepository.getConstructorWithMostWins
        },
        {
          name: '3. Piloto que ha ganado más veces un Gran Premio.',
          value: DriverRepository.getDriverWithMostGrandPrix
        },
        {
          name: '4. Grandes Premios de los campeonatos de 1996 a 1999.',
          value: RacesRepository.getGrandPrixBetween1996_1999
        },
        {
          name: '5. Piloto ganador del Gran Premio de Suzuka en 1997.',
          value: DriverRepository.getSuzaka1997Winner
        },
        {
          name: '6. Cantidad de carreras ganadas por Jacques Villenueve.',
          value: DriverRepository.getJacquesVilleneuveWinCount
        },
        {
          name: '7. Piloto que ha ganado más carreras saliendo de una posición que no fuera la pole position.',
          value: DriverRepository.getDriverWithMostWinsOutsidePolePosition
        },
        {
          name: '8. Piloto que ha ganado más carreras saliendo desde la pole position.',
          value: DriverRepository.getDriverWithMostPolePositionWins
        }
      ]
    }
  ])
    .then((answers) => {
      return answers.selectedQuery();
    });

  console.log('Resultado de la consulta:', result);
}