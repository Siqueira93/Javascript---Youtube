// Condição Tenária
/*
var idade, eleitor;
idade = 2;
eleitor = (idade < 18) ? "Não, Eleitor" : "Sim, Eleitor";

alert ('A resposta é : ' + eleitor + ' a idade é de : ' + idade);
*/


/* Funções
Uma função JavaScript é um bloco de código projetado para executar uma tarefa expecifica

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetador apara fazer uma tarefa que vai contribuir para todo código

Uma função JavaScript é executada quando "algo" a invoca (chama-a)
*/

/*
//FUNÇÃO DE SOMA 

function soma(valor1 , valor2){
    return valor1 + valor2;
    
}

//FUÇÃO DE COTAÇÃO DOLAR
function realParaDolar(real, cotacaoDolar) {
    return  real * cotacaoDolar;

}
 
var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal , cotacao);

alert(`O valor em real é de R$ ${valorReal} já o valor em dolar é U$ ${total}`);
*/

function paraCelsius(valorFahrenheit) {
    return (5/9) * (valorFahrenheit - 32);
}

var x = paraCelsius(77)

alert("A temperatura é de " + x + " graus celsius")