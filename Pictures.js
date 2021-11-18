class Pictures {
    constructor(image){
        this.image = image;
    }
    
    show(){
        imageMode(CENTER);
        image(this.image, 150, 230);
       
    }
}