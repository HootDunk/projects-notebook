import { v4 as uuidv4 } from 'uuid';

// Test whether local storage has been populated
if(localStorage.length){
  console.log("we have stuff")
  console.log(JSON.parse(localStorage.getItem('user')));
}

let allProjects = [];

const newProject = (name, description) => {
  const id = uuidv4();
  let active = false;
  const todoList = [];

  // const getTodoList = () => todoList;
  // const addTodo = (newItem) => todoList.push(newItem);
  return {id, name, description, active, todoList};
}

const newTodo = (title, description, priority, dueDate) => {
  const id = uuidv4();
  let completed = false;
  // will likely need to handle the date string either here or in the controller
  return {title, description, priority, dueDate, completed, id}
}


const test = newProject("test project", "testing the project factory");

allProjects.push(test)



const firstTodo = newTodo("first todo", "testing the todo factory", "low", "12/20/20")

test.todoList.push(firstTodo)
console.log("all projects: ", allProjects)
// localStorage.setItem("user", JSON.stringify(allProjects));


// Need to figure out the expanded view with javascript.
// try and do so efficiently so you aren't looping through the entire task collection.
// first element child could be useful here, check it out!
// need to consider the eventlistener of the extended task view as well

// Dropdown functionality for todo items
const taskSummary = Array.from(document.getElementsByClassName('accordian'));
taskSummary.forEach(task => {
  console.log(task.nextElementSibling)
  task.addEventListener("click", (e) => {
    if (e.target.className != "todo-completed"){
      task.nextElementSibling.classList.toggle("inactive");
    }
  })
})

