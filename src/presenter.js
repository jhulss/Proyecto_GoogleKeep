import sumar from "./sumador";

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#nota-form");
const div = document.querySelector("#resultado_nota_div");
const ul = document.querySelector('ul');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerHTML = "<p>" + "<strong>" + titulo.value + "</strong>" + "<br>"+ descripcion.value +"</p>";
  li.appendChild(p);
  ul.appendChild(li);

});