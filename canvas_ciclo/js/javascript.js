var d = document.getElementById("mi_dibujo");
var lienzo = d.getContext("2d"); //Este es el contexto del canvas
// console.log para ver los atribustos del lienzo
var ancho = d.width;
console.log(lienzo);
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var colorPicker = document.getElementById("color_Picker");
boton.addEventListener("click", dibujarPorClic);
var dirdibujo = document.getElementById("direcciondeldibujo");

/*while (l < lineas) {
  yi = 10 * l; // 10 es el espacio entre lineas
  xf = 10 * (l + 1); // se suma 1 al valor de l para quw comience en 10
  dibujarLinea(orangeFox, 0, yi, xf, 500); //reemplazamos los valores de los parametros yinicial y xfinal por las variables yi y xf
  console.log("linea " + l);
  l = l + 1; //se declar l + 1 para que cada que s dibuje una linea cambie el valor de Copyright (c) 2018 Copyright Holder All Rights Reserved.

}*/

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) { //En el paréntesis vamos a declarar las variables que van a cambiar cada que se ejecute la fucnción. En gral las funciones se ejectutan automáticamente excepto cuando los parámetros están declarados
  lienzo.beginPath(); // orden para comenzar a dibujar
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial); //punto inicial de la linea
  lienzo.lineTo(xfinal, yfinal); //punto de llegada de la línea
  lienzo.stroke();
  lienzo.closePath(); //finalizar la línea y dejar de dibujar
}

console.log(dibujarLinea);

function dibujarPorClic() {

  var colorLinea = colorPicker.value;
  var lineas = parseInt(texto.value); //cantidad de lineas
  var espacio = ancho / lineas;
  var l = 0; //contador de lineas
  var xi, yi, xf, yf, espaciopf; //yi = yinicial xf = xfinal

  for (l=0; l < lineas; l++) { //otra forma de hacerlo, de hecho es la forma mas comun de hacerlo
    yi = espacio * l; // 10 es el espacio entre lineas
    xf = espacio * (l + 1); // se suma 1 al valor de l para quw comience en 10
    espaciopf =  (ancho / lineas) + espacio / lineas;

    switch (dirdibujo.value) {
      case "tl":
        var xi = 0;
        var yf = ancho;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "tr":
        var xi = ancho;
        var xf = ancho - espacio * (l + 1);
        var yf = ancho;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "br":
        var xi = ancho;
        var xf = ancho - espacio * (l + 1);
        var yi = ancho - espacio * l;
        var yf = 0;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "bl":
        var xi = 0;
        var yi = ancho - espacio * l;
        var yf = 0;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "tc":
        var espacio = espaciopf;
        var xi = ancho / 2;
        var yi = 0;
        var xf = espacio * l;
        var yf = ancho;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "bc":
        var espacio = espaciopf;
        var xi = ancho / 2;
        var yi = ancho;
        var xf = espacio * l;
        var yf = 0;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "ml":
        var espacio = espaciopf;
        var xi = 0;
        var yi = ancho / 2;
        var xf = ancho
        var yf = espacio * l;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "mr":
        var espacio = espaciopf;
        var xi = ancho;
        var yi = ancho / 2;
        var xf = 0
        var yf = espacio * l;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      default:
      var espacio = espaciopf;
      var xi = ancho / 2;
      var yi = 0;
      var xf = espacio * l;
      var yf = ancho;
      dibujarLinea(colorLinea, xi, yi, xf, yf);
    }
  }

  //bordes
//  dibujarLinea(colorLinea, ancho/2, 0, ancho, ancho);

}
