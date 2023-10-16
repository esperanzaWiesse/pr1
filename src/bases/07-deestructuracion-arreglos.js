// desestructuracion de arreglos

const peresonajes = ['goku', 'vegeta', 'trunks'];

// extrayendo goku
const [p1] = peresonajes;

// extrayendo vegueta
// al funcionar los arreglos por posiciones, entonces, se coloca espacios en blanco en aquellas 
// posiciones que se desean ignorar  
const [,p2] = peresonajes;




// extrancion de un arreglo, de una funcion 
const retornaArreglo = () =>{
    return ['ABC', 1231];
} 
const [ letras, numeros ] = retornaArreglo();





// arreglo que contiene una funccion
const useState = ( valor ) => {
    // es un arreglo donde la primera posicion es un valor y la segunda una funcion 
    return [ valor, () => { console. log ('Hola Mundo') } ]
};
const arr = useStatel ('Goku');
// imprime todo el arreglo
console.log(arr);
// imprime el segundo elemento de la funcion 
arr[1]()

//  desestructurando el contenido del arreglo (el arreglo contiene una funcion)
const [nombre,  setNombre] = useState('Goku');
console.log(nombre);
setNombre();


