let color = 0;
function cambiar_color() {
  console.log("primero:" + color);
  // Esto no es aleatorio, pero quería probar a ver si podía cambiarle el fondo xd
  if (color == 0) {
    document.getElementById("cuerpo").style.backgroundColor = "blueviolet";
    document.getElementById("texto-color").innerHTML = "blueviolet";
    document.getElementById("texto-color").style.color = "white";
    color = color + 1;
  } else if (color == 1) {
    document.getElementById("cuerpo").style.backgroundColor = "red";
    document.getElementById("texto-color").innerHTML = "red";
    document.getElementById("texto-color").style.color = "white";
    color = color + 1;
  } else if (color == 2) {
    document.getElementById("cuerpo").style.backgroundColor = "white";
    document.getElementById("texto-color").innerHTML = "white";
    document.getElementById("texto-color").style.color = "black";
    color = 0;
  }
  console.log("segundo:" + color);
}
