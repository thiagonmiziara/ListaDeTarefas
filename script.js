var lista = document.querySelectorAll("li");
var i;
for (i = 0; i < lista.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("🗑");
    span.className = "excluir";
    span.appendChild(txt);
    lista[i].appendChild(span);
}


var excluir = document.getElementsByClassName("excluir");
var i;
for (i = 0; i < excluir.length; i++) {
    excluir[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('feito');
    }
}, false);

function novoItem() {
    var li = document.createElement("li");
    var inputValue = document.querySelector("#tarefa").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Digite uma tarefa!");
    } else {
        document.querySelector(".ulLista").appendChild(li);
    }
    document.querySelector("#tarefa").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("🗑");
    span.className = "excluir";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < excluir.length; i++) {
        excluir[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}