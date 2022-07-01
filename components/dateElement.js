export default (date) => {
  const dateelement = document.createElement('li');
  dateelement.classList.add('date');
  dateelement.innerHTML = date;
  return dateelement;
}