const colores = {
  0: "white",
  1: "blue",
  2: "blueviolet",
  3: "red",
  4: "black",
};

function getRandomInt() {
  return Math.floor(Math.random() * 5);
}

let color = 0;
function cambiar_color() {
  var valores = Object.values(colores);
  aleatorio = getRandomInt();
  console.log(aleatorio + ": " + valores[aleatorio]);
  document.getElementById("cuerpo").style.backgroundColor = valores[aleatorio];
  document.getElementById("texto-color").innerHTML = valores[aleatorio];
  if (aleatorio == 4) {
    aleatorio = 0;
    document.getElementById("texto-color").style.color = valores[aleatorio];
  } else if (aleatorio == 0) {
    aleatorio = 4;
    document.getElementById("texto-color").style.color = valores[aleatorio];
  } else {
    document.getElementById("texto-color").style.color = valores[aleatorio + 1];
  }
}
