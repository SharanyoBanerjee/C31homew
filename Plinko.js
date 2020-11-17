class Plinkos {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      strokeWeight(1);
      stroke("white")
      fill("white");
      ellipse(0,0, this.r,this.r);
      pop();
    }
  };