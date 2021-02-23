class Pins{
    constructor(x,y,width,height){
      var options = {
        isStatic: false,
        restitution: 0.5,
        friction: 0,
        density: .1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage('bowlingpin.png')

    World.add(world, this.body);
}

    display(){
        var angle = this.body.angle
        push()
        rotate(angle);
        //translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        fill("pink");
        image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
        pop()
    }
} 