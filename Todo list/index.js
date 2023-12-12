let taskInput = document.querySelector(".newtask Input");
let addButton = document.querySelector(".push");
let task = document.querySelector(".task");

addButton.onclick = function(){
  console.log(taskInput.value);
  if (taskInput.value.length == 0) {
    alert("please enter task");
  } else {
    task.innerHTML += `
    <li class="task">     
    <span Click = "this.classList.toggle('completed')">
    ${taskInput.value}
    </span>
    <button class="delete">
    <i class="far fa-trash-alt"></i>
    </button>
    </li>
    `;
    console.log(taskInput.value);
    taskInput.value = "";
    let currenTask = document.querySelectorAll(".delete");
    for (let i = 0; i < currenTask.length; i++) {
      currenTask[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};

