class PlayerArcher {
    constructor(x, y, width, height, angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        playerArcherimage=("./playerArcher.png");
    }
    show(){
        push();
        imageMode(CENTER);
        pop()
        image(this.base,70,20,200,200);
        noFill();
      }
}