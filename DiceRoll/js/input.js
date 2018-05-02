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
    
    $('#MultiDice').on("tap",function(){
        alert ("Go to multi roll dice!");
        window.location.href = "#MultiRoll";
    });
    
    //got to default 6 roll page____________________________________________________________
    $('#Default6').on("tap",function(){
        window.location.href = "#DefaultRollPage";
    });
    
    // roll 4 sided dice____________________________________________________________________
    $('#D4dice').on("tap",function(){
        window.location.href = "#Roll4Page";
    });
    
    //roll 8 sided dice_____________________________________________________________________
    $('#D8dice').on("tap",function(){
        window.location.href = "#Roll8Page";
    });
    
    //roll 10 sided dice____________________________________________________________________
    $('#D10dice').on("tap",function(){
       window.location.href = "#Roll10Page";
    });
    
    //roll 12 sided dice____________________________________________________________________
    $('#D12dice').on("tap",function(){
        window.location.href = "#Roll12Page";
    });
    
    //roll 20 sided dice____________________________________________________________________
    $('#D20dice').on("tap",function(){
        window.location.href = "#Roll20Page";
    });
    
    //go back a page________________________________________________________________________
  	$('#Backdice').on("tap",function(){
	alert ("Go to homepage!");
    window.location.href = "#homepage";
 	}); 
    
});

//six sided dice roll page__________________________________________________________________
$(document).on("pagecreate","#DefaultRollPage",function(){
    
    //test 
    alert ("defaultsix created!");
    
    $('#RollDefault').on("tap",function(){
	var Roll6 = Math.floor(Math.random() * 6) + 1;
    alert ("Roll Sucessfull! Results: " + Roll6);
 	}); 
    
  	$('#BackDefault').on("tap",function(){
	alert ("Go back to dice page!");
    window.location.href = "#dicePage";
 	}); 
    
});

//four sided dice roll page_________________________________________________________________
$(document).on("pagecreate","#Roll4Page",function(){
    
    //test 
    alert ("four roll created!");
    
    $('#Roll4').on("tap",function(){
	var Roll4 = Math.floor(Math.random() * 4) + 1;
    alert ("Roll Sucessfull! Results: " + Roll4);
 	}); 
    
  	$('#Back4').on("tap",function(){
	alert ("Go back to dice page!");
    window.location.href = "#dicePage";
 	}); 
    
});

//eight sided dice roll page_______________________________________________________________
$(document).on("pagecreate","#Roll8Page",function(){
    
    //test 
    alert ("eight roll created!");
    
    $('#Roll8').on("tap",function(){
	var Roll8 = Math.floor(Math.random() * 8) + 1;
    alert ("Roll Sucessfull! Results: " + Roll8);
 	}); 
    
  	$('#Back8').on("tap",function(){
	alert ("Go back to dice page!");
    window.location.href = "#dicePage";
 	}); 
    
});

//ten sided dice roll page_________________________________________________________________
$(document).on("pagecreate","#Roll10Page",function(){
    
    //test 
    alert ("ten roll created!");
    
    $('#Roll10').on("tap",function(){
	var Roll10 = Math.floor(Math.random() * 10) + 1;
    alert ("Roll Sucessfull! Results: " + Roll10);
 	}); 
    
  	$('#Back10').on("tap",function(){
	alert ("Go back to dice page!");
    window.location.href = "#dicePage";
 	}); 
    
});

//twelve sided dice roll page______________________________________________________________
$(document).on("pagecreate","#Roll12Page",function(){
    
    //test 
    alert ("twelve roll created!");
    
    $('#Roll12').on("tap",function(){
	var Roll12 = Math.floor(Math.random() * 12) + 1;
    alert ("Roll Sucessfull! Results: " + Roll12);
 	}); 
    
  	$('#Back12').on("tap",function(){
	alert ("Go back to dice page!");
    window.location.href = "#dicePage";
 	}); 
    
});

//twenty sided dice roll page______________________________________________________________
$(document).on("pagecreate","#Roll20Page",function(){
    
    //test 
    alert ("twenty roll created!");
    
    $('#Roll20').on("tap",function(){
	var Roll20 = Math.floor(Math.random() * 20) + 1;
    alert ("Roll Sucessfull! Results: " + Roll20);
 	}); 
    
  	$('#Back20').on("tap",function(){
	alert ("Go back to dice page!");
    window.location.href = "#dicePage";
 	}); 
    
});

//multi dice roll page
$(document).on("pagecreate","#MultiRoll",function(){
    
    //test
    alert ("multiroll created!");
    
    $('#BackMulti').on("tap",function(){
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