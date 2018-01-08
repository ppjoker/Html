//1.创建数据库(数据库名，版本，描述信息，大小)
var db=openDatabase('mybd','1.0','text db','1024*1024');


db.transaction(function(contex){
contex.executeSql('create table if not exists lowRank(name unique,num,score)');
});
db.transaction(function(contex){
contex.executeSql('create table if not exists highRank(name unique,timer,score)');
});

db.transaction(function(contex){
contex.executeSql('drop table low');
});

