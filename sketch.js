
//Jose Gabriel Salazar 
//Juan David Pelaez 
//Santiago Velazco


let generalCarFile1 = [];
let generalCarFile2 = [];
let generalCarFile3 = [];
let generalCarFile4 = [];
let generalCarFile5 = [];

let superCar = new elcarrito(50, 220, 30, 4);

let gameOver;

function setup() {
  createCanvas(1400, 400);

  gameOver = false;
  let x = 50;

  for (let i = 0; i < 5; i++) {
    generalCarFile1.push(new carrosmalos(x, 25, 30, 3.6)); //Fila 1
    generalCarFile2.push(new carrosmalos(x, 105, 30, 3)); //Fila 2
    generalCarFile3.push(new carrosmalos(x, 185, 30, 3.2)); //Fila 3
    generalCarFile4.push(new carrosmalos(x, 265, 30, 4)); //Fila 4
    generalCarFile5.push(new carrosmalos(x, 345, 30, 3)); //Fila 5
    x += 300;
  }
}

function draw() {
  background(255);
  let y = 0;

  //suelo
  for (let i = 0; i < 5; i++) {
    fill(200);
    stroke(0);
    rect(0, y, 1400, 90);
    y += 80;
  }

  for (let i = 0; i < 5; i++) {
    
    //Choque fila 1
    if(generalCarFile1[i].validate(superCar.getX(),superCar.getY()) == true){
      gameOver = true;
      superCar.gameOver();
      superCar.restart();
      location.reload();
    }

    // fila 1
    generalCarFile1[i].display();
    generalCarFile1[i].move();

    //Choque fila 2
    if(generalCarFile2[i].validate(superCar.getX(),superCar.getY()) == true){
      gameOver = true;
      superCar.gameOver();
      superCar.restart();
      location.reload();
    }

    //fila 2
    generalCarFile2[i].display();
    generalCarFile2[i].move();

    //Choque fila 3
    if(generalCarFile3[i].validate(superCar.getX(),superCar.getY()) == true){
      gameOver = true;
      superCar.gameOver();
      superCar.restart();
      location.reload();
    }

    //fila 3
    generalCarFile3[i].display();
    generalCarFile3[i].move();

    //Choque fila 4
    if(generalCarFile4[i].validate(superCar.getX(),superCar.getY()) == true){
      gameOver = true;
      superCar.gameOver();
      superCar.restart();
      location.reload();
    }

    //fila 4
    generalCarFile4[i].display();
    generalCarFile4[i].move();

    //Choque fila 5
    if(generalCarFile5[i].validate(superCar.getX(),superCar.getY()) == true){
      gameOver = true;
      superCar.gameOver();
      superCar.restart();
      location.reload();
    }
    //fila 5
    generalCarFile5[i].display();
    generalCarFile5[i].move();
  }

  //volver a empezar
  if (superCar.getX() >= 1250) {
    superCar.win();
    superCar.restart();
  }

  //carro color
  superCar.display();
  superCar.move();

  //Indicaciones
  fill(0);
  textSize(15);
  text('Use this keys m8: w, a, s, d', 20,395);


}