interface Pasajero{
    nombre: string,
    hijos?: string[];
}

const pasajero1: Pasajero ={
    nombre: 'shinichi'
}

const pasajero2: Pasajero = {
    nombre: 'Patana',
    hijos: ['Bodoque', 'Tulio']
}

function imprimeHijos(pasajero: Pasajero): void {
    const  cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);