import { uniqueDates } from '../services/date.js';
import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

//Arrow function,addtast se encargara de agregar tarea a la lista
 export const addTask = (evento) => {
  evento.preventDefault();
  const list = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  //Obtener el evento del usuario en la etiqueta calendario
  const calendar = document.querySelector('[data-form-date]');

  const value = input.value;
  //Obtenemos el valor del fecha
  const date = calendar.value;
  //La variable dateFormat tendra el formato de fecha que queremos
  const dateFormat = moment(date).format("DD/MM/YYYY");

  if ( value == "" || date == ""){
    return
  }
  input.value = '';
  calendar.value='';
  
  const complete = false;

  //clave-valor 
  const taskObj = {
    value,
    dateFormat,
    complete,
    id: uuid.v4()
  };
  //Por cada click en el boton agregar, inicializar en vacio 
  list.innerHTML = "";

  //taskList sera igual a un arreglo, || [] en caso de que tasks sea null
  //indefinido, daler un valor por defecto en este caso seria un arreglo vacio 
  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  //metodo push, agregar a nuestro arrglo informacion 
  taskList.push(taskObj);
  //sesionStorage, la informacino vive o persiste mientras la pestaña este abierta
  //localStorage solo almacena la ultima que se registra
  //Almacenomso el arreglo 
  localStorage.setItem('tasks',JSON.stringify(taskList));
  //mandar a llamar readTasks()
  displayTasks();

};


//createTask = se encarga de hace toda la estructura html, tomar los datos y ponerlos donde corresponde 
//la clase createTask, se manda a llamar cuando el usuario le da click en agrar nueva tarea, tambien cuando nuestro programa lee las tareas al entrar a la plataforma
export const createTask = ({value,dateFormat,complete,id}) => {
  const task = document.createElement('li');
      task.classList.add('card');
  const check = checkComplete(id);
  if(complete ){
    check.classList.toggle('fas');
    check.classList.toggle('completeIcon');
    check.classList.toggle('far');
    
  }
  //backticks
  const taskContent = document.createElement('div');
  const titleTask = document.createElement('span');
      titleTask.classList.add('task');
      titleTask.innerText = value;
      taskContent.appendChild(check);
      taskContent.appendChild(titleTask);
  // task.innerHTML = content;
  //Crear etiqueta de html
  //const dateElement = document.createElement("span");
  //agregarle el contenido de dateFormat
  //dateElement.innerHTML = dateFormat;
  task.appendChild(taskContent);
  //Agrear elemento de fecha
  //task.appendChild(dateElement);
  task.appendChild(deleteIcon(id));
  return task;
};
