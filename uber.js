class uber{

    constructor(x,y,diameter){
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.speed = 3.5;
    }

    display(){
        
        //Cuerpo del carro rojo
        rectMode(CORNER);
        fill( 0);
        rect(this.x, this.y, this.diameter + 10, this.diameter);

        //Llantas del carro rojo
        fill(0);
        rect(this.x, this.y -6, 10, 5); //Llanta sup izq
        rect(this.x + 30, this.y -6, 10, 5); //Llanta sup der
        rect(this.x, this.y + 31, 10, 5);  //Llanta inf izq
        rect(this.x + 30, this.y + 31, 10, 5); //Llanta inf der
    }

    restart() { //Volver a empezar
        switch (key) {
            case 'Q':
            case 'q':
                this.x = 50;
                this.y = 200;
                break;
        }
    }

    move(){
        switch (key) {
            
            case 'D':
            case 'd':
                if(keyIsPressed==true){
                this.x += this.speed;
                }
                break;

            case 'A':
            case 'a':
                if(keyIsPressed==true){
                this.x -= this.speed;
                }
                break;  
            }
    }

    win() {

        if(this.x >= 500){
        //Texto del ganador
        fill(0, 300, 0);
        textSize(150);
        textAlign(CENTER);
        text('WIN!', 300, 225);
        fill(255);
        textSize(25);
        text('Press "Q" to die again', 300, 250);
        }
    }

    gameOver() {

        //Texto del ganador
        fill(700, 0, 0);
        textSize(70);
        textAlign(CENTER);
        text('TRY AGAIN M8', 300, 225);
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    } 
}