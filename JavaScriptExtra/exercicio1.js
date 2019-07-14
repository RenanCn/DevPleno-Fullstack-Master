// Exercicios - Conceitos fundamentais JS

console.log(" • Exercícios - JS • ")

// 1) Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.

let vetor = [10, 15 ,20, 25 ,30, 35, 40, 45, 50, 50]
const somatorio = (antValor, proxValor) => antValor + proxValor
const somaTotal = vetor.reduce(somatorio)

console.log('Soma dos itens do vetor: ' + somaTotal)

// 2) Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.

const filtroPar = item => item % 2 === 0
const somaParesFiltrados = vetor.filter(filtroPar).reduce(somatorio, 0)

console.log('Soma dos pares: ' + somaParesFiltrados)

// 3) Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.

const filtroImpar = item => item % 2  != 0
const somaImparesFiltrados = vetor.filter(filtroImpar).reduce(somatorio, 0)

console.log('Soma dos ímpares: ' + somaImparesFiltrados)

// 4) Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor (dica: utilize reduce)

vetor = [10, 15, 20, 25, 30, 35, 40, 45, 50, 50]
let aparicoes = (agregador, valor) => {
    if(!agregador[valor]){
        agregador[valor] = 0
    }
    agregador[valor] = agregador[valor] + 1
    return agregador
}
const quantidade = vetor.reduce(aparicoes, {})
console.log('Quantidade de cada elemento: ' + quantidade)

// 5) Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor 
//    (aqueles que ocorrem apenas 1 vez dentro do vetor) (Dica 1: utilize reduce, filter e keys, 
//    Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício)

aparicoes = (agregador, valor) => {
    if(!agregador[valor]){
        agregador[valor] = {
            value: valor,
            occur: 0
        }
    }
    agregador[valor].occur = agregador[valor].occur + 1
    return agregador
}
const contagem = vetor.reduce(aparicoes, {})
const keys = Object.keys(contagem)
const unique = keys.filter( key => contagem[key].occur === 1)
const uniqueValues = unique.map( val => contagem[val].value)
console.log('Elementos únicos: ' + uniqueValues)

// 6) Dado um vetor com números, retorne somente os números pares;

const apenasPares = vetor.filter(item => item % 2 === 0)
console.log("Apenas pares: " + apenasPares)

// 7) Dado um vetor com números, retorne somente os números ímpares;

const apenasImpares = vetor.filter(item => item % 2 != 0)
console.log("Apenas ímpares: " + apenasImpares)

// 8) Uma função é chamada da seguinte forma: calculadora(10, '+', 20)
//    crie o corpo da função de forma que ela realize as 4 operações aritméticas

const calculadora = (num1, op, num2) => {
    if(op === '+'){
        return num1+num2
    }
    else if (op === '-'){
        return num1-num2
    }
    else if (op === '*'){
        return num1*num2
    }
    else if (op === '/'){
        return num1/num2
    }
    else{
        return 'Operador inválido.'
    }
}

console.log('Calculadora 1: ' + calculadora(5,'+',3))

//9) Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, 
//   e realize o cálculo. Exemplo:

const calculadora2 = (num1, op, num2) => op(num1,num2)

const soma = (n1,n2) => n1+n2
const subtracao = (n1,n2) => n1-n2
const multiplicacao = (n1,n2) => n1*n2
const divisao = (n1,n2) => n1/n2

console.log('Calculadora 2: ' + calculadora2(7, multiplicacao, 7))