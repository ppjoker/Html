var tab = document.getElementById("low");
			
			var db=openDatabase('mybd','1.0','text db','1024*1024');
			
			var user = new Array();
			db.transaction(function(contex){
				contex.executeSql('select * from lowRank',[],function(con,data){
					var rows=data.rows.length,i;
					console.log('总共行数是：'+rows);
					 
					var obj;
					for(var i=0;i<rows;i++){
					
						obj = {name:data.rows.item(i).name,num:data.rows.item(i).num,score:data.rows.item(i).score};
						user.push(obj);
						console.log(user[i].name);
						//str += '<TR><TD>'+data.rows.item(i).name+'</TD><TD></TD><TD>'+data.rows.item(i).score+'</TD></TR>';
					
					}
					console.log(user[0].name);
					for (var i = 0; i < user.length - 1; i++) {  
		            // 定义内层循环  
		            for (var j = 0; j < user.length - i - 1; j++) {  
		                if (user[j].score < user[j + 1].score) { // 比较相邻元素  
		                    // 下面的三行代码用于交换两个元素  
		                    var temp = user[j];  
		                    user[j] = user[j + 1];  
		                    user[j + 1] = temp;  
		                }  
		            }  
		            
		        	}  
		        	console.log(user[0].name);
					var str="";
					for(var i=0;i<user.length;i++){
						console.log(user[i].name);
					
					str += '<TR><TD>'+user[i].name+'</TD><TD>'+user[i].num+'条</TD><TD>'+user[i].score+'</TD></TR>';
					}
					tab.innerHTML = str;
					//tab.innerHTML = str;
				});
			});
