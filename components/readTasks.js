import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import dateElement  from "./dateElement.js";
 

export const displayTasks = () => {
  
  const list = document.querySelector('[data-list]');
  const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];
  const dates = uniqueDates(tasksList);
  //arreglo de las fechas unicas dates
  orderDates(dates);
  //Por cada uno de los elementos de nuestro arreglo dates
  dates.forEach( date => {
    //Comparar la fecha del encabezado con la fecha de la lista
    const dateMoment = moment(date,"DD/MM/YYYY");
    list.appendChild(dateElement(date));
    //Ir al arreglo taskslist y generar la siguiente estructura
    tasksList.forEach((task) => {
      const taskDate = moment(task.dateFormat,"DD/MM/YYYY");      
      const diff = dateMoment.diff(taskDate);
      //si la diferencia entre dateMoment y taskDate es igual a 0 entonces es la misma fecha
      if( diff == 0 ){
        list.appendChild(createTask(task));       
      }
    });
  })
};

