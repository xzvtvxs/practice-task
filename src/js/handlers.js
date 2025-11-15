import { nanoid } from "nanoid";
import localStorageApi from "./local-storage-api";
import { renderTasklist } from "./render-tasks";


export function onTaskFormSubmit(e) { 
    e.preventDefault();
    const { taskName, taskDescription } = e.target.elements
    // console.log(taskDescription, taskName);
    
    const name = taskName.value.trim();
    const description = taskDescription.value.trim;
    if (!name || !description) {
        return alert('не все поля заполнены');
    }
    
    const task = {
        name,
        description,
        id: nanoid(),
    }
    console.log(task);

    localStorageApi.saveTask(task);
    renderTasklist(localStorageApi.getTasks())


    e.target.reset();
};