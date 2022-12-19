function calcular() {
    var v1 = document.querySelector('input#valor1')
    var v1_n = Number(v1.value)
    var v2 = document.querySelector('input#valor2')
    var v2_n = Number(v2.value)
    var res = document.querySelector('div#res')

    var media = (v1_n + v2_n) / 2
    if (media < 6) {
        var resultado = 'Muito burro vsf kkkkkk kys.'
    } else {
        var resultado = 'Deveras estudioso meu nobre.'
    }

    res.innerHTML = `Sua média foi de ${media}. ${resultado}`
}