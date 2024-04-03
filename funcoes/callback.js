function teste(cb, n) {
    console.log("funcao teste", (n + n));
    cb();
}

teste(function() {
    console.log("funcao anonima callback");
}, 5); // Passando um valor para n, por exemplo, 5
