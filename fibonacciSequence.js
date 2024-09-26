function fibonacciAteNum(num) {
    let fibSeq = [0, 1];
    let nextVal = fibSeq[0] + fibSeq[1];

    // Gera a sequência de Fibonacci até atingir o valor inserido
    while (nextVal <= num) {
        fibSeq.push(nextVal);
        nextVal = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
    }

    console.log(`Sequência de Fibonacci até ${num}: ${fibSeq.join(', ')}`);

    // Verifica se o número pertence à sequência
    if (fibSeq.includes(num)) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
    }
}

let numero = 10; // Pode alterar para qualquer número desejado
console.log(fibonacciAteNum(numero));
