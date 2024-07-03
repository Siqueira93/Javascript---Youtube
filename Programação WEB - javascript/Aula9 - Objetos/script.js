/* OBJETOS
Objetos são basicamente variáveis com muitos valores dentro.

Ex: const carro = {marca:"ford", modelo:"ka", ano 2015}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um Método é uma função colocadas dentro de uma propriedade.

*/

const carro = {
    
    marca: "Ford", //propriedades
    modelo: "Ka", //propriedades
    ano: 2015, //propriedades
    placa: "ABC-1234", //propriedades
    buzina: function() {
        alert('Biiiiiiiiiiiiiiiii')     //Métodos
    },
    completo: function(){
        return "A marca é : " + this.marca + " , modelo : " + this.modelo    //Métodos
    }
};

console.log(carro);