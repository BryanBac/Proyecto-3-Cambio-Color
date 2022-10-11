let color = 0;
function cambiar_color() {
  console.log("primero:" + color);
  // Esto no es aleatorio, pero quería probar a ver si podía cambiarle el fondo xd
  if (color == 0) {
    document.getElementById("cuerpo").style.backgroundColor = "blueviolet";
    document.getElementById("texto").innerHTML = "Background-Color: blueviolet";
    color = color + 1;
  } else if (color == 1) {
    document.getElementById("cuerpo").style.backgroundColor = "red";
    document.getElementById("texto").innerHTML = "Background-Color: red";
    color = color + 1;
  } else if (color == 2) {
    document.getElementById("cuerpo").style.backgroundColor = "white";
    document.getElementById("texto").innerHTML = "Background-Color: white";
    color = 0;
  }
  console.log("segundo:" + color);
}
