class Box extends BaseClass {
  constructor(x, y, width, height){
    var options = {
      friction:13,
      'density':5,
      
  }
    super(x,y,width,height,options);
    this.visibility= 255;
    World.add(world, this.body);
    
  
  }
  display(){
    if (this.body.speed<3){
      super.display();
      } else {
        World.remove(world, this.body);
        push();
        this.visibility= this.visibility-0.5;
        pop();
        
      }
      
  }
};
