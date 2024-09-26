function contarLetraA(str) {
    let count = 0;
    
    for (let char of str) {
        if (char.toLowerCase() === 'a') {
            count++;
        }
    }
    
    return `A letra 'a' aparece ${count} vezes na string.`;
}

let texto = "A vida é cheia de desafios";

console.log(texto);
console.log(contarLetraA(texto));
