import fs from 'fs';
import SucursalRepository from './repositories/sucursal';

const leerArchivo = (nombreArchivo: string) => {
  return fs.readFileSync(nombreArchivo).toString().split('\n');
}

const main = async () => {
  const filas = leerArchivo('./files/sucursales.csv');

  for (const fila of filas) {
    const campos = fila.split(',');
    if (campos.length < 4) {
      continue;
    }

    const [id_sucursal, nombre, direccion, id_depto] = campos;

    await SucursalRepository.insert({
      id_sucursal: parseInt(id_sucursal),
      nombre,
      direccion,
      id_depto: parseInt(id_depto)
    });

    console.log(`Sucursal ${nombre} insertada`);
  }
};

main().then(() => console.log('Terminado'));