const oJogo = document.getElementById('comecaOJogo')
const jogo = document.getElementById('jogo')
const palavra = document.getElementById('palavraV');
const letra = document.getElementById('letraV');
let fimDeJogo = false;
let contador;
let errouFinal = 0;



oJogo.addEventListener('click', function (e) {
    e.preventDefault();

    let palavraEsc = document.getElementById('palavraE').value;
    let arrPalavra = palavraEsc.split('');
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
            } else if (letraEsc != arrPalavra[k]) {
                errou += 1
            }

        }
        if (errou === arrPalavra.length) {
            errouFinal += 1
        }
        console.log(errou);

        console.log(errouFinal);

        if (errouFinal >= 7) {
            alert("voce é burro ?")
        }

    })

})