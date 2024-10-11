function TaskInput(onTaskCreated){

    let titleInput, aboutInput, addButton;

    function _render(){
        const container = document.createElement('div');
        container.className = 'input_form';
        container.innerHTML = `
            <div class="text_forms">
                <input id="titleInput" type="text" placeholder="Title...">
                <input id="aboutInput" type="text" placeholder="About...">
            </div> 
            <div class="create_button">
                <button id="addButton">
                    <img class="delete_img" src="/src/presentation/images/ic_create.svg">
                </button>
            </div>
        `;
        return container;
    }

    function _setupListeners(element){
        titleInput = element.querySelector('#titleInput');
        aboutInput = element.querySelector('#aboutInput');
        addButton = element.querySelector('#addButton');

        addButton.addEventListener('click', _handleAddTask);
    }

    function _handleAddTask() {
        const title = titleInput.value.trim();
        const about = aboutInput.value.trim();

        if (title && about) {
            const newTask = { title, about };

            if (typeof onTaskCreated === 'function') {
                onTaskCreated(newTask);
            }

            titleInput.value = '';
            aboutInput.value = '';
            
        } else {
            alert('Поля не должны быть пустыми.');
        }
    }

    function init(){
        let element = _render();
        _setupListeners(element);
        return element;
    }

    return {
        init: init
    }
}

export default TaskInput;