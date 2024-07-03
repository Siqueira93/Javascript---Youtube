/*  EVENTOS

Eventos são ações disparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas

Existem muitos eventos. Veja os mais utilizados:

onclick -> Disparado quando recebe um click.
ondbclick -> Disáradop quando clique duplo.
onmouseover -> Disparado qaundo o mouse está sobre.
onmouseout -> Dispara quando o mouse é movido para fora do elemento.
onmousemove -> Disparado quadno o mouse é movido no elemento.
onmousedown -> Dispara quando o clique do botão foi pressionado.
onmouseup -> Disparado quando o clique do botão é liberado.
onfocus -> Disparado quando o elemento recebe o foco. Válido para input
onchange -> Dispara quando existe uma mudança no conteudo. "Ao mudar".
onblur -> Dispara quando o elemnto perde o foco.
onkeydown -> Dispara quando uma tecla é pressionada.
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> disparado quando uma tecla é solta sobre um elemento.
onload -> Dispara quando a página terminou de ser carregada. Body.
onresize - Disparado quando há um redimencionamento da janela.

*/

function eventoClick() {
    //alert("Acinou um evento de click");
    document.body.style.backgroundColor = "yellow";
}

function eventoDblClick() {
    document.body.style.backgroundColor = "blue";
}

function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.background = "red";
}

function viraAzul() {
    let div = document.getElementById("teste");
    div.style.background = "blue";
}

function adicionaTexto() {

    let p = document.getElementById("texto");
    p.append('O mouse moveu <br>')
}

function limpaTexto() {
    //onclick
    document.getElementById("campoTexto").value = "";
}

function mudou(){
    //onchange
    document.getElementById("itens");
    alert("mudou");
}

function teclaPressionada() {
    //onkeydown  //onkeyup
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}

