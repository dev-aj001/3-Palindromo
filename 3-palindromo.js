// Palíndromo:
// Dada una palabra y verifica si es un palíndromo (es decir, si se lee igual de adelante hacia atrás que de atrás hacia adelante).

const readline = require('readline');

// Interfaz para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function esPalindromo(palabra) {
    const palabraLimpia = palabra.replace(/\s+/g, '').toLowerCase(); // Elimina espacios y convierte a minúsculas
    const palabraInvertida = palabraLimpia.split('').reverse().join(''); // Invierte la palabra
    return palabraLimpia === palabraInvertida; // Compara la palabra limpia con la invertida
}

// Solicita al usuario que ingrese una palabra
rl.question('Ingrese una palabra o frase: ', (palabra) => {
    const resultado = esPalindromo(palabra);
    console.log(`La palabra o frase "${palabra}" ${resultado ? 'es' : 'no es'} un palíndromo.`);
    
    // Cierra la interfaz de lectura
    rl.close();
});