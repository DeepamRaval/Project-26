class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		//this.image = loadImage("paper this.image.png")
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperposition=this.body.position;
			
			//image=(this.image, paperposition.x, paperposition.y);
			//this.body.addImage("paper", this.image);

			push()
			translate(paperposition.x, paperposition.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,90, 90);
			pop()
			
	}

}