const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(2)
       

        let classificacao = '';
        
        if (valorIMC < 18.5){
            classificacao = `Abaixo do peso 😪`;
        } else if(valorIMC < 25) {
            classificacao = `Peso ideal 🎉✨🎊`;
        } else if(valorIMC < 30) {
            classificacao = `levemente acima do peso 😅`;
        } else if(valorIMC < 35) {
            classificacao = `com <>obesidade grau I</b> 😥`;
        } else if(valorIMC < 40) {
            classificacao = `com <b>obesidade grau II</b> 😫`;
        } else {
            classificacao = `com <b>obesidade grau III.</b> Cuidado!  🤬`;
        }

         resultado.textContent = `${nome} , seu IMC é de: ${valorIMC} e você está ${classificacao}`

    } else {
       resultado.textContent = 'Preencha todos os campos!!🙄'
    }

}


calcular.addEventListener('click', imc);