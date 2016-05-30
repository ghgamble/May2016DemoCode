angular.module('toDoList',[])
  .controller('todoController',todoController)

  function todoController(){
    var todo = this

    todo.title = "To Do List"

    todo.items = [{name:"Gym", complete: false}, {name:"Tanning", complete: false}, {name:"Laundry", complete: false}]

    todo.addItem = function(){
      console.log("Adding Item!!!!")
      todo.items.push(todo.newItem)
      todo.newItem = {}
    }


  }
