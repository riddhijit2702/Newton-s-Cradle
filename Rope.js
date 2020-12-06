 class Rope
    {
        constructor(bodyA,bodyB,offsetX,offsetY)
        {
    
       this.offsetX=offsetX;
       this.offsetY=offsetY; 
        
        var options=
        {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            lenght:100,
           pointB:{x:this.offsetX,y:this.offsetY}
         
        }
        
    
        
    
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    
        }
    
        display()
       { if(this.bodyA){ 
           line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x+this.chain.pointB.x,this.chain.bodyB.position.y+this.chain.pointB.y);}
           
        
        
    }
        
        fly(){
            this.bodyA = null;
        
    }
}
