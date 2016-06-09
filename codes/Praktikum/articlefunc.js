function change_article(id){

//get all articles
var articles=document.getElementsByTagName("article");

//iterate over articles, set display to block if ID matches desired article
for (i=0; i<articles.length;i++){
	if (articles[i].id==id){
		articles[i].style.display = "block";
	}else{
		articles[i].style.display = "none";
	}
}
 
return true;
}