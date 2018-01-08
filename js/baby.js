var babyObj = function(){
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();

	this.babyTailTimer = 0;
	this.babyTailCount = 0;

	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 1000;

	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;
	this.endx;
	this.endy;
	
}
babyObj.prototype.init = function(){
	this.x = canWidth*0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;
	this.endx=Math.random()*500;
	this.endy=Math.random()*500;
	this.babyBody.src = "src/babyFade0.png";
	
}
babyObj.prototype.draw = function(){
	if(this.x >= this.endx-10&&this.y >=this.endy-10){
		this.endx=Math.random()*500+200;
		this.endy=Math.random()*500 + 200;
		}
		
	this.x =lerpDistance(this.endx,this.x,0.99);
	this.y =lerpDistance(this.endy,this.y,0.99);
	var  deltaX =this.endx- this.x;
	var  deltaY =this.endy- this.y;
	var beta = Math.atan2(deltaY,deltaX)+ Math.PI;
	this.angle = lerpAngle(beta,this.angle,0.6);

	this.babyTailTimer += deltaTime;
	if(this.babyTailTimer > 50){
		this.babyTailCount = (this.babyTailCount + 1 ) % 8;
		this.babyTailTimer %= 50;
	}

	this.babyEyeTimer += deltaTime;
	if(this.babyEyeTimer > this.babyEyeInterval){
		this.babyEyeCount = (this.babyEyeCount + 1 ) % 2;
		this.babyEyeTimer %= this.babyEyeInterval;

		if(this.babyEyeCount == 0){
			this.babyEyeInterval = Math.random() * 1500 + 2000;
		}else{
			this.babyEyeInterval = 200;
		}
	}

	this.babyBodyTimer += deltaTime;
	 if(this.babyBodyTimer > 900){
	 	
		this.babyBodyCount = this.babyBodyCount + 1 ;

		this.babyBodyTimer %= 400;
		if(this.babyBodyCount > 19){
			
			this.babyBodyCount = 19;
			
		}
	}

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	var babyBodyCount = this.babyBodyCount;
	ctx1.drawImage(babyBody[babyBodyCount],-babyBody[babyBodyCount].width * 0.5,0 );
	var babyTailCount = this.babyTailCount; 
	ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width * 0.5 + 27,5 );
	var babyEyeCount = this.babyEyeCount;
	ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width * 0.5, 20 );
	
	ctx1.restore();

	
}