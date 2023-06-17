import inquirer from "inquirer";

export const promptQueryMenu = async () => {
  const consulta = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedQuery',
      message: 'Seleccione una consulta:',
      choices: [
        {
          name: '1. Piloto que ha ganado más campeonatos mundiales.',
          value: '1'
        },
        {
          name: '2. Escudería que ha ganado el campeonato de constructores más veces en la historia.',
          value: '2'
        },
        {
          name: '3. Piloto que ha ganado más veces un Gran Premio.',
          value: '3'
        },
        {
          name: '4. Grandes Premios de los campeonatos de 1996 a 1999.',
          value: '4'
        },
        {
          name: '5. Piloto ganador del Gran Premio de Suzuka en 1997.',
          value: '5'
        },
        {
          name: '6. Cantidad de carreras ganadas por Jacques Villenueve.',
          value: '6'
        },
        {
          name: '7. Piloto que ha ganado más carreras saliendo de una posición que no fuera la pole position.',
          value: '7'
        },
        {
          name: '8. Piloto que ha ganado más carreras saliendo desde la pole position.',
          value: '8'
        }
      ]
    }
  ]);

  console.log(consulta);
}