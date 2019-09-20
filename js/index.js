let list = []

function watcher (){
  let newTodo = document.getElementById ("submitButton");
  newTodo.addEventListener("click", (event) => {
    event.preventDefault();


    let textField = document.getElementById ("textfield");
    let newName = textField.value
    //check if the input is not empty
    if(newName != ""){
      list.push(newName)
      //console.log("List:"+list);
      //empty the textfield
      textField.value = ""
    }

    //create the reference
    let todoList = document.getElementById('todoList');

    //empty the checkboxes which are already at the list
    todoList.innerHTML = ""
    //loop
    for (let i = 0; i < list.length; i++){
      // inputs from the users
      todoList.innerHTML += "<input type='checkbox' name='todoElem' value='element"+i+"'>"+list[i]+"<br>"
    }


  });
}

function clearButton(){
  let clear = document.getElementById ("clearButton");
  clear.addEventListener("click", (event) => {
    event.preventDefault();

    let todoList = document.getElementsByName('todoElem');
    for (let  i = 0; i < todoList.length; i++){
      if( todoList[i].checked ==true){
        todoList[i].checked = false;
      }

    }

  });
}

function markallButton(){
  let mark = document.getElementById ("markButton");
  mark.addEventListener("click", (event) => {
    event.preventDefault();

    let todoList = document.getElementsByName('todoElem');
    for ( let i = 0; i < todoList.length; i++){
      if( todoList[i].checked ==false){
        todoList[i].checked = true;
      }

    }

  });
}

function deleteButton(){
  let del = document.getElementById ("deleteButton");
  del.addEventListener("click", (event) => {
    event.preventDefault();

    //create the reference
    let todoList = document.getElementById('todoList');

    //empty the checkboxes which are already at the list
    todoList.innerHTML = ""
    list = [];

  });
}


watcher();
clearButton();
markallButton();
deleteButton();
