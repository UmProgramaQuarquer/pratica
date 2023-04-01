let num = 3

function parImpar(n) {
    if (n % 2 == 0) {
        var valor = 'par'
    } else if (n % 2 != 0){
        var valor = 'ímpar'
    }

    return valor
}

var arr = [0, 1, 2]

console.log(`O número ${arr.length}.`)