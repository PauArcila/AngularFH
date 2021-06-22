class Persona{
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends Persona{

    constructor(
        private alterEgo: string,
        private edad: number,
        private nombreReal: string,
    ){
        super( nombreReal, 'New York');
    }
}

const ironMan = new Heroe('IronMan', 35, 'Tony');

console.log(ironMan);