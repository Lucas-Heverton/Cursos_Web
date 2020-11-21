var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector("#app .add");

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

//percorrer o array e renderizar em tela
function renderTodo() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkExcluir = document.createElement('div');
        linkExcluir.setAttribute('href', '#')

        var pos = todos.indexOf(todo);
        linkExcluir.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var imgTrash = document.createElement('img');
        imgTrash.setAttribute('src', 'https://image.freepik.com/free-icon/trash-bin-symbol_318-10194.jpg');
        imgTrash.setAttribute('id', 'trash-image');

        linkExcluir.appendChild(imgTrash);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkExcluir);
        listElement.appendChild(todoElement);

    }
}
renderTodo();

function addTodo() {
    //Verifica se o input está vazio e não adiciona na lista.
    if (inputElement.value == '') {
        alert('Digite algo');
        todoElement.pop();
    }
    //adiciona um novo intem no final da lista, depois limpa o input e renderiza na tela.
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodo();
    saveStorage();
}
buttonElement.onclick = addTodo;

//deletar uma lista criada, pegando por posição do array
function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodo();
    saveStorage();
}

//salvando no storage
function saveStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}