// document.body.style.display = 'none';
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// when we hit enter in the input field.

inputBox.addEventListener('keydown',(e)=>{

    if (e.key === 'Enter') {
        addTask();
    }
})


function addTask() {

    if (inputBox.value === '') {
        alert('The entered task is empty');
    }
    else {
        let ele = document.createElement('li');
        ele.innerHTML = inputBox.value;
        listContainer.appendChild(ele);
        let sp = document.createElement('span');
        sp.innerHTML = "\u00d7";
        ele.appendChild(sp);
    }
    saveData();
    inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    console.log("function was called");
    console.log(e.target.tagName);
    if (e.target.tagName === 'LI') {
        console.log("li was called");

        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === 'SPAN')   {
        console.log("span was called");
        e.target.parentElement.remove();
    }
    saveData();
    console.log("we reach here");
}, true)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();