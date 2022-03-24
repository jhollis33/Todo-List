    function addtoList(event) {
      let input = document.querySelector("#add-input");
      let text = input.value;
      let newLI = document.createElement("li");
      newLI.innerText = text;

      let todolist = document.querySelector("#todo-list");
      todolist.appendChild(newLI);
      input.value = "";
    }

    let button = document.querySelector("#add-button");
    button.addEventListener("click", addtoList);