
const parent = document.getElementById("parent");
const child= document.getElementById("child");
const body=document.body;


body.addEventListener("click", function(){
    console.log("body clicked!");
},false)
parent.addEventListener("click", function(){
    console.log("parent clicked!");
    
},false)
child.addEventListener("click", function(){
    console.log("child clicked!");
    
},false) //If the third argument is false = event bubbling( niche se upar event flow)
//If true => event capturing (upar se niche flow)


