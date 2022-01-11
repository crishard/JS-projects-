const enterTask = document.querySelector('.input-task');
const addTask = document.querySelector('.add-task');
const listTask = document.querySelector('.list-task');


// creating element li
function createLi(){
    const li = document.createElement('li');
    return li;
}
//capturing click on the key enter 
enterTask.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
        if(!enterTask.value) return;
        createTask(enterTask.value);
    }
});
//cleaning up input
function clearInput(){
    enterTask.value = '';
    enterTask.focus();
}
//creating button delete
function buttonClear(li){
    li.innerText += "   ";
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Delete task';
    buttonDelete.setAttribute('class', 'delete');
    buttonDelete.setAttribute('title', 'Delete this task')
    li.appendChild(buttonDelete);
}

//adding task to list
function createTask(textIput){
    const li = createLi();
    li.innerText = textIput;
    listTask.appendChild(li);
    clearInput();
    buttonDelete(li);
    saveTasks();
}

// adding the task
addTask.addEventListener('click', function(){
    if(!enterTask.value) return;
    createTask(enterTask.value);
});

//delete button functionality
document.addEventListener('click', function(e){
    const element = e.target;

    if(element.classList.contains('delete')){
        element.parentElement.remove();
        saveTasks();
    }
});

//saving tasks
function saveTasks(){
    const liTasks = saveTasks.querySelector('li');
    const toList = [];

    for(let task of liTasks){

        let taskText = task.innerText;
        taskText = taskText.replace('delete', '').trim();
        toList.push(taskText);
        

    }
        const taskJason = JASON.stringify(toList);
        localStorage.setItem('task', taskJason);

}

//read assignment and go back to ul
function addSavesTasks(){
    const tasks = localStorage.getItem('task');
    const toList = JSON.parse(tasks);

    for(let task of toList){
        createTask(task);
    }
}
addSavesTasks();