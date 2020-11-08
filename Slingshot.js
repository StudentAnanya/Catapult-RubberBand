class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,95,29,125)
        image(this.sling2,180,95,29,75)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<170){
            strokeWeight(7);
            stroke(54,18,0);
            line(pointA.x-20, pointA.y, pointB.x-15, pointB.y+20);
            line(pointA.x-20, pointA.y, pointB.x+20, pointB.y+15);
      
        image(this.sling3,pointA.x-25,pointA.y-10,15,20)
            }else{
                strokeWeight(3);
            stroke(54,18,0);
            line(pointA.x-20, pointA.y, pointB.x-15, pointB.y+20);
            line(pointA.x-20, pointA.y, pointB.x+20, pointB.y+15);
      
        image(this.sling3,pointA.x-25,pointA.y-10,15,20)
            }
        }
    }
    
}