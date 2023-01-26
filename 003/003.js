function girar() {
    var giro = Math.ceil(Math.random() * 6)
    var vezes = document.querySelector('input#giro_vezes')
    var repet = Number(vezes.value)
    var res = document.querySelector('div#res')
    var lado = document.createElement('img')
    lado.setAttribute('id', 'lado')

    if (repet == 0 || repet > 100) {
        window.alert('Não')
    } else if (repet == 1) {
        switch (giro) {
            case 1:
                lado.setAttribute('src', 'Screenshot_9.png')
                res.innerHTML = `<strong>Caiu ${giro}</strong><br>`
                res.appendChild(lado)
            break;
            case 2: 
                lado.setAttribute('src', 'Screenshot_10.png')
                res.innerHTML = `<strong>Caiu ${giro}</strong><br>`
                res.appendChild(lado)
            break;
            case 3:
                lado.setAttribute('src', 'Screenshot_11.png')
                res.innerHTML = `<strong>Caiu ${giro}</strong><br>`
                res.appendChild(lado)
            break;
            case 4:
                lado.setAttribute('src', 'Screenshot_12.png')
                res.innerHTML = `<strong>Caiu ${giro}</strong><br>`
                res.appendChild(lado)
            break;
            case 5:
                lado.setAttribute('src', 'Screenshot_13.png')
                res.innerHTML = `<strong>Caiu ${giro}</strong><br>`
                res.appendChild(lado)
            break;
            case 6:
                lado.setAttribute('src', 'Screenshot_14.png')
                res.innerHTML = `<strong>Caiu ${giro}</strong><br>`
                res.appendChild(lado)
            break;
        }
    } else if (repet > 1){
        
        res.innerHTML = ''
        var arr = []

        while (repet != 0) {
            giro_dif = Math.ceil(Math.random() * 6)
            arr.push(giro_dif)
            res.innerHTML += `(${giro_dif}) `
            repet -= 1
        }
        var soma = 0
        for (i = 0; i < arr.length; i++) {
            soma += arr[i]
        }
        res.innerHTML += `= ${soma}`
    }
}