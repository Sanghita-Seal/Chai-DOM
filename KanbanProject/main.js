const columns = document.querySelectorAll(".column");
let draggedTask = null;

//pure ke pure document mein ek event listen karunga to do event delegation
document.addEventListener("click", (e) => {
  //if I click add button in any column
  if (e.target.classList.contains("add-btn")) {
    const text = prompt("Enter task1");

    if (!text) return;

    const task = document.createElement("div");
    task.className = "task";
    task.textContent = text;

    //If u want to amke any element dragable (true/ false)
    task.setAttribute("draggable", true);

    e.target.previousElementSibling.appendChild(task);
  }
});

document.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("task")) {
    draggedTask = e.target;
    e.target.classList.add("dragging");
  }
});
document.addEventListener("dragend", (e) => {
  if (e.target.classList.contains("task")) {
    e.target.classList.remove("dragging");
    draggedTask = null;
  }
});

columns.forEach((col)=>{
    col.addEventListener("dragover",(e)=>{
        e.preventDefault();//na likhle drag-drop prevent hbe
        col.classList.add("drag-over")
    }) //by default dragover is not allowed in browser
    col.addEventListener("dragleave",(e)=>{
        col.classList.remove("drag-over")
    }) 
    col.addEventListener("drop",(e)=>{
        col.classList.remove("drag-over")

        if(draggedTask){
            col.querySelector(".tasks").appendChild(draggedTask);
        }
    }) 
})
