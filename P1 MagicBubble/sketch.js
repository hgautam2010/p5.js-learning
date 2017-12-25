let bubble1 = [];
function setup()
{
	var cnv = createCanvas(1000, 600);
	cnv.parent('sketch-holder');
}
function mouseDragged()
{
	bubble1.push(new Bubble(mouseX, mouseY));
}
function draw()
{
	background(100);
	for(var i = bubble1.length - 1; i >= 0; --i)
	{
		if(bubble1[i].isAlive())
		{
			bubble1[i].move();
			bubble1[i].show();
			bubble1[i].life -= 1;
		}
		else
		{
			bubble1.splice(i, 1);
		}
	}
}
class Bubble
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.life = 200;
		this.color = {
			r: 231,
			g: 43,
			b: 103
		};
		this.xs = random(-4,4);
		this.ys = random(-4,3);
	}
	move()
	{
		this.x += this.xs;;
		this.y += this.ys;
		this.check();
	}
	show()
	{
		fill(this.color.r,this.color.g,this.color.b,this.life)
		noStroke();
		ellipse(this.x,this.y,20,20);
	}
	check()
	{
		if(this.x < 0)
		{
			this.x = 0;
			this.xs *= -1;
		}
		if(this.x > width)
		{
			this.x = width;
			this.xs *= -1;
		}
		if(this.y > height)
		{
			this.y = height;
			this.ys *= -1;
		}
		if(this.y < 0)
		{
			this.y = 0;
			this.ys *= -1;
		}
	}
	isAlive()
	{
		if(this.life > 0)
			return true;
		return false;
	}
}
