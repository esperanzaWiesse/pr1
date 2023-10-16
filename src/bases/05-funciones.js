// Funciones en JS

// forma incorrecta de declarar una funcion, propensa a errores 
function saludar( nombre ) {
    return `Hola, ${ nombre }`;
}
   
saludar = 30
console. log( saludar)




// forma correcta de declarar una funcion (usando una variable funcion)
const saludar = function ( nombre ) {
    return `Hola, ${ nombre }`;
}
   
saludar = 30
console. log( saludar)




// transformando la variable funcion a una funcion de flecha 
const saludar =  ( nombre ) => {
    return `Hola, ${ nombre }`;
}

// si la funcion solo tiene return, se puede escribir asi 
const saludar =  ( nombre ) => `Hola, ${ nombre }`;





// en caso se quiera retornar un objeto se escribiria asi
const getUSer =  () => ({
        uId: '1234',
        userName: 'pacita'
    });



