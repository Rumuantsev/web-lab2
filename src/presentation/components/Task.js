function Task(title, about, id, onDelete){

    function _render(){
        const container = document.createElement('div');
        container.className = 'task_container';
        container.id = id;
        container.innerHTML = 
            `<div class="task_container__text">
                <h3>${title}</h3>
                <p>${about}</p>
            </div>
            <div class="task_container_button">
                <button id="deleteButton">>x</button>
            </div> `
        return container;
    }

    function _setupListeners(element){
        let deleteButton = element.querySelector('#deleteButton');

        deleteButton.addEventListener('click', () => {
            onDelete();
        });
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