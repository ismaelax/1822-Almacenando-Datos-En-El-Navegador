export const uniqueDates = (tasks)  =>{
  const unique = [];
  tasks.forEach(task => {
    if (!unique.includes(task.dateFormat)){
      unique.push(task.dateFormat);
    }
  });
  return unique;
};

export const orderDates = ( dates ) => {
  //metodo para ordernar los elementos de un arreglo
  return dates.sort((a,b)  => {
    const fistDate = moment(a,"DD/MM/YYYY");
    const secondDate = moment(b,"DD/MM/YYYY");
    return fistDate - secondDate
    
  })
}

