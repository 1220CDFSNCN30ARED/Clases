// Operacion de dividir
// 2 numeros
function dividir(num1, num2) {
    if (num2 == 0) {
        return 'No se puede dividir por 0';
    }
    
    return num1 / num2;
}

module.exports = dividir;