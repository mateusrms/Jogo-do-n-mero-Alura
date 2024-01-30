let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor que o chute.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior que o chute.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados= [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


/*
// Atividade 01
function hello() {
    console.log('Olá, mundo!'); 
}

hello();

// Atividade 02
let nome = prompt('Digite seu nome');

function saudacao() {
    console.log(`Olá, ${nome}!`);
}

saudacao();

// Atividade 03
let numero = parseInt(prompt('Digite um número para saber o seu dobro:'));

function dobro() {
    let multiplicacao = numero * 2;
    console.log(`O dobro do seu número digitado é ${multiplicacao}`);
}

dobro()

// function calcularDobro(numero) {
//     return numero * 2;
//   }
  
//   let resultadoDobro = calcularDobro(5);
//   console.log(resultadoDobro);

// Atividade 04
let numeroUm = parseInt(prompt('Digite a primeira nota do trimestre:'));
let numeroDois = parseInt(prompt('Digite a segunda nota do trimestre:'));
let numeroTres = parseInt(prompt('Digite a terceira nota do trimestre:'));

function media() {
    let mediaDois = (numeroUm + numeroDois + numeroTres) / 3;
    alert(`Sua média foi de ${mediaDois} pontos!`)
}

// function calcularMedia(a, b, c) {
//     return (a + b + c) / 3;
//   }
  
//   let media = calcularMedia(4, 7, 10);
//   console.log(media);

media();

// Atividade 05
function maior() {
    if (numeroUm > numeroDois) {
        console.log(`A nota ${numeroUm} (primeira) é maior que a segunda`);
    } else {
        console.log(`A nota ${numeroDois} (segunda) é maior que a primeira`);
    }
}

maior();

// function encontrarMaior(a, b) {
//     return a > b ? a : b;
//   }
  
//   let maiorNumero = encontrarMaior(15, 9);
//   console.log(maiorNumero);

// Atividade 06
let mult = parseInt(prompt('Digite um número para multiplicar por ele mesmo:'));

function multPorEleMesmo() {
    let ward = mult * mult;
    console.log(`a multiplicação do número por ele mesmo resulta em ${ward}`);
}

multPorEleMesmo();

// function quadrado(numero) {
//     return numero * numero;
//   }
  
//   let resultado = quadrado(2);
//   console.log(resultado); 
*/

// atividade 01
// function calcularIMC(peso, altura) {
//     // Verifica se os parâmetros são válidos
//     if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
//         return 'Valores inválidos. Certifique-se de inserir valores numéricos válidos.';
//     }

//     // Calcula o IMC usando a fórmula: peso / (altura * altura)
//     let imc = peso / (altura * altura);

//     // Retorna o resultado do IMC arredondado para duas casas decimais
//     return imc.toFixed(2);
// }

// // Exemplo de uso da função
// let pesoUsuario = parseFloat(prompt('Digite seu peso em KG:'));
// let alturaUsuario = parseFloat(prompt('Digite sua altura em metros:'));

// let resultadoIMC = calcularIMC(pesoUsuario, alturaUsuario);

// alert(`Seu IMC é: ${resultadoIMC}`);

// atividade 02
// let fatorar = parseInt(prompt('Digite um número para ser fatorado:'));

// function calculo(fatorar) {
//     // Se o número é menor ou igual a zero, não podemos fatorar
//     if (fatorar <= 0) {
//         alert('Esse número não dá para fatorar ou é zero!');
//         return null; // Retorna null para indicar que não há resultado
//     }

//     let fatorial = 1;

//     // Calcula o fatorial usando um loop
//     while (fatorar > 1) {
//         fatorial *= fatorar;
//         fatorar--;
//     }

//     return fatorial;
// }

// // Chama a função e armazena o resultado
// let resultadoFatorial = calculo(fatorar);

// // Exibe o resultado apenas se não for null
// if (resultadoFatorial !== null) {
//     alert(`O fatorial de ${fatorar} é: ${resultadoFatorial}`);
// }

// atividade 03
/*let dolar = parseFloat(prompt('Digite quantos dólares possui para converter:'));

function conversor(dolar) {
    let real = 4.8;
    let conversao = dolar * real;
    return conversao.toFixed(2);
}

let resultadoConversao = conversor(dolar);

if (resultadoConversao > 1 ) {
    alert(`Você possui ${dolar} dolar(es), convertendo para Reais, você terá ${resultadoConversao} reais.`);
} else {
    alert(`Você possui ${dolar} cents de dolar, convertendo para Reais, você terá ${resultadoConversao} centavos de reais.`);
}

// Atividade 04
let largura = parseInt(prompt('Qual a largura do retangulo'));
let altura = parseInt(prompt('Qual a altura do retangulo'));

function perimetro(largura , altura) {
    let perimetroTotal = (largura * 2) + (altura * 2);
    return perimetroTotal;
}

function area(largura, altura) {
    let areaTotal = largura * altura;
    return areaTotal;
}

let resultadoPerimetro = perimetro(largura , altura);
let resultadoArea = area(largura, altura);

alert(`a área do retangulo é ${resultadoArea} e seu perímetro é ${resultadoPerimetro}`);

// Atividade 05

let raio = parseFloat(prompt('Digite o raio da sala circular:'));
let pi = 3.14;

function perimetro(raio, pi) {
    let perimetroTotal = pi * (raio * raio);
    return perimetroTotal.toFixed(2);
}

function area(raio, pi) {
    let areaTotal = 2 * pi * raio;
    return areaTotal.toFixed(2);
}

let resultadoPerimetro = perimetro(raio, pi);
let resultadoArea = area(raio, pi);

alert(`a área da sala circular é ${resultadoArea} e seu perímetro é ${resultadoPerimetro}`);


// Atividade 06
let numero = parseInt(prompt('Digite um numero para saber a sua tabuada:'));
let tabuada = 1;

function contador(numero, tabuada) {
    while (tabuada <= 10) {
        let calculo = numero * tabuada;
        console.log(`${numero} x ${tabuada} = ${calculo}`);
        tabuada++
        return calculo;
    }
}
contador(numero);
*/

// Crie uma lista vazia, com o nome listaGenerica.
// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.