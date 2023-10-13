// arrays 

// darle una longitud preestablesida (se puede seguir expadiendo)

let arreglo = new Array (100); // tiene una longitud de 100




// agregar elementos a un objeto 

// push (no se recomienda usar por que modifica el arreglo)
let arreglo1 = [];
arreglo1.push(1); 

// spread (crea un arreglo nuevo, a la que le aumenta un nuevo elemento)
let arreglo2 = [1,2,3,4];
let arreglo3 = [...arreglo2, 5]





// realizar operaciones con los elementos

// map (crea un nuevo arreglo con los resultadosde la funcion llamada)
let arreglo4 = [1,2,3,4];
// multiplicamos * 2 
let arreglo5 = arreglo4.map(function(elemento){
    return elemento * 2;
});



