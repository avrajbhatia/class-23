class Dustbin {

    constructor(x,y,width,height){

var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2

}
this.body=Bodies.rectangle(200,300,50,50,options);
world.add(world,this.body);

}
display(){
var pos= this.body.position;

rectMode(CENTRE);
fill(255);
rect(pos.x,pos.y,this,width,this.height);

}

}