const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const inputText = document.getElementById("text");
const output = document.getElementById("output");

let selectedTask = null;

addBtn.addEventListener("click", () => {
  if (inputText.value === "") return;

  const li = document.createElement("li");
  li.textContent = inputText.value;

  li.addEventListener("click", () => {
    if (selectedTask) {
      selectedTask.style.backgroundColor = "";
    }

    selectedTask = li;
    selectedTask.style.backgroundColor = "yellow";
  });

  output.appendChild(li);
  inputText.value = "";
});

deleteBtn.addEventListener("click", () => {
  if (selectedTask) {
    selectedTask.remove();
    selectedTask = null;
  }
});
