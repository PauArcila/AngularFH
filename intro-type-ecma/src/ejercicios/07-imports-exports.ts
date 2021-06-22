import { calculaIVA, Producto } from "./06-desestruct-funcion";


const carritoCompras: Producto[] = [
    {
        descripcion: 'Telefono 1',
        precio: 29500
    },
    {
        descripcion: 'Telefono 2',
        precio: 15900
    },
];

const [total, iva] = calculaIVA(carritoCompras);

console.log('Total: ', total );
console.log('IVA: ', iva);

