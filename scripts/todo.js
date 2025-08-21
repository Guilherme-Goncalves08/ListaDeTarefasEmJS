document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list')

    addButton.addEventListener('click', addTodo)
    document.addEventListener('keypress', (event) => {
        if(event.key == 'Enter'){
            addTodo();
        }
    })

    function addTodo(){
        
        //pega o que foi escrito no input
        const texto = todoInput.value.trim()
        // verficiar se tem algo
        if (texto !== ''){
            const li = document.createElement('li')
            //adicionar na lista
            li.textContent = texto

            const deleteButton = document.createElement('button')
            deleteButton.textContent = "deletar";
            deleteButton.className = "delete-button"
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(li)
            })
            
            li.appendChild(deleteButton)
            todoList.appendChild(li)
            todoInput.value = ''
            todoInput.focus()
        }
    }
})