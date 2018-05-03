//includes inner workings________________________________________________________________________
$(document).on("pagecreate","#homepage",function(){
  
  	$('#dice').on("tap",function(){
    window.location.href = "#dicePage";
 	});                       

	$('#coin').on("tap",function(){
    window.location.href = "#coinPage";
 	}); 

	$('#eight').on("tap",function(){
    window.location.href = "#magicPage";
  	});   


});

//dice roll page_______________________________________________________________________________
$(document).on("pagecreate","#dicePage",function(){
    
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
    
});

//six sided dice roll page__________________________________________________________________
$(document).on("pagecreate","#DefaultRollPage",function(){
    
    $('#RollDefault').on("tap",function(){
	var Roll6 = Math.floor(Math.random() * 6) + 1;
    alert ("Roll Sucessfull! Results: " + Roll6);
 	}); 
    
    //on shake do this
    var onShake = function () {
    var Roll6 = Math.floor(Math.random() * 6) + 1;
    alert ("Roll Sucessfull! Results: " + Roll6);      
    }
    //watch for shake and call on shake function
    shake.startWatch(onShake, 40);
    
});

//four sided dice roll page_________________________________________________________________
$(document).on("pagecreate","#Roll4Page",function(){
    
    $('#Roll4').on("tap",function(){
	var Roll4 = Math.floor(Math.random() * 4) + 1;
    alert ("Roll Sucessfull! Results: " + Roll4);
 	}); 
    
});

//eight sided dice roll page_______________________________________________________________
$(document).on("pagecreate","#Roll8Page",function(){
    
    $('#Roll8').on("tap",function(){
	var Roll8 = Math.floor(Math.random() * 8) + 1;
    alert ("Roll Sucessfull! Results: " + Roll8);
 	}); 
    
});

//ten sided dice roll page_________________________________________________________________
$(document).on("pagecreate","#Roll10Page",function(){
    
    $('#Roll10').on("tap",function(){
	var Roll10 = Math.floor(Math.random() * 10) + 1;
    alert ("Roll Sucessfull! Results: " + Roll10);
 	}); 
    
});

//twelve sided dice roll page______________________________________________________________
$(document).on("pagecreate","#Roll12Page",function(){
    
    $('#Roll12').on("tap",function(){
	var Roll12 = Math.floor(Math.random() * 12) + 1;
    alert ("Roll Sucessfull! Results: " + Roll12);
 	}); 
      
});

//twenty sided dice roll page______________________________________________________________
$(document).on("pagecreate","#Roll20Page",function(){
    
    $('#Roll20').on("tap",function(){
	var Roll20 = Math.floor(Math.random() * 20) + 1;
    alert ("Roll Sucessfull! Results: " + Roll20);
 	}); 
    
});

//multi dice roll page_______________________________________________________________________
$(document).on("pagecreate","#MultiRoll",function(){

    
});

//coinflip page______________________________________________________________________________
$(document).on("pagecreate","#coinPage",function(){
    
    
    
});

// magic 8 page______________________________________________________________________________
$(document).on("pagecreate","#magicPage",function(){
    
    
    
});