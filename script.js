const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value==='')
    {    
     alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saceData();
}

listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        
        saveData();
         return;
    }
    
    let li = e.target.closest("li");
    if(li){
        li.classList.toggle("checked");
        saveData();
    }
});
function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();