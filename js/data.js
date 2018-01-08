var dataObj = function(){
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.momScore = 0;
	this.gameOver = false;
	this.alpha = 0;

	
	
}

dataObj.prototype.draw = function(){
	
	var w = can1.width;
	var h = can1.height;
	var sum = this.score;
	
	
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = "white";
	ctx1.textAlign = "center";
	ctx1.font = "30px Verdana";
	ctx1.fillStyle = "white";
	ctx1.fillText("鱼妈妈的能量："+ this.momScore,200,h*0.5);
	for (var i = 0; i < babys.length; i++) {
		//ctx1.fillText("小鱼生命值： " + babys[i].live,200,30*(i+1));
		if(babys[i].babyBodyCount == 19)
			data.gameOver = true;
	}
	ctx1.fillText("score "+this.score,w*0.5,h);
	
	if (this.score / 100> babys.length && babys.length < 10) {
		var baby = new babyObj();
		baby.init();
		babys.push(baby);
	}
	if(this.gameOver){
		var timer = document.getElementById('txt').value;
		this.alpha += deltaTime * 0.0005;
		if(this.alpha > 1)
			this.alpha = 1;
		ctx1.fillStyle = "rgba(255,255,255," + this.alpha + ")";
		ctx1.fillText("GameOver",w*0.5,h*0.5);
		ctx1.fillText("你的得分：" +this.score,w*0.5,h*0.5 - 50);
		ctx1.fillText("你一共养了：" + babys.length + "条鱼",w*0.5,h*0.5 + 50);
		var db=openDatabase('mybd','1.0','text db','1024*1024');
		var name = document.getElementById("name").value;
		var score = this.score;
		var num = babys.length;
		if(num<10){
			db.transaction(function(contex){
			contex.executeSql('update lowRank set score='+score+' where name="'+name+'"');
			});
			db.transaction(function(contex){
			contex.executeSql('update lowRank set num='+num+' where name="'+name+'"');
			});
		}else if(num == 10){
			db.transaction(function(contex){
			contex.executeSql('update highRank set score='+score+' where name="'+name+'"');
			});
			db.transaction(function(contex){
			contex.executeSql('update highRank set timer='+timer+' where name="'+name+'"');
			});
		}
		
	}
}
dataObj.prototype.addScore = function (){
	this.score += this.fruitNum  * 10 * this.double ;
	
	this.fruitNum = 0;
	this.double = 1;
	
}
dataObj.prototype.addMomScore = function (){
	this.momScore += this.fruitNum  * 10 * this.double ;	

}
