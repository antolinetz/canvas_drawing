var d = document.getElementById("mi_dibujo");
var lienzo = d.getContext("2d"); //Este es el contexto del canvas
// console.log para ver los atribustos del lienzo
var ancho = d.width;
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

function resetLienzo() {
  lienzo.clearRect(0, 0, d.width, d.height);
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
        xi = 0;
        yf = ancho;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "tr":
        xi = ancho;
        xf = ancho - espacio * (l + 1);
        yf = ancho;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "br":
        xi = ancho;
        xf = ancho - espacio * (l + 1);
        yi = ancho - espacio * l;
        yf = 0;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "bl":
        xi = 0;
        yi = ancho - espacio * l;
        yf = 0;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "pftl":
        xi = 0;
        yi = 0;
        yf = ancho;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "pfbl":
        xi = 0;
        yi = ancho;
        yf = 0;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "pftr":
        xi = ancho;
        yi = 0;
        yf = ancho;
        xf = ancho - espacio * ( l + 1);
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "pfbr":
        xi = ancho;
        yi = ancho;
        yf = 0;
        xf = ancho - espacio * (l+1);
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "tc":
        espacio = espaciopf;
        xi = ancho / 2;
        yi = 0;
        xf = espacio * l;
        yf = ancho;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "bc":
        espacio = espaciopf;
        xi = ancho / 2;
        yi = ancho;
        xf = espacio * l;
        yf = 0;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "ml":
        espacio = espaciopf;
        xi = 0;
        yi = ancho / 2;
        xf = ancho;
        yf = espacio * l;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "mr":
        espacio = espaciopf;
        xi = ancho;
        yi = ancho / 2;
        xf = 0;
        yf = espacio * l;
        dibujarLinea(colorLinea, xi, yi, xf, yf);
        break;
      case "star":
      xi = ancho / 2;
      xf = ancho / 2 + (espacio / 2 * (l + 1));
      yi = yi / 2;
      yf = ancho / 2;
      dibujarLinea(colorLinea, xi, yi, xf, yf);
      dibujarLinea(colorLinea, xi, xf, yi, yf);
      dibujarLinea(colorLinea, xi, yi, espacio/2*(lineas -(l+1)), yf );
      dibujarLinea(colorLinea, xi, (ancho / 2) + (espacio/2*(lineas -l)), xf, yf );
      dibujarLinea(colorLinea, xi, 0, xi, ancho);
      dibujarLinea(colorLinea, 0, xi, ancho, xi);
      break;
      default:

    }
  console.log("linea " + l);
  }

  //bordes


}
