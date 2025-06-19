//1 To-do List
export const task = document.getElementById("task");
export const submitBtn = document.getElementById("submit-btn");
export const arr = [];

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //UL
    const taskList = document.createElement("ul");
    taskList.className = "task-container";
    document.body.appendChild(taskList);
    // console.log(taskList);

    //LI
    const taskListItems = document.createElement("li");
    taskListItems.className = "task";
    taskListItems.innerText = task.value.trim();
//If-Else Statement
    if(taskListItems.innerText === "") {
        alert("Enter the Task");
    }

    else{
        taskList.appendChild(taskListItems);
        console.log(taskListItems);
        arr.push(taskListItems.innerText);
        
        localStorage.setItem("Tasks",arr);
        task.value = "";
        console.log(arr);
    }

});

2 
