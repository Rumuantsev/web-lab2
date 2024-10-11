function Task(title, about, id, onDelete){

    function _render(){
        const container = document.createElement('div');
        container.className = 'task_container';
        container.id = id;
        container.innerHTML = 
            `<div class="task_content">
                <div class="task_text">
                    <h3>${title}</h3>
                    <p>${about}</p>
                </div>
                <div class="task_button">
                    <button id="deleteButton">
                        <img class="delete_img" src="/src/presentation/images/ic_delete.svg">
                    </button>
                </div> 
            </div>`
        return container;
    }

    function _setupListeners(element){
        let deleteButton = element.querySelector('#deleteButton');

        deleteButton.addEventListener('click', () => {
            _showDeleteModal(onDelete);;
        });
    }

    function _showDeleteModal(onDelete) {
        const modal = document.getElementById('deleteModal');
        const confirmDelete = document.getElementById('yesButton');
        const cancelDelete = document.getElementById('noButton');
    
        // Показать модальное окно
        modal.style.display = 'flex';
    
        // Обработчик подтверждения удаления
        confirmDelete.onclick = function() {
            onDelete();
            modal.style.display = 'none'; // Скрыть модальное окно
        };
    
        // Обработчик отмены удаления
        cancelDelete.onclick = function() {
            modal.style.display = 'none'; // Скрыть модальное окно
        };

    }

    function init(){
        let element = _render();
        _setupListeners(element);
        return element;
    }

    return {
        init
    }
}

export default Task;