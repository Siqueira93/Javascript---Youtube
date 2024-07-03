const pessoa = ["Raul", "Siqueira", 30, "aluno"];

//Metodo Join -> colocar algo entre os itens do Array
document.getElementById("teste").innerHTML = pessoa.join(" - ");

//Método Pop -> remove ultimo item de uma matriz
pessoa.pop();
document.getElementById("teste").innerHTML = pessoa;

//Método shift -> remove o primeiro item de uma matriz
pessoa.shift();
document.getElementById("teste").innerHTML = pessoa;


//Método unshift -> adiciona no começo da lista de item da matriz
pessoa.unshift("Bonitão");
document.getElementById("teste").innerHTML = pessoa;

//Método que escolhe a posição que voce quer que adicione um item a matriz
pessoa.splice(1,0, "Item adicionado 1", "Item adicionado 2");
document.getElementById("teste").innerHTML = pessoa;


const lista1 = ["Arroz", "Feijão", "Leite", "Macarrão"]; //array
const lista2 = ["Suco", "Refrigerante", "Carne"];
const lista3 = ["salgadinho"];

//Método concat -> faz a concatenação de varias array
const superLista = lista1.concat(lista2, lista3);

document.getElementById("teste").innerHTML = superLista;


const jogadores = [
    "Biro Biro",
    "Ribamar",
    "Pelé",
    "Maradona",
    "Neymar",
    "Cristiano Ronaldo",
    "Vampeta",
    "Raul"
];
//Método Slice -> para dar o parametro das posições dos items
const craques = jogadores.slice(2,6);
document.getElementById("teste").innerHTML = craques;

//Método sort -> Aqui pedimos para mostrar o array em ORDEM ALFABÉTICA
const jogOrdem = jogadores.sort();
document.getElementById("teste").innerHTML = jogOrdem;


const numeros = [40, 100, 1, 5, 25, 10];
const maior20 = numeros.filter(filtragem);

//é preciso para ordenar em numeros
numeros.sort(function (a,b){
    return a-b
})


//para encontrar o maior numero da ARRAY
function MaiorNumero(array) {
    return Math.max.apply(null, array)
}

document.getElementById("teste").innerHTML = MaiorNumero(numeros);

//para encontrar o maior numero da ARRAY
function menorNumero(array) {
    return Math.min.apply(null, array)
}

document.getElementById("teste").innerHTML = menorNumero(numeros);

function filtragem(value, index, array){
    return value > 20;
}
document.getElementById("teste").innerHTML = maior20;