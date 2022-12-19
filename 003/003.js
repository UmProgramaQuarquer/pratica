function girar() {
    var giro = Math.ceil(Math.random() * 6)
    var vezes = document.querySelector('input#giro_vezes')
    var repet = Number(vezes.value)
    var res = document.querySelector('div#res')
    var lado = document.createElement('img')
    lado.setAttribute('id', 'lado')

    if (repet == 0 || repet == 1) {
        if (giro == 1) {
            lado.setAttribute('src', 'Screenshot_9.png')
        } else if (giro == 2) {
            lado.setAttribute('src', 'Screenshot_10.png')
        } else if (giro == 3) {
            lado.setAttribute('src', 'Screenshot_11.png')
        } else if (giro == 4) {
            lado.setAttribute('src', 'Screenshot_12.png')
        } else if (giro == 5) {
            lado.setAttribute('src', 'Screenshot_13.png')
        } else {
            lado.setAttribute('src', 'Screenshot_14.png')
        }
        res.innerHTML = `<strong>Caiu ${giro}</strong><br>`
        res.appendChild(lado)
    } else if (repet > 1){
        res.innerHTML = ''
        while (repet != 0) {
            giro_dif = Math.ceil(Math.random() * 6)
            res.innerHTML += `(${giro_dif}) `
            repet -= 1
        }
        res.innerHTML += '= o total vc se fode pra achar kkkkkkkkk'
    }
}