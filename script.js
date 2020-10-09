const $ = document.querySelector.bind(document);
const texto = $('.txtLista');
const btnAdicionar = $('.adicionaLista');
const ulLista = $('.ulLista');


const lista = document.createElement('li');
const btnFeito = document.createElement('button')
const btnDeletar = document.createElement('button')


btnAdicionar.addEventListener('click', adiciona)

function adiciona() {

    lista.innerHTML = `${texto.value}`;
    ulLista.appendChild(lista);
    ulLista.appendChild(btnFeito);
    ulLista.appendChild(btnDeletar);

}


btnFeito.innerText = 'Feito';
btnFeito.classList.add('btnFeito');
btnFeito.addEventListener('click', addClass);

function addClass() {

    lista.classList.toggle('feito')

}

btnDeletar.addEventListener('click', addClassDeletar)

btnDeletar.innerText = 'Deletar';
btnDeletar.classList.add('btnDeletar');

function addClassDeletar() {

    lista.remove('li')
        /* btnDeletar.classList.toggle('removeBtn'),
         btnFeito.classList.toggle('removeBtn');*/
}