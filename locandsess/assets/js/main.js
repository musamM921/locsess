const noteInupt = document.getElementById('noteInput');
const saveButton = document.getElementById('saveButton');
const savedNotesDiv = document.getElementById('savedNotes');

// Загрузка сохранненых заметок при запуске страницы
window.addEventListener('load', () => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    savedNotes.forEach(note => {
        const noteElement = document.createElement('p');
        noteElement.textContent = note;
        savedNotesDiv.appendChild(noteElement);
    });
});

//Обработчик кнопки сохранения 
saveButton.addEventListener('click', () => {
    const newNote = noteInput.value;
    if (newNote) {
        const noteElement = document.createElement('p');
        noteElement.textContent = newNote;
        savedNotesDiv.appendChild(noteElement);

        //сохранение заметки в LOCALSTORAGE
        const savedNotes = JSON.parse(localStorage.getItem('notes'))
        savedNotes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(savedNotes));

        // очистка поля ввода
        noteInput.value = '';
    }
});