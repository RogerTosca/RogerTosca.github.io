let mic;//Crea una variable pel micròfon
function setup() {
  createCanvas(600, 400);//Tamany de l'àrea de dibuix
//El primer número es l'amplada en pixels i el ssegon número es l'alçada en pixels.
  mic=new p5.AudioIn();//El micròfon es una entrada de audio amb p5
  mic.start();//Activa el micròfon 
}

function draw() {
  let vol=mic.getLevel();
  let h=map(vol,0,1,0,400);
  background(mouseX-225, mouseY-95, mouseY+30); //Color del fons del dibuix
  //El primer número es el nivell de vermell "R", el segon número es el nivell de verd "G" i el tercer número es l'intensitat de blau "B", per tant color RGB en html. Dintre del background o fons.
  fill(247, 231, 206);//Color de la cara exterior
  //En el cas de fill serà el mateix pero el que fa es omplir de color la figura següent que son dos ellipses
  ellipse(mouseX,mouseY,200+h,225+h);//Forma de la cara exterior
    fill(255,255,255);//Color blanc dels ulls
  //El primer número es la posició x desde la cantunada superior esquerra que es al "0.0", el segon número es la posició "y" o alçada del centre de l'ellipse i el tercer número de l'amplada de l'ellipse. El quart número es l'alçada de l'ellipse.
ellipse(mouseX-50,mouseY-30,35,35);//Forma de l'ull dret perquè x=250
ellipse(mouseX+50,mouseY-30,35,35);//Forma de l'ull esquerra perquè x=350
  fill(0,0,0)
  ellipse(mouseX-50,mouseY-30,25,25)
  ellipse(mouseX+50,mouseY-30,25,25)
  line(mouseX+20,mouseY-60,mouseX+70, mouseY-70);
  line(mouseX-80,mouseY-70,mouseX-30,mouseY-60);
  fill(255-h*5,0,0)
  arc(mouseX,mouseY+50, 70, 70+h,0,PI);//Forma de la boca
}
