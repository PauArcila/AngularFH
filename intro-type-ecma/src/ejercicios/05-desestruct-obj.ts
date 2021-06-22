
 interface Reproductor {
     volumen: number;
     segundo: number;
     cancion: string;
     detalles: Detalles;
 }

 interface Detalles{
     autor: string;
     anio: number;
 }
 
 const reproductor: Reproductor = {
     volumen: 90,
     segundo: 36,
     cancion: 'Holi Tu',
     detalles: {
         autor: 'Sadgasm',
         anio: 2000
     }
 }

const { volumen, segundo, cancion, detalles: { autor } } = reproductor;
//const { autor } = reproductor.detalles;

 console.log('EL volumen actual es de: ', reproductor.volumen);
 console.log('EL segundo actual es: ', segundo);
 console.log('EL canción actual es: ', cancion);
 console.log('EL autor es: ', autor);

 const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
 const [p1, p2, p3 ] = dbz;

 console.log(dbz[0]);
 console.log(dbz[1]);
 console.log('Personaje 3: ', p3);