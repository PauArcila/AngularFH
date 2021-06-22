function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Holo Mundo');
console.log(queTipoSoy(soyString));
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5]);
let soyExplicito = queTipoSoy<number>(100);