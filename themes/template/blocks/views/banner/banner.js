ctrl.startup = function() {
	if ('<%=bi.client.category%>' === 'mobile') { 		
		ctrl.sel(".wrapper").addClass('mobile');			
	}
	nav();
};

function nav() {
	var serial=0;
	ctrl.sel('#sequence ul li').hide();
	ctrl.sel('#sequence ul li:eq(0)').show();	

    // mobile & screen(max-width:820px)
    ctrl.sel('.prev').click(function() {
    	serial--;
	    if(serial<0){serial=0};
        ctrl.sel("#sequence ul li").hide();
        ctrl.sel("#sequence ul li:eq("+serial+")").fadeIn(1000);        
    });
    ctrl.sel('.next').click(function() {
    	serial++;
	    if(serial>2){serial=2};
        ctrl.sel("#sequence ul li").hide();
        ctrl.sel("#sequence ul li:eq("+serial+")").fadeIn(1000);        
    });       

    // desktop & tablet
    ctrl.sel('#nav li').click(function(event) {
        var number=$(this).index();        
        ctrl.sel("#sequence ul li").hide();
        ctrl.sel("#sequence ul li:eq("+number+")").fadeIn(1000);

        ctrl.sel("#nav li span").removeClass("active");
        ctrl.sel("#nav li span:eq("+number+")").addClass("active");             
    }); 

    // Timer
    ctrl.sel("#sequence").everyTime(7000, timer);
    function timer(){
        serial++;
        if(serial>2){serial=0};       
        ctrl.sel("#sequence ul li").hide();
        ctrl.sel("#sequence ul li:eq("+serial+")").fadeIn(3000);
        ctrl.sel("#nav li span").removeClass("active");
        ctrl.sel("#nav li span:eq("+serial+")").addClass("active");
    }; 
};

