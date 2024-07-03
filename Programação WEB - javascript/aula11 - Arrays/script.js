/* ARRAYS

Os ararys JavaScript são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imagine uma array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

A lista [0] (lista na posição 0) vai conter o valor "arroz".
A lista [1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante

*/


/*
const lista = [
    "arroz", 
    "feijão", 
    "macarrão", 
    "leite"
];

let x = lista[3];

alert(x);
*/

const pessoa = ["Dimitri", "Texeira", 30, "professor"]; //array
const x = ["1", "2"]
//alert(pessoa[pessoa.length -1]);

//acrescentar mais uma informação na matriz
pessoa.push("casado");
pessoa[5] = "solteiro";

console.log(pessoa);


//verificando se é uma array
alert(Array.isArray(x));

