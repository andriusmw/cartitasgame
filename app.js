let iconos;

function cargarIconos(params) {}
//Para cargar los iconos

function generarTablero() {
  cargarIconos();
  let tablero = document.getElementById("tablero");
  let tarjetas = [];
  for (let i = 0; i < 24; i++) {
    tarjetas.push(`<div class="areaTarjeta">
      <div class="tarjeta">
        <div class="cara Trasera"><i class="fa-solid fa-dice-d6"></i></div>
        <div class="cara Superior">
          <i class="fa-solid fa-circle-question"></i>
        </div>
      </div>
    </div>`);
    //Genera 24 tarjetas recorriendo el array tarjetas
  }
  tablero.innerHTML = tarjetas.join("");
  //Muestra el html dentro de tablero
}
//Para generar el tablero
