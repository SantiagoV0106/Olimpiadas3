class Rectangulo {
    constructor(x, y, base, altura){
    this.x = x;
    this.y = y;
    this.base = base;
    this.altura = altura;
    this.r = 255;
    this.g = 255;
    this.b =255;
    }
    pintar(){
        noStroke();
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.base, this.altura);
    }
    mover(){
       if(keyIsPressed) {
        switch(key){
            case 'w'://UP
                this.y -= 8;
                break;
            case 's'://DOWN
                this.y += 8;
                break;
        }
        }
    }
    getY() {
        return this.y;
    }
    setY(y) {
        this.y = y;
    }
    
}