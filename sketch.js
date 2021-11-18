
//Jose Gabriel Salazar 
//Juan David Pelaez 
//Santiago Velazco


let taxiCol1 = [];
let taxiCol2 = [];
let taxiCol3 = [];
let taxiCol4 = [];

let car = new uber(30, 185, 30);

let gameOver;

function setup() {
  createCanvas(600, 400);

  gameOver = false;
  let y = 100;

  //Todas las columnas de taxis
  for (let i = 0; i < 4; i++) {
    taxiCol1.push(new Taxi(125, y, 30, 2));
    taxiCol2.push(new Taxi(225, y, 30, 2.5));
    taxiCol3.push(new Taxi(325, y, 30, 1.5));
    taxiCol4.push(new Taxi(425, y, 30, 2));
    y+=160;
  }
}

function draw() {
  background(165);
  let x = 75;
  
  //Se pinta la carretera
  for (let i = 0; i < 4; i++) {
    fill(123);
    noStroke();
    rectMode(CENTER);
    rect(x + 70, 0, 80, 900);
    x += 100;
  }

  //Pinta el carro rojo
  car.display();
  car.move();

  for (let i = 0; i < 4; i++) {

    //Pinta taxis columna 1
    taxiCol1[i].display();
    taxiCol1[i].move();

    //Pinta taxis columna 2
    taxiCol2[i].display();
    taxiCol2[i].move();

    //Pinta taxis columna 3
    taxiCol3[i].display();
    taxiCol3[i].move();

    //Pinta taxis columna 4
    taxiCol4[i].display();
    taxiCol4[i].move();

    //Choque  1
    if(taxiCol1[i].validate(car.getX(),car.getY()) == true){
      gameOver = true;
      location.reload();
      car.gameOver();
    }

    //Choque  2
    if(taxiCol2[i].validate(car.getX(),car.getY()) == true){
      gameOver = true;
      location.reload();
      car.gameOver();
    }

    //Choque  3
    if(taxiCol3[i].validate(car.getX(),car.getY()) == true){
      gameOver = true;
      location.reload();
      car.gameOver();
    }

    //Choque  4
    if(taxiCol4[i].validate(car.getX(),car.getY()) == true){
      gameOver = true;
      location.reload();
      car.gameOver();
    }
  } 

  //gano
  car.win();
  //restar
  car.restart();

  //Instrucciones 
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text('Use keys: "a" & "d" to move uber, avoid angry taxis', 260, 388);
}