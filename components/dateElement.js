export default (date) => {
  //Crear la estructura HTML para el DOM
  const dateElement = document.createElement('li');
  dateElement.classList.add('date');
  dateElement.innerHTML=date;
  return dateElement;
}

