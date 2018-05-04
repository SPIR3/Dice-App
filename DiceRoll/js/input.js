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
    
    var Roll6;
    
    $('#RollDefault').on("tap",function(){
	Roll6 = Math.floor(Math.random() * 6) + 1;
    alert ("Roll Sucessfull! Results: " + Roll6);
 	}); 
    
    //on shake do this
    var onShake6 = function () {
    Roll6 = Math.floor(Math.random() * 6) + 1;
    alert ("Roll Sucessfull! Results: " + Roll6);      
    };
    //watch for shake and call on shake function
    shake.startWatch(onShake6, 40);
    
});

//four sided dice roll page_________________________________________________________________
$(document).on("pagecreate","#Roll4Page",function(){
    
    var Roll4;
    
    $('#Roll4').on("tap",function(){
	Roll4 = Math.floor(Math.random() * 4) + 1;
    alert ("Roll Sucessfull! Results: " + Roll4);
 	}); 
    
    //on shake do this
    var onShake4 = function () {
    Roll4 = Math.floor(Math.random() * 4) + 1;
    alert ("Roll Sucessfull! Results: " + Roll4);      
    };
    //watch for shake and call on shake function
    shake.startWatch(onShake4, 40);
    
});

//eight sided dice roll page_______________________________________________________________
$(document).on("pagecreate","#Roll8Page",function(){
    
    var Roll8;
    
    $('#Roll8').on("tap",function(){
	Roll8 = Math.floor(Math.random() * 8) + 1;
    alert ("Roll Sucessfull! Results: " + Roll8);
 	});
    
    //on shake do this
    var onShake8 = function () {
    Roll8 = Math.floor(Math.random() * 8) + 1;
    alert ("Roll Sucessfull! Results: " + Roll8);      
    };
    //watch for shake and call on shake function
    shake.startWatch(onShake8, 40);
    
});

//ten sided dice roll page_________________________________________________________________
$(document).on("pagecreate","#Roll10Page",function(){
    
    var Roll10;
    
    $('#Roll10').on("tap",function(){
	Roll10 = Math.floor(Math.random() * 10) + 1;
    alert ("Roll Sucessfull! Results: " + Roll10);
 	}); 
    
    //on shake do this
    var onShake10 = function () {
    Roll10 = Math.floor(Math.random() * 10) + 1;
    alert ("Roll Sucessfull! Results: " + Roll10);      
    };
    //watch for shake and call on shake function
    shake.startWatch(onShake10, 40);
    
});

//twelve sided dice roll page______________________________________________________________
$(document).on("pagecreate","#Roll12Page",function(){
    
    var Roll12;
    
    $('#Roll12').on("tap",function(){
	Roll12 = Math.floor(Math.random() * 12) + 1;
    alert ("Roll Sucessfull! Results: " + Roll12);
 	}); 
    
    //on shake do this
    var onShake12 = function () {
    Roll12 = Math.floor(Math.random() * 12) + 1;
    alert ("Roll Sucessfull! Results: " + Roll12);      
    };
    //watch for shake and call on shake function
    shake.startWatch(onShake12, 40);
      
});

//twenty sided dice roll page______________________________________________________________
$(document).on("pagecreate","#Roll20Page",function(){
    
    var Roll20;
    
    $('#Roll20').on("tap",function(){
	Roll20 = Math.floor(Math.random() * 20) + 1;
    alert ("Roll Sucessfull! Results: " + Roll20);
 	}); 
    
    //on shake do this
    var onShake20 = function () {
    Roll20 = Math.floor(Math.random() * 20) + 1;
    alert ("Roll Sucessfull! Results: " + Roll20);      
    };
    //watch for shake and call on shake function
    shake.startWatch(onShake20, 40);
    
});

//multi dice roll page_______________________________________________________________________
$(document).on("pagecreate","#MultiRoll",function(){

    Dice6 = {
        Dice:
        {
            name:"6-Sided",
            sides:"6"
        }
    };
    
    Dice4 = {
        Dice:
        {
            name:"4-Sided",
            sides:"4"
        }
    };
    
    Dice8 = {
        Dice:
        {
            name:"8-Sided",
            sides:"8"
        }
    };
    
    Dice10 = {
        Dice:
        {
            name:"10-Sided",
            sides:"10"
        }
    };
    
    Dice12 = {
        Dice:
        {
            name:"12-Sided",
            sides:"12"
        }
    };
    
    Dice20 = {
        Dice:
        {
            name:"20-Sided",
            sides:"20"
        }
    };
    
});

//coinflip page______________________________________________________________________________
$(document).on("pagecreate","#coinPage",function(){
    
    
    
});

// magic 8 page______________________________________________________________________________
$(document).on("pagecreate","#magicPage",function(){
    
    
    
});