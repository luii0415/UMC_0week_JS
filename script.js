document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const todoList = document.getElementById("todoList");
  const doneList = document.getElementById("doneList");

  // ENTER 키를 눌렀을 때 할 일을 추가
  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && taskInput.value.trim() !== "") {
      addTask(taskInput.value.trim());
      taskInput.value = "";
    }
  });

  // 해야 할 일을 추가하는 함수
  function addTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "완료";
    completeBtn.addEventListener("click", () => {
      moveToDone(li);
    });

    li.appendChild(completeBtn);
    todoList.appendChild(li);
  }

  // 해야 할 일에서 해낸 일로 이동시키는 함수
  function moveToDone(taskItem) {
    const completeBtn = taskItem.querySelector("button");
    if (completeBtn) {
      completeBtn.remove();
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.addEventListener("click", () => {
      deleteTask(taskItem);
    });

    taskItem.appendChild(deleteBtn);
    doneList.appendChild(taskItem);
  }

  function deleteTask(taskItem) {
    taskItem.remove();
  }
});
