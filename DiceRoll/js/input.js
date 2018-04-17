
$(document).on("pagecreate","#homepage",function(){
  
  	$('#dice').on("tap",function(){
	alert "Go to dice roll!";
 	});                       

	$('#coin').on("tap",function(){
	alert "Go to coin flip!";
 	}); 

	$('#eight').on("tap",function(){
    alert "Go to Magic 8 Ball!";
  	});   


});