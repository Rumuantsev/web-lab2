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
                if (taskManager.getTasks().length == 0) {           
                    const noTasks = document.querySelector('.no_tasks'); 
                    noTasks.style.display = 'flex'; 
                }   
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

            const saveButton = document.getElementById('save_button');
            saveButton.removeEventListener('click', saveTask); 
            saveButton.addEventListener('click', saveTask);

            
            const cancelButton = document.getElementById('cancel_button');
            cancelButton.addEventListener('click', () => {
                editModal.style.display = 'none';
            });
            editModal.style.display = 'flex';
        });

        function saveTask() {
            const updatedTitle = document.getElementById('editTitle').value;
            const updatedDescription = document.getElementById('editDescription').value;
            if (updatedTitle && updatedDescription) {
                taskManager.editTask(id, { title: updatedTitle, about: updatedDescription });
                container.querySelector('h3').innerText = updatedTitle;
                container.querySelector('p').innerText = updatedDescription;
                editModal.style.display = 'none';
            } else {
                alert('Поля не должны быть пустыми.');
            }
        }

        const shareButton = container.querySelector('#shareButton');
        const shareModal = document.getElementById('shareModal');
        shareButton.addEventListener('click', () => {         
            shareModal.style.display = 'flex';

            const copyButton = document.getElementById('copyButton'); 
            console.log(copyButton);
            copyButton.addEventListener('click', () => { 
                navigator.clipboard.writeText(taskManager.getTask(id).title + "\n\n" + taskManager.getTask(id).about);
                shareModal.style.display = 'none';
            }); 

            const vkButton = document.getElementById('vkButton');
            vkButton.addEventListener('click', () => {  
                navigator.clipboard.writeText(taskManager.getTask(id).title + "\n\n" + taskManager.getTask(id).about);
                shareModal.style.display = 'none';
            });
            
            const telegramButton = document.getElementById('telegramButton');
            telegramButton.addEventListener('click', () => {  
                navigator.clipboard.writeText(taskManager.getTask(id).title + "\n\n" + taskManager.getTask(id).about);
                shareModal.style.display = 'none';
            });

            const whatsappButton = document.getElementById('whatsappButton');
            whatsappButton.addEventListener('click', () => { 
                navigator.clipboard.writeText(taskManager.getTask(id).title + "\n\n" + taskManager.getTask(id).about);
                shareModal.style.display = 'none';
            }); 

            const facebookButton = document.getElementById('facebookButton');
            facebookButton.addEventListener('click', () => { 
                navigator.clipboard.writeText(taskManager.getTask(id).title + "\n\n" + taskManager.getTask(id).about);
                shareModal.style.display = 'none';
            }); 
            
            
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