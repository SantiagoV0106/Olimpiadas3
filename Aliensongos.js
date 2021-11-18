//Jose Gabriel Salazar 
//Juan David Pelaez 
//Santiago Velazco
class Aliensongos {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = random(0, 255);
        this.g = random(0, 255);
        this.b = random(0, 255);
        this.tam = 50;
        this.fall = false;
        this.die = false;
    }


    show() {
        noStroke();
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.tam, this.tam);
        this.move();
    }

    move() { //Aliens start falling 
        if (this.fall === false) {
            this.y += random(2, 1);
        }
    }

    die() {
        this.die = true;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getTam() {
        return this.tam;
    }
}