class Paper{
  constructor(x,y,radius){
     var option = {
          'isStatic' : false,
          'restitution' : 0.9,
          'friction': 0.5,
          'density':1.2
      }
      this.image = loadImage("images/paper.png")
      this.body =Matter.Bodies.circle(x,y,radius/2,option)
      
    this.radius = radius
    World.add(world,this.body)
  }
  display(){
    var pos =this.body.position;
    
    push();
    
    imageMode(RADIUS);
    strokeWeight(6)
    stroke("black")
    fill("darkgray");
    image(this.image,pos.x,pos.y, this.radius,this.radius);
    pop();
  }
  }
