import { v4 as uuidv4 } from 'uuid';


function Project(name, description) {
  this.id = uuidv4();
  this.name = name;
  this.description = description;
  this.active = false;
  this.todoList = [];
}

Project.prototype.addTodo = function(todo) {
  this.todoList.push(todo);
}

Project.prototype.toggleActive = function(){
  this.active = !this.active;
}

Project.prototype.getTodoList = function() {
  return this.todoList;
}

// This deletes it from the list, what about deleting the todo object?
Project.prototype.deleteTodoItem = function(id) {
  const index = this.todoList.findIndex(item => item.id == id);
  this.todoList.splice(index, 1);
}

Project.prototype.getTodoItem = function(id) {
  return this.todoList.find(item => item.id == id)
}



function Todo(title, description, priority, dueDate) {
  this.id = uuidv4();
  this.title = title;
  this.description = description;
  this.priority = priority;
  this.complete = false;
  this.dueDate = dueDate; // may need to create the date here from the date string
}

Todo.prototype.sayID = function() {
  console.log(this.id)
}

Todo.prototype.toggleComplete = function() {
  this.complete = !this.complete;
}


export {
  Todo,
  Project

}


//Brainstorm UI actions and how they relate to the data

// I click delete from within the edit todo modal.
  /*
    delete button has data-id of that todo item
    find project with status set to active
    iterate through obj.todoList and find the todo item with the matching id
      entire function should be a prototype of the project object as the todo items
      are created inside a function and appended to list.
    delete this todo item (from the list).

    how would this work if all projects are active?
    function should continue going over all active projects and only
    stop execution once the todo item is found.  if active -> enter and search. else next project. only return/halt execution if found.
  */

// On page load / when 'All' projects is clicked
/*
  all projects are set to active.
  call render todos which displays all active project's todos.
  event listener for 'All' will need speacial considerations
*/