const botaoAdicionar = document.getElementById ("adicionar-tarefa");
const listaDeTarefas = document.getElementById ("lista-de-tarefas");
const campoDeTexto = document.getElementById ("nova-tarefa");
const botaoLimpar = document.getElementById ("limpar-tarefa"); 


botaoAdicionar.addEventListener('click', function(){
    const textoDaTarefa = campoDeTexto.value;

    console.log("Texto capturado: ", textoDaTarefa);

    const novoLi = document.createElement('li');
    novoLi.textContent = textoDaTarefa;
    listaDeTarefas.appendChild(novoLi);
    campoDeTexto.value = '';

});

listaDeTarefas.addEventListener('click', function(event){

});

botaoLimpar.addEventListener('click', function(){
    
});