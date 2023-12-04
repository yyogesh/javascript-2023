// Event Handling - types , deep dive , wrt e-commerce , Common mistakes dev’s make ? // bubbling // prevent 

// const button = document.getElementById('myButton');

// button.addEventListener('click', function() {
//     alert('Button clicked!');
// });

// button.removeEventListener('click', () => {}, true)

// Mouse event: click, mouseover, mouseout
// Keyboard event: keydown, keyup, keypress
// Form Events: submit, change
// input: change, input, focus, blur
// document and window events: load, resize, unload

document.addEventListener('DOMContentLoaded', (event) => {
    // event.preventDefault()
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if(taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        const deleteBtn = document.createElement('button');

        taskSpan.textContent = taskText;
        deleteBtn.textContent = 'Delete';

        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        })

        taskSpan.addEventListener('click', () => {
            taskSpan.classList.toggle('completed')
        })
    }
})
