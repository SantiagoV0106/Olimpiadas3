//Jose Gabriel Salazar 
//Juan David Pelaez 
//Santiago Velazco

let hair = [];
let eyes = [];
let mouth = [];
let clothes = [];
let changeH;
let changeE;
let changeM;
let changeC;
let skin;
let face;
let eyebrow;
let nose;

let buttons = [];

function setup() {
  createCanvas(300, 300);
  skin = new Pictures(loadImage("/Pictures/Hair/cuerpo.png"));
  face = new Pictures(loadImage("/Pictures/Hair/cara.png"));
  eyebrow = new Pictures(loadImage("/Pictures/Hair/cejas.png"));
  nose = new Pictures(loadImage("/Pictures/Hair/nari.png"));
 
  changeH = 1;
  changeE = 1;
  changeM = 1;
  changeC = 1;
  //cabello
  hair[0] = new Pictures(loadImage("/Pictures/Hair/pelo1.png"));
  hair[1] = new Pictures(loadImage("/Pictures/Hair/pelo1.png"));
  hair[2] = new Pictures(loadImage("/Pictures/Hair/pelo2.png"));
  hair[3] = new Pictures(loadImage("/Pictures/Hair/pelo3.png"));
  hair[4] = new Pictures(loadImage("/Pictures/Hair/pelo4.png"));
  hair[5] = new Pictures(loadImage("/Pictures/Hair/pelo4.png"));
  //ojos
  eyes[0] = new Pictures(loadImage("/Pictures/Eyes/ojo1.png"));
  eyes[1] = new Pictures(loadImage("/Pictures/Eyes/ojo1.png"));
  eyes[2] = new Pictures(loadImage("/Pictures/Eyes/ojo2.png"));
  eyes[3] = new Pictures(loadImage("/Pictures/Eyes/ojo3.png"));
  eyes[4] = new Pictures(loadImage("/Pictures/Eyes/ojo4.png"));
  eyes[5] = new Pictures(loadImage("/Pictures/Eyes/ojo4.png"));
  //boca
  mouth[0] = new Pictures(loadImage("/Pictures/Mouth/boca1.png"));
  mouth[1] = new Pictures(loadImage("/Pictures/Mouth/boca1.png"));
  mouth[2] = new Pictures(loadImage("/Pictures/Mouth/boca2.png"));
  mouth[3] = new Pictures(loadImage("/Pictures/Mouth/boca3.png"));
  mouth[4] = new Pictures(loadImage("/Pictures/Mouth/boca4.png"));
  mouth[5] = new Pictures(loadImage("/Pictures/Mouth/boca4.png"));

  //facha
  clothes[0] = new Pictures(loadImage("/Pictures/Clothes/ropa1.png"));
  clothes[1] = new Pictures(loadImage("/Pictures/Clothes/ropa1.png"));
  clothes[2] = new Pictures(loadImage("/Pictures/Clothes/ropa2.png"));
  clothes[3] = new Pictures(loadImage("/Pictures/Clothes/ropa3.png"));
  clothes[4] = new Pictures(loadImage("/Pictures/Clothes/ropa4.png"));
  clothes[5] = new Pictures(loadImage("/Pictures/Clothes/ropa4.png"));
  

  for (let i = 0; i < 4; i++) {
    buttons[i] = new Array(4);
    for (let j = 0; j < 4; j++) {
      buttons[i][j] = new Buttons((220*i)+40,(40*j)+150,15);
    }
  }
}

function draw() {
  background(87,35,100);

  fill(255);
  textSize(20);
  text("Feel free to change", 70,80);
  textSize(15);
  text("Make me happy", 100,100);
 
  skin.show();
  face.show();
  nose.show();
  eyebrow.show();
  eyes[changeE].show();
  mouth[changeM].show();
  clothes[changeC].show();
  hair[changeH].show();
  
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 4; j++) {
      buttons[i][j].show();
    }
  }

  if (changeH === 5) {
    changeH = 1;
  }
  if (changeH === 0) {
    changeH = 5;
  }
  if (changeE === 5) {
    changeE = 1;
  }
  if (changeE === 0) {
    changeE = 5;
  }
  if (changeM === 5) {
    changeM = 1;
  }
  if (changeM === 0) {
    changeM = 5;
  }
  if (changeC === 5) {
    changeC = 1;
  }
  if (changeC === 0) {
    changeC = 5;
  }  

}

function mousePressed() {
  if (buttons[0][0].click(mouseX,mouseY)) {
    changeH--;
  }
  if (buttons[1][0].click(mouseX,mouseY)) {
    changeH++;
  }
  if (buttons[0][1].click(mouseX,mouseY)) {
    changeE--;
  }
  if (buttons[1][1].click(mouseX,mouseY)) {
    changeE++;
  }
  if (buttons[0][2].click(mouseX,mouseY)) {
    changeM--;
  }
  if (buttons[1][2].click(mouseX,mouseY)) {
    changeM++;
  }
  if (buttons[0][3].click(mouseX,mouseY)) {
    changeC--;
  }
  if (buttons[1][3].click(mouseX,mouseY)) {
    changeC++;
  }
 
}

