window.setTimeout(function() {
  var todos = [];

  var input = prompt("What would you like to do?");

  while (input !== "quit") {
    if (input === "list") {
      displayTodos();
    } else if (input === "new") {
      addTodo();
    } else if (input === "delete") {
      displayTodos();
      deleteTodo();
      displayTodos();
    }
    input = prompt("What would you like to do?");
  }
  console.log("Ok. You quit the app.");

  function displayTodos() {
    todos.forEach(function(todo, i) {
      console.log(i + ": " + todo);
    });
  }

  function addTodo() {
    var newToDo = prompt("Enter new todo: ");
    todos.push(newToDo);
  }

  function deleteTodo() {
    var delTodo = prompt("Enter the index of the todo you wish to delete: ");
    todos.splice(delTodo, 1);
    console.log("Your item has been deleted.");
  }
  // put all of your JS code from the lecture here
}, 500);
