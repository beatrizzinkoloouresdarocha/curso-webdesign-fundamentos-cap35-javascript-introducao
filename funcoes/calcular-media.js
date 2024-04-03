function calcularMedia(numeros) {
    // Verifica se o array não está vazio
    if (numeros.length === 0) {
        return 0;
    }

    // Calcula a soma de todos os números no array
    var soma = numeros.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);

    // Calcula a média dividindo a soma pelo número de elementos no array
    var media = soma / numeros.length;

    return media;
}

// Exemplo de uso:
var notas = [7, 8, 9, 10];
var media = calcularMedia(notas);
console.log("A média é: " + media.toFixed(2));
