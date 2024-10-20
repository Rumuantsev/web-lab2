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
                    <button id="shareButton"><img class="share_img" src="/src/presentation/images/ic_share.svg"></button>
                    <button id="infoButton"><img class="info_img" src="/src/presentation/images/ic_info.svg"></button>
                    <button id="editButton"><img class="edit_img" src="/src/presentation/images/ic_edit.svg"></button>
                </div>
            </div>`;    
            
            let deleteButton = container.querySelector('#deleteButton');

            deleteButton.addEventListener('click', () => {
                const deleteModal = document.getElementById('deleteModal');
                const confirmDelete = document.getElementById('yesButton');
                const cancelDelete = document.getElementById('noButton');
            
                deleteModal.style.display = 'flex';
          
                confirmDelete.onclick = function() {
                    taskManager.deleteTask(id);  
                    document.getElementById(id).remove();  
                    deleteModal.style.display = 'none'; 
                };
        
                cancelDelete.onclick = function() {
                    deleteModal.style.display = 'none'; 
                };
            });
            
            const editButton = container.querySelector('#editButton');
            editButton.addEventListener('click', () => {

                const editModal = document.getElementById('editModal');
                const editTask = taskManager.getTask(id);
                document.getElementById('editTitle').value = editTask.title;
                document.getElementById('editDescription').value = editTask.about;
    
                const saveButton = document.getElementById('saveChanges');
                const newSaveButton = saveButton.cloneNode(true);
                saveButton.parentNode.replaceChild(newSaveButton, saveButton);
    

                newSaveButton.addEventListener('click', () => {
                    const updatedTitle = document.getElementById('editTitle').value;
                    const updatedDescription = document.getElementById('editDescription').value;
 
                    taskManager.editTask(id, { title: updatedTitle, about: updatedDescription });
    
                    container.querySelector('h3').innerText = updatedTitle;
                    container.querySelector('p').innerText = updatedDescription;
    
                    editModal.style.display = 'none';
                });
    
                editModal.style.display = 'block';
            });
        return container;
    }

    function init(){
        let element = _render();
        return element;
    }

    return {
        init
    }
}

export default Task;