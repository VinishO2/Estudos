/* TA COM PROBLEMA. A VIRGULA SOME AO COLOCAR O COMPLEMENTO DO NÚMERO */

/* 1. Capturar os elementos */ 
const visor = document.getElementById("visor");
const botoesNumericos = document.querySelectorAll ('.numero');

/* 2. Adicionar o "ouvinte" para cada botão */
botoesNumericos.forEach (botao => {
    botao.addEventListener ('click', () => {
        let textoVisor = visor.value + botao.textContent;
        let textoLimpo = textoVisor.replaceAll ('.', '');
        textoLimpo = textoLimpo.replace(',','.');

        if(!isNaN(textoLimpo) && textoLimpo.length > 0) {
            const partes=textoLimpo.split('.');
            const parteInteira=parseFloat(partes[0]);

            let parteInteiraFormatada = parteInteira.toLocaleString('pt-BR');
            
            if(partes.lenght > 1) {
                visor.value = parteInteiraFormatada + ',' + partes[1];
            } else {
                visor.value = parteInteiraFormatada;
            }
        }
    });
});
    /* diz que pega o proprio numero e mostra no final do visor */

const botaoLimpar= document.getElementById('limpar');
botaoLimpar.addEventListener('click', () => [
    visor.value = ''
]);

/* Cria o botão limpar e faz com que ele transforme em uma string vazia */

    /* Mostrar os numeros e operadores no visor */
    let primeiroNumero='';
    let operador='';
    let esperandoSegundoNumero=false; /* ajuda a saber se o proximo numero digitado deve limpar o visor ou ser adicionado ao número atual */

    /* botes dos operadores */
    const botoesOperador = document.querySelectorAll('.operador');

    botoesOperador.forEach(botao => {
        botao.addEventListener('click', () => {
            primeiroNumero = visor.value;
            operador = botao.textContent;
            visor.value = '';
        });
    });

     /* Criando uma virgula */

    const botaoVirgula = document.getElementById('virgula');

    botaoVirgula.addEventListener('click', () => {
    /* SE o valor do visor NÃO (!) incluir uma vírgula... */
        if (!visor.value.includes(',')) {
        /*... então, adicione uma vírgula ao final. */
            visor.value += ','; /* x+=y => x = x + y */
        }
    });

    /* botão de igual */
    const botaoIgual = document.getElementById('igual');

    botaoIgual.addEventListener('click', () => {
        const segundoNumeroTexto = visor.value;
        let resultado;

        /* ANTES de converter, troca a vírgula por ponto */
        const primeiroNumeroCorrigido = primeiroNumero.replace (',','.');
        const segundoNumeroCorrigido = segundoNumeroTexto.replace (',','.');
        
        /* Converte o texto para número */
        const num1 = parseFloat(primeiroNumeroCorrigido);
        const num2 = parseFloat(segundoNumeroCorrigido);

        if (operador === '+') {
            resultado = num1 + num2;
        } else if (operador === '-') {
            resultado = num1 - num2;
        } else if (operador === '*') {
            resultado = num1 * num2;
        } else if (operador === '/') {
            resultado = num1 / num2;
        }

        visor.value = String(resultado).replace('.',',');
    });
    