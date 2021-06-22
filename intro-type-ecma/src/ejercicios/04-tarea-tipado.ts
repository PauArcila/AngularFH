/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string,
    edad: number,
    direccion: Direccion,
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string,
    pais: string,
    ciudad: string
}


const superHeroe = {
    nombre: 'Bodoque',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'Tangananica',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.direccion.calle + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

console.table(superHeroe);
console.log(JSON.stringify(superHeroe));