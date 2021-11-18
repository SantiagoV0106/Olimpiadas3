

//Jose Gabriel Salazar 
//Juan David Pelaez 
//Santiago Velazco

class jugador {
    constructor() {
        this.x = 315;
        this.y = 540;


    }
    show() {
        fill(0);
        rectMode(CENTER);
        rect(this.x, this.y, 70, 70);

    }

    shoot() {
        return true;
    }

    move(dir) {
        switch (dir) {
            case "RIGHT":
                this.x += 50
                break;
            case "LEFT":
                this.x -= 50
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