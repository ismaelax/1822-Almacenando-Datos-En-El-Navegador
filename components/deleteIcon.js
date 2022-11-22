import { displayTasks } from "./readTasks.js";
//La funcion se encarga de agregar un elemento "i" y de agragar las clases 
const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

//deleteTask la funcion se manda a llamar cada que el usuario da click en el inico del cesto
const deleteTask = (id) => {
  const li = document.querySelector("[data-list]");
  //obtener la informacion que esta en local starage
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex((item)=> item.id == id);
  tasks.splice(index,1);
  console.log(tasks);
  li.innerHTML = ""; 
  //almacenar en locastaogar
  localStorage.setItem(("tasks"),JSON.stringify(tasks));
  displayTasks();

};

export default deleteIcon;
