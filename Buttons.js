class Buttons{
    constructor(x,y,d){
    this.x = x;
    this.y = y;
    this.d = d;
    }
    show(){
        noStroke();
        fill(255,255,255);
        circle(this.x,this.y,this.d);
    }
    click(mx,my){
        let result = false;
        if(dist(this.x, this.y, mx, my)<this.d/2){
            console.log("click");
            result = true;
        }
        return result;
    }
}