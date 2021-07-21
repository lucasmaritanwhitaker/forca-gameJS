const valor = document.querySelector('#valorEscolhido');
const valor2 = document.querySelector('#letraResult')
const gameOver = 6;
let palavraEscolhida = '';
let letraEscolhida = '';


//Pegando o 1 valor (PALAVRA A SER DECIFRADA)
//Passando o valor para um array e separando em valores diferentes pra conferir
valor.addEventListener('click', function (e) {
    e.preventDefault();

    let palavra = document.querySelector('#palavraEscolhida');
    let value = palavra.value;

    let arrConfere = [];
    arrConfere = value.split('');
    palavraEscolhida = arrConfere;
    console.log(palavraEscolhida);
});

//Pegando o 2 valor (LETRA)
valor2.addEventListener('click', function (e) {
    e.preventDefault();

    let letra = document.querySelector('#letraEscolhida');
    let value = letra.value;
    letraEscolhida = value;
    console.log(letraEscolhida);

    for (let i = 0; i < palavraEscolhida.length; i++) { //Validação teste p/ LetraEscolhida = LetraPalavraEscolhida

        let pLC = palavraEscolhida[i];
        console.log(pLC);

        let lLC = letraEscolhida;
        console.log(lLC);

        if (lLC == pLC) {
            console.log('TEM')
        } else {
            console.log('NÃO TEM')
        }
    }

});
