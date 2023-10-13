// objetos literales 

const persona = {
    nombre: 'tony',
    apellido: 'lopez',
    edad: 21
};

console.log(persona);

console.log({persona}); 




// clonar el objeto 

// tenemos un objeto com 2 niveles
const persona2 = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45, 
    direccion:{
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        Ing: 34.9233321
    }
}

// queremos clonar el objeto persona2 a una valible\
//  que se llama datos PeronaPeter (todos los datos son 
// iguales menos el nombre)
let peronaPeter = persona2;
// le cambiamos los nombre 
peronaPeter.nombre = 'Peter';

console.log(persona2);
console.log(peronaPeter);

// forma correcta de clonar usando el operador spread -> ...
let peronaPeter2 = {...persona2}

console.log(peronaPeter2)

