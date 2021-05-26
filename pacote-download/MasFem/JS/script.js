function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano') 
    let res = document.getElementById('res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('Verefique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let genero = ''

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '350px'
        img.style.height = '250px'
        img.style.borderRadius = '20px'

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', '../img/criancaHomem.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', '../img/adolescenteHomem.png')
            } else if (idade < 40) {
                //ADULTO
                img.setAttribute('src', '../img/adultoHomem.png')
            } else if (idade < 50) {
                //MEIA IDADE
                img.setAttribute('src', '../img/meiaIdadeHomem.png')
            } else {
                //IDOSO
                img.setAttribute('src', '../img/idosoHomem.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', '../img/criancaMulher.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', '../img/adolescenteMulher.png')
            } else if (idade < 40) {
                //ADULTO
                img.setAttribute('src', '../img/adultoMulher.png')
            } else if (idade < 50) {
                //MEIA IDADE
                img.setAttribute('src', '../img/meiaIdadeMulher.png')
            } else {
                //IDOSO
                img.setAttribute('src', '../img/idosoMulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}