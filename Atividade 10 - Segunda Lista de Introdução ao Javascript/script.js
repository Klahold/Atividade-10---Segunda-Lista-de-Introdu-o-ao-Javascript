console.log("11. Verificação de Número Positivo ou Negativo")
function verificarSinal(numero) {
    if (numero > 0) {
        console.log("Positivo");
    } else if (numero < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }
}

console.log("12. Função para Converter Celsius em Fahrenheit")
function converterTemperatura(celsius) {
    return (celsius * 9/5) + 32;
}

console.log("13. Laço While para Somatório")
let soma = 0;
let i = 1;
while (i <= 100) {
    soma += i;
    i++;
}
console.log("Soma de 1 a 100:", soma);

console.log("14. Substituição de Palavras em String")
function substituirPalavra(texto) {
    return texto.replace(/azul/g, "vermelho");
}

console.log("15. Verificação de Tamanho de String")
function verificarTamanho(string) {
    return string.length > 10 ? "Mais de 10 caracteres" : "10 caracteres ou menos";
}

console.log("16. Criando e Acessando Array")
let frutas = ["maçã", "banana", "laranja", "uva", "kiwi"];
console.log("Terceira fruta:", frutas[2]);

console.log("17. Função com Valor Padrão em Dois Parâmetros")
function saudacao(nome, saudacao = "Bem-vindo(a)") {
    return `${saudacao}, ${nome}!`;
}

console.log("18. Verificação de Nota")
function verificarAprovacao(nota) {
    return nota >= 6 ? "Aprovado" : "Reprovado";
}

console.log("19. Laço for para Contagem de Pares")
for (let j = 0; j <= 30; j++) {
    if (j % 2 === 0) {
        console.log(j);
    }
}

console.log("20. Contagem de Vogais")
function contarVogais(palavra) {
    const vogais = palavra.match(/[aeiou]/gi);
    return vogais ? vogais.length : 0;
}

console.log("21. Soma dos Elementos de um Array")
function somarArray(array) {
    return array.reduce((acc, num) => acc + num, 0);
}

console.log("22. Função para Dobrar Números")
function dobrarNumero(numero) {
    return numero * 2;
}

console.log("23. Laço While para Contagem de Pares")
let k = 2;
while (k <= 20) {
    console.log(k);
    k += 2;
}

console.log("24. Capitalizar Primeira Letra")
function capitalizar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log("25. Verificação de Ano Bissexto")
function anoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

console.log("")