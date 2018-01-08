var aneObj = function(){

	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.angle= 0;
	this.amp =[];
	
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function(){
	
	for (var i = 0; i < this.num; i++) {
		
		this.rootx[i] = i*13 + Math.random()*20 + 275;
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - 250 + Math.random() * 50;
		this.amp[i] = Math.random() * 50 +50;
	}
	
}
aneObj.prototype.draw = function(){
	this.angle += deltaTime * 0.0008;
	var l = Math.sin(this.angle)* 1.3;
	ctx2.save();
	ctx2.lineWidth = 23;
	ctx2.lineCap = "round"
	ctx2.strokeStyle = "green";
	ctx2.globalAlpha = 0.6;
	for (var i = 0; i < this.num; i++) {
	
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight);
		this.headx[i] =this.rootx[i] + l * this.amp[i];
		ctx2.quadraticCurveTo(this.rootx[i],canHeight - 100,this.headx[i],this.heady[i]);
		
		ctx2.stroke();

	}
	ctx2.restore();
}
