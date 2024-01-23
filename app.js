let numeroRandom = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;
console.log(numeroRandom);
function nombrarElementos(elemento, texto) {
  let elementos = document.querySelector(elemento);
  elementos.innerHTML = texto;
  return;
}

function valorInput() {
  let numeroUsuarioInput = parseInt(
    document.getElementById("numeroUsuario").value
  );

  if (numeroRandom === numeroUsuarioInput) {
    nombrarElementos(
      "p",
      `Acertaste el numero en ${intentos} ${intentos > 1 ? "veces" : "vez"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //Cuando no acierta
    if (numeroUsuarioInput > numeroRandom) {
      nombrarElementos("p", "El numero es menor");
    } else {
      nombrarElementos("p", "El numero es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function condicionesIniciales() {
  nombrarElementos("h1", "Juega al numero Secreto");
  nombrarElementos("p", `Indica un numero del 1 al ${numeroMaximo}!`);
  numeroRandom = numeroAletorio();
  intentos = 1;
}

function limpiarCaja() {
  document.querySelector("#numeroUsuario").value = "";
}

function numeroAletorio() {
  let numeroSorteado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroSorteado);
  console.log(listaNumeroSorteado);
  //Y sorteamos todos los numeros?
  if (listaNumeroSorteado.length == numeroMaximo) {
    nombrarElementos("p", "Ya se asginaron todos los elementos posibles");
  } else {
    //Si el numero generado esta incluido en la listaNumeroSorteado
    if (listaNumeroSorteado.includes(numeroSorteado)) {
      return numeroAletorio();
    } else {
      listaNumeroSorteado.push(numeroSorteado);
      return numeroSorteado;
    }
  }
}

function reiniciandoJuego() {
  //limpiando Caja
  limpiarCaja();
  //Se indican los titulos
  //Inicializamos numero aletorio
  //Inicializamos numero de intentos
  condicionesIniciales();

  //Removemos la activacion del boton
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
condicionesIniciales();
