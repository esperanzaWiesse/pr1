// Template string
const nombre = 'mariano'
const apellido = 'calvo'

// concatenar
const nombreCompleto1 = `${nombre} ${apellido}`;

console.log(nombreCompleto1);

// agregar saltos de linea 
const nombreCompleto2 = `
    ${nombre} 
    ${apellido}
`;

console.log(nombreCompleto2);

// llamar funciones
function getSaludo(){
    return 'hola' + nombre;
}

console.log(`saludo personalizado ${getSaludo(nombre)}`)