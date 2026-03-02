function setup() {
  createCanvas(600, 400);//Tamany de l'àrea de dibuix
//El primer número es l'amplada en pixels i el ssegon número es l'alçada en pixels.
}

function draw() {
  let sinus=sin(frameCount*0.01)*20;
  //Let sinus es una variable, es un nom que conté números que canvian, es a dir, una variable numèrica on guardem nuúmeros que provenen de la funciò sinus que genera números entre -1 i +1. Si els números entre el -1 i +1 es multipliquen per 20, es transformen en numeros entre -20 i +20. No son aleatoris sino que aniran augmentant i disminuint sempre. Aquesta variable la puc sumar, multiplicar, dividir o canviar en qualsevol preametre de les funcions seguents. 
  background(164+sinus, 200+sinus, 245+sinus); //Color del fons del dibuix
  //El primer número es el nivell de vermell "R", el segon número es el nivell de verd "G" i el tercer número es l'intensitat de blau "B", per tant color RGB en html. Dintre del background o fons.
  fill(247+sinus,231+sinus,206+sinus);//Color de la cara exterior
  //En el cas de fill serà el mateix pero el que fa es omplir de color la figura següent que son dos ellipses
  ellipse(300,200,200,250);//Forma de la cara exterior
    fill(255,255,255);//Forma blanc dels ulls
  //El primer número es la posició x desde la cantunada superior esquerra que es al "0.0", el segon número es la posició "y" o alçada del centre de l'ellipse i el tercer número de l'amplada de l'ellipse. El quart número es l'alçada de l'ellipse.
  ellipse(250+sinus,170-sinus,25+sinus,25);//Forma de l'ull dret perquè x=250
  ellipse(350+sinus, 170-sinus,25+sinus,25);//Forma de l'ull esquerra perquè x=350
  fill(255, 110, 110);//Color de la boca
  arc(300+sinus, 250+sinus, 70+sinus, 70,0,PI);//Forma de la boca
}
