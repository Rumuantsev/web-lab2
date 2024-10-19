import taskManager from "../../domain/TaskManager.js";

function Task(title, about, id){

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
            </div>
            <div class="task_options"> 
                <div class="task_options_buttons"> 
                    <button id="shareButton">Поделиться</button>
                    <button id="infoButton">Инфо</button>
                    <button id="editButton">Редактировать</button>
                </div>
            </div>`;    
            
            let deleteButton = container.querySelector('#deleteButton');

            deleteButton.addEventListener('click', () => {
                _showDeleteModal();
            });
            
                    // Обработчик редактирования задачи
                    const editButton = container.querySelector('#editButton');
                    editButton.addEventListener('click', () => {
                        // Открываем модальное окно для редактирования
                        const editModal = document.getElementById('editModal');
                        const editTask = taskManager.getTask(id);
                        document.getElementById('editTitle').value = editTask.title;
                        document.getElementById('editDescription').value = editTask.about;
            
                        // Удаляем предыдущие обработчики "Сохранить изменения"
                        const saveButton = document.getElementById('saveChanges');
                        const newSaveButton = saveButton.cloneNode(true);
                        saveButton.parentNode.replaceChild(newSaveButton, saveButton);
            
                        // Добавляем новый обработчик для текущей задачи
                        newSaveButton.addEventListener('click', () => {
                            const updatedTitle = document.getElementById('editTitle').value;
                            const updatedDescription = document.getElementById('editDescription').value;
            
                            // Обновляем задачу напрямую через taskManager
                            taskManager.editTask(id, { title: updatedTitle, about: updatedDescription });
            
                            // Обновляем контент DOM элемента
                            container.querySelector('h3').innerText = updatedTitle;
                            container.querySelector('p').innerText = updatedDescription;
            
                            // Закрываем модальное окно
                            editModal.style.display = 'none';
                        });
            
                        // Открываем модальное окно
                        editModal.style.display = 'block';
                    });
            return container;
    }

    function _setupListeners(element){


        let shareButton = element.querySelector('#shareButton');

        shareButton.addEventListener('click', () => {
            _showShareModal(onShare)
        });

        let infoButton = element.querySelector('#infoButton');

        infoButton.addEventListener('click', () => {
            console.log(title)
        });

        
    }

    function _showDeleteModal() {
        const modal = document.getElementById('deleteModal');
        const confirmDelete = document.getElementById('yesButton');
        const cancelDelete = document.getElementById('noButton');
    
        modal.style.display = 'flex';
  
        confirmDelete.onclick = function() {
            taskManager.deleteTask(id);  
            document.getElementById(id).remove();  
            modal.style.display = 'none'; 
        };

        cancelDelete.onclick = function() {
            modal.style.display = 'none'; 
        };
    }
    function _showShareModal(onShare) {
        
    }
    function _showEditModal(onEdit) {
       
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