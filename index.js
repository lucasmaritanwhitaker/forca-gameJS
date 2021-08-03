const oJogo = document.getElementById('comecaOJogo')
const jogo = document.getElementById('jogo')
const palavra = document.getElementById('palavraV');
const letra = document.getElementById('letraV');
const imgS = document.getElementById('jogoImg');
let contador;
let acertou = 0;
let errouFinal = 0;

oJogo.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('colunasLetras').classList.toggle('colunaLetrasFinal');

    let palavraEsc = document.getElementById('palavraE').value;
    let arrPalavra = palavraEsc.split('')
    let numeroLetras = arrPalavra.length;

    document.getElementById('numLetas').innerHTML = `Nº DE LETRAS : ${numeroLetras}`
    document.getElementById('palavraE').value = '';

    for (let i = 0; i < arrPalavra.length; i++) {
        contador = document.createElement('input');
        contador.setAttribute('type', 'buttom');
        contador.setAttribute('class', 'letraPalavra');
        contador.setAttribute('id', 'letra' + i);
        contador.setAttribute('value', arrPalavra[i]);
        jogo.appendChild(contador);
    }

    letra.addEventListener('click', function (k) {
        k.preventDefault(); //não envia formulário
        let letraEsc = document.getElementById('letraE').value;
        let errou = 0;

        console.log(letraEsc);
        console.log(arrPalavra);

        for (let k = 0; k < arrPalavra.length; k++) {
            if (letraEsc === arrPalavra[k]) {
                document.getElementById('letra' + k).classList.toggle('letraPalavraVisivel')
                let index = arrPalavra.indexOf(k);
                arrPalavra.splice(index, 2)
                console.log(arrPalavra);

                acertou += 1
            } else if (letraEsc != arrPalavra[k]) {
                errou += 1
            }
        }

        if (errou === arrPalavra.length) {
            errouFinal += 1
        }

        if (errouFinal == 1) {
            imgS.setAttribute('src', 'img/erro1.png')
        } if (errouFinal == 2) {
            imgS.setAttribute('src', 'img/erro2.png')
        } if (errouFinal == 3) {
            imgS.setAttribute('src', 'img/erro3.png')
        } if (errouFinal == 4) {
            imgS.setAttribute('src', 'img/erro4.png')
        } if (errouFinal == 5) {
            imgS.setAttribute('src', 'img/erro5.png')
        } if (errouFinal == 6) {
            imgS.setAttribute('src', 'img/erro6.png')
        } if (errouFinal == 7) {
            imgS.setAttribute('src', 'img/erro7.png')
        }

        if ((errouFinal === 7)) {
            confirm('VOCÊ PERDEU !!!')
            document.getElementById('btnReset').classList.toggle('btnResetarF')
        }
        if (acertou === arrPalavra.length) {
            alert(`Você GANHOU !!!`)
            document.getElementById('btnReset').classList.toggle('btnResetarF')
        }


    })
})

function resetar() {
    location.reload();
}