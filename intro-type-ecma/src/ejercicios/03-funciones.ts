
console.log('Holi Mundo!');
/*
    ===== Código de TypeScript =====
*/
function sumar(a: number, b: number): number{
    return a+ b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

const multiplicar = (a: number, b: number): number => {
    return a * b;
}

console.log(sumarFlecha(5, 8));
console.log(multiplicar(5, 8));

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;

    mostrarHp: () => void;
}

function curar(personaje: Personaje, curarX: number): void {
    personaje.hp += curarX;
    console.log(personaje);
}

const nuevoPersonaje: Personaje = {
    nombre: 'shinichi',
    hp: 90,
    habilidades: ['henkidama'],
    mostrarHp() {
        console.log('puntos de vida: ', this.hp);
    }
}

curar(nuevoPersonaje, 3);