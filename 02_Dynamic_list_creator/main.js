const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {

    if(input.value === "" || input.value.trim()===""){
        alert("To do is empty");
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.classList.add("task")
    taskText.textContent = input.value;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", () => {
        li.remove();
    });

    // Double click → edit task
    taskText.addEventListener("dblclick", () => {
        taskText.contentEditable = true;
        taskText.focus();
    });

    // Stop editing when pressing Enter
    taskText.addEventListener("keypress", (e) => {
        if(e.key === "Enter"){
            taskText.contentEditable = false;
            e.preventDefault();
        }
    });

    li.appendChild(taskText);
    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
});