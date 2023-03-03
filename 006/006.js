let num = 3

function parImpar(n) {
    if (n % 2 == 0) {
        var valor = 'par'
    } else if (n % 2 != 0){
        var valor = 'ímpar'
    }

    return valor
}

console.log(`O númweo ${num} é ${parImpar(num)}.`)