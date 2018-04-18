//includes inner workings
$(document).on("pagecreate","#homepage",function(){
    
    alert ("Homepage created!");
  
  	$('#dice').on("tap",function(){
	alert ("Go to dice roll!");
    window.location.href = "#dicePage";
 	});                       

	$('#coin').on("tap",function(){
	alert ("Go to coin flip!");
    window.location.href = "#coinPage";
 	}); 

	$('#eight').on("tap",function(){
    alert ("Go to Magic 8 Ball!");
    window.location.href = "#magicPage";
  	});   


});

//dice roll page
$(document).on("pagecreate","#dicePage",function(){
    
    //test 
    alert ("dicePage created!");
    
  	$('#Backdice').on("tap",function(){
	alert ("Go to homepage!");
    window.location.href = "#homepage";
 	}); 
    
});

//six sided dice roll page
$(document).on("pagecreate","#defaultsix",function(){
    
    //test 
    alert ("defaultsix created!");
    
  	$('#Backsix').on("tap",function(){
	alert ("Go back to dice page!");
    window.location.href = "#dicePage";
 	}); 
    
});

//coinflip page
$(document).on("pagecreate","#coinPage",function(){
    
    //test
    alert ("coinPage created!");
    
  	$('#Backcoin').on("tap",function(){
	alert ("Go to homepage!");
    window.location.href = "#homepage";
 	}); 
    
});

// magic 8 page
$(document).on("pagecreate","#magicPage",function(){
    
    //test
    alert ("magicPage created!");
    
  	$('#Backmagic').on("tap",function(){
	alert ("Go to homepage!");
    window.location.href = "#homepage";
 	}); 
    
});