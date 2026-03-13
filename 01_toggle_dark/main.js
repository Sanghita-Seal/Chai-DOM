const btn= document.getElementById("toggleButton");

btn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        btn.textContent = "Toggle Bright Mode";
    } else {
        btn.textContent = "Toggle Dark Mode";
    }
})