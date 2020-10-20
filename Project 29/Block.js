class Block{
	constructor(x,y,w,h){
		var options={
			isStatic:true			
		}
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display(){
			
	    var Blockpos=this.body.position;		
		push()
		translate(Blockpos.x, Blockpos.y);
		rectMode(CENTER);
		fill(132);
		rect(0,0,this.w, this.h);
		pop()
			
	}

}