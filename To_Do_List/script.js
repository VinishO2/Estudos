const botaoAdicionar = document.getElementById ("adicionar-tarefa");
const listaDeTarefas = document.getElementById ("lista-de-tarefas");
const campoDeTexto = document.getElementById ("nova-tarefa");
const botaoLimpar = document.getElementById ("limpar-tarefa"); 


botaoAdicionar.addEventListener('click', function(){
    const textoDaTarefa = campoDeTexto.value;

    console.log("Texto capturado: ", textoDaTarefa);

    const novoLi = document.createElement('li'); //<li> cria um item para a lista

    const botaoRemover = document.createElement('button')
        botaoRemover.textContent = 'X';
    
    novoLi.appendChild(botaoRemover);

    novoLi.textContent = textoDaTarefa; 

    listaDeTarefas.appendChild(novoLi); // a "listaDeTarefas" funciona como um "pai/mae" e o "novoLi" funciona como "filho"
    campoDeTexto.value = '';

});


listaDeTarefas.addEventListener('click', function(event){
    if(event.target.classList.contains('tarefa-concluida')) {
        event.remove(listaDeTarefas);
    } else {event.target.classList.toggle("tarefa-concluida");
    };
});

