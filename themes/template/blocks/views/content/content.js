ctrl.startup = function() {	

	$( window ).scroll(function() {
	    var  y = window.pageYOffset;
	    if (y){
	    	ctrl.sel(".gotop").fadeIn(300);
	    }
	    else {
	    	ctrl.sel(".gotop").fadeOut(300);
	    }
	});

	if ('<%=bi.client.category%>' === 'mobile') { 	
		ctrl.sel(".container").addClass('mobile');
	}
};
