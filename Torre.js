//Jose Gabriel Salazar 
//Juan David Pelaez 
//Santiago Velazco
class Torre {
    constructor(x, y, ancho, alto, vida) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.alto = alto
        this.vida = vida
        this.image = loadImage("/assets/Torres.png")
    }
    pintar(){
        image(this.image, this.x, this.y, this.ancho, this.alto)
    }
}