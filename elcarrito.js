class elcarrito {

    constructor(x, y, side, speed) {
        this.x = x;
        this.y = y;
        this.side = side;
        this.speed = speed;
    }

    display() {

        //Cuerpo del carro 
        rectMode(CORNER);
        fill(255,0,0);
        rect(this.x, this.y, this.side + 10, this.side);

        //Llantas del carro rojo
        fill(0);
        rect(this.x, this.y - 6, 10, 5); //Llanta sup izq
        rect(this.x + 30, this.y - 6, 10, 5); //Llanta sup der
        rect(this.x, this.y + 30, 10, 5); //Llanta inf izq
        rect(this.x + 30, this.y + 30, 10, 5); //Llanta inf der
    }

    move() {

        switch (key) {

            case 'D':
            case 'd':
                if (keyIsPressed == true) {
                    this.x += this.speed;
                }
                break;

            case 'A':
            case 'a':
                if (keyIsPressed == true) {
                    this.x -= this.speed;
                }
                break;

            case 'W':
            case 'w':
                if (keyIsPressed == true) {
                    this.y -= this.speed;
                }
                break;

            case 'S':
            case 's':
                if (keyIsPressed == true) {
                    this.y += this.speed;
                }
                break;
        }
    }

    win() {

        //Texto del ganador
        fill(0, 255, 0);
        textSize(150);
        textAlign(CENTER);
        text('WIN!', 625, 250);
        fill(0);
        textSize(25);
        text('Press "Q" to restart', 625, 290);
    }

    gameOver() {

        //Texto del ganador
        fill(255, 0, 0);
        textSize(150);
        textAlign(CENTER);
        text('GAME OVER', 625, 250);
        /*fill(0);
        textSize(25);
        text('Press "Q" to restart', 625, 290);*/
        console.log(this.y);
    }

    restart() {
        switch (key) {
            case 'Q':
            case 'q':
                this.x = 50;
                this.y = 220;
                break;
        }
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}