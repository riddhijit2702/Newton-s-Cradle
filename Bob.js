class Bob{

    constructor(x,y,r)
    {
    var options={
       
        density:1,
        restitution:0.1,
        friction:0.5,
    }
    this.x=x
    this.y=y
    this.r=r
    
    this.body=Bodies.circle(this.x,this.y,r/2,options)
    World.add(world,this.body)
    }
    display(){
    
    var paperpos=this.body.position
    
    push()
    translate(paperpos.x,paperpos.y)
   
    stroke("red")
    strokeWeight(2)
    fill("pink")
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop()
    
    
    
    
    }
    
    
    }