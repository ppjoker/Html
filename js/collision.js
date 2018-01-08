function momFruitsCollision(){
	
	if(!data.gameOver){
		for (var i = 0; i < fruit.num; i++) {
			if(fruit.alive[i]){
				var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
				if(l < 800){
					fruit.dead(i);
					
					data.fruitNum++;
					mom.momBodyCount ++;
					if(mom.momBodyCount > 7){
						mom.momBodyCount =7;
					}
					if(fruit.fruitType[i] == "blue")
						data.double = 2;
					wave.born(fruit.x[i],fruit.y[i]);
					data.addMomScore();
				}
			}
	    }
	}
	
}


function momBabyCollision(baby){
	
	
	if(data.momScore > 200 && !data.gameOver){
		var l = calLength2(mom.x,mom.y,baby.x,baby.y);

	if(l < 1000){
		
		
		mom.momBodyCount = 0;
		data.addScore();

		halo.born(baby.x,baby.y);
		baby.babyBodyCount = 0;			
		data.momScore -= 200;
	}
	}
	 
}