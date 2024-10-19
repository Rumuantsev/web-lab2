function Options(onShare, onInfo, onEdit) {

    function _render() {
        const container = document.createElement('div');
        container.className = 'options_menu';
        container.innerHTML = 
            `<div class="options_buttons">
                <button id="shareButton">
                    <img src="/src/presentation/images/ic_share.svg" alt="Share">
                </button>
                <button id="infoButton">
                    <img src="/src/presentation/images/ic_info.svg" alt="Info">
                </button>
                <button id="editButton">
                    <img src="/src/presentation/images/ic_edit.svg" alt="Edit">
                </button>
            </div>`;
        return container;
    }

    function _setupListeners(element){
        let editButton = element.querySelector('#editButton');

        editButton.addEventListener('click', () => {
            _showEditModal(onEdit); // Открываем модальное окно для редактирования
        });
    }

    function _showEditModal(onEdit) {
        const modal = document.getElementById('editModal');
        const saveButton = document.getElementById('saveChangesButton');
        const editTitle = document.getElementById('editTitle');
        const editAbout = document.getElementById('editAbout');

        // Показать текущее значение заголовка и описания
        editTitle.value = onEdit.title;
        editAbout.value = onEdit.about;

        modal.style.display = 'block';  // Открыть модальное окно

        saveButton.onclick = function() {
            const updatedTitle = editTitle.value.trim();
            const updatedAbout = editAbout.value.trim();

            if (updatedTitle && updatedAbout) {
                onEdit(updatedTitle, updatedAbout); // Вызвать функцию обновления задачи
                modal.style.display = 'none';       // Закрыть модальное окно
            } else {
                alert('Поля не должны быть пустыми.');
            }
        };

        // Закрыть модальное окно
        const closeModal = document.querySelector('.close');
        closeModal.onclick = function() {
            modal.style.display = 'none';
        };
    }

    function init() {
        let element = _render();
        _setupListeners(element);
        return element;
    }

    return {
        init
    };
}

export default Options;
