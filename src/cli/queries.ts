import inquirer from "inquirer";
import DriverRepository from "../repositories/drivers";
import ConstructorsRepository from "../repositories/constructors";
import RacesRepository from "../repositories/races";

export const promptQueryMenu = async () => {
  await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedQuery',
      message: 'Seleccione una consulta:',
      loop: false,
      choices: [
        {
          name: '1. Piloto que ha ganado más campeonatos mundiales.',
          value: async () => {
            const result = await DriverRepository.getDriverWithMostChampionships();
            if (result.length === 1) {
              console.log(`El piloto que ha ganado más campeonatos mundiales es ${result[0].Corredor} con ${result[0]["Campeonatos ganados"]} campeonatos mundiales.`);
            }
            else {
              console.log(`Los pilotos que han ganado más campeonatos mundiales son ${result.map((row) => row.Corredor).join(', ')} con ${result[0]["Campeonatos ganados"]} campeonatos mundiales.`);
            }
          }
        },
        {
          name: '2. Escudería que ha ganado el campeonato de constructores más veces en la historia.',
          value: async () => {
            const result = await ConstructorsRepository.getConstructorWithMostWins();
            if (result.length === 1) {
              console.log(`El constructor que ha ganado más campeonatos mundiales es ${result[0].Constructor} con ${result[0]["Campeonatos ganados"]} campeonatos mundiales.`);
            }
            else {
              console.log(`Los constructores que han ganado más campeonatos mundiales son ${result.map((row) => row.Constructor).join(', ')} con ${result[0]["Campeonatos ganados"]} campeonatos mundiales.`);
            }
          }
        },
        {
          name: '3. Piloto que ha ganado más veces el Gran Premio en cada circuito.',
          value: async () => {
            const result = await DriverRepository.getDriverWithMostGrandPrix();
            console.log(
              `Los pilotos que han ganado más veces el Gran Premio de cada circuito son:\n\n`
              + result.map((row) => {
                const plural = row["Grandes Premios ganados"] > 1;
                return `* ${row.Circuito}: ${row.Corredor} (${row["Grandes Premios ganados"]} ${plural ? 'victorias' : 'victoria'})`;
              }).join('\n')
            );
          }
        },
        {
          name: '4. Grandes Premios de los campeonatos de 1996 a 1999.',
          value: async () => {
            const result = await RacesRepository.getGrandPrixBetween1996_1999();
            console.log(
              `Los Grandes Premios de los campeonatos de 1996 a 1999 son:\n\n`
              + result.map((row) => `* ${row.name} (${row.year})`).join('\n')
              + `\n\nTotal: ${result.length} Grandes Premios.`
            );
          }
        },
        {
          name: '5. Piloto ganador del Gran Premio de Suzuka en 1997.',
          value: async () => {
            const result = await DriverRepository.getSuzuka1997Winner();
            console.log(`El piloto ganador del Gran Premio de Suzuka en 1997 es ${result[0].Driver_name}.`);
          }
        },
        {
          name: '6. Cantidad de carreras ganadas por Jacques Villenueve.',
          value: async () => {
            const result = await DriverRepository.getJacquesVilleneuveWinCount();
            console.log(`Jacques Villenueve ganó ${result[0].Carreras_ganadas} carreras.`);
          }
        },
        {
          name: '7. Piloto que ha ganado más carreras saliendo de una posición que no fuera la pole position.',
          value: async () => {
            const result = await DriverRepository.getDriverWithMostWinsOutsidePolePosition();
            console.log(`El piloto que ha ganado más carreras saliendo de una posición que no fuera la pole position es ${result[0].Driver_name} con ${result[0].wins} carreras ganadas.`);
          }
        },
        {
          name: '8. Piloto que ha ganado más carreras saliendo desde la pole position.',
          value: async () => {
            const result = await DriverRepository.getDriverWithMostPolePositionWins();
            console.log(`El piloto que ha ganado más carreras saliendo de la pole position es ${result[0].Driver_name} con ${result[0].wins} carreras ganadas.`);
          }
        }
      ]
    }
  ])
    .then((answers) => {
      console.log();
      return answers.selectedQuery();
    });
}