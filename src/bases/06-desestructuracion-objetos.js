//  destructuracion de objetos

//  por asignacion 
const persona = {
    nombre: 'Tony', 
    edad: 45, 
    clave: 'Ironman'
}

// extrayendo la propidad nombre del objeto persona
const { nombre, edad } = persona;

// renombrando la variable
const { nombre:nomnreUsusario } = persona;







// destructuracion en el argumento
const retornaPersona1 = ({ nombre, edad }) => {
    console.log(nombre, edad);
}

// asignando valores por defecto 
//  si el objeto no piene la propiedad rango entonces le asignara capiatan por defecto
const retornaPersona2 = ({ nombre, edad, rango = 'capitan' }) => {
    console.log(nombre, edad);
}







// desestructurando un nuevo objeto creado apartir de otro
const useContext = ({ nombre, edad, clave,  rango = 'capitan' }) => {
   return {
    nombreClave: clave,
    anios: edad,
    ubicacion: valley,
    latlng: {
        lat: 14.245,
        lng: -23.345
    }
   }
}
// la latlng se debuelven como un objeto
// const {nombreClave, anios, latlng} = useContext(persona);  
console.log(nombreClave, anios, latlng);

// extrayendo lat y lng como constantes (por separado)
// const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, anios, lat, lng);






