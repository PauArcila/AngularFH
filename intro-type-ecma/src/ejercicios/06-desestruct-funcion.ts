export interface Producto{
    descripcion: string;
    precio: number;
}

const telefono: Producto = {
    descripcion: 'Xiaomi Y9',
    precio: 1990
}

const tablet: Producto = {
    descripcion: 'Huawei MediaPad',
    precio: 11990
}

export function calculaIVA(productos: Producto[]): [number, number]{
    let total = 0;
    productos.forEach((producto) =>{
        total+=producto.precio;
    })
    return [total * 0.19, total];
}

const articulos = [telefono, tablet];

const iva = calculaIVA(articulos);
console.log('IVA: ', iva);