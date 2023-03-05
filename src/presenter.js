import sumar from "./sumador";

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#nota-form");
const div = document.querySelector("#resultado_nota_div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + "<strong>" + titulo.value + "</strong>" + "<br>"+ descripcion.value +"</p>";
});
