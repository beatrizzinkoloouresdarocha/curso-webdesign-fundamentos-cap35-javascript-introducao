function somar(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
}

console.log(somar([1, 2, 3])); // Saída: 6
