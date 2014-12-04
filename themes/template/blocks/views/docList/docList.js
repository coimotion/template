var isClick = 0;

ctrl.startup = function() {	
	sideNav();
	$(".list:eq(0)").find('.subhead').css('color','#6D6D6D');	
};


function sideNav() {
	if ('<%=bi.client.category%>' === 'mobile') {        	
       	ctrl.setMobile();      	

		ctrl.sel(".sideNav").click(function() { 
			if (isClick){
				isClick=0;	
				ctrl.sideNavOff();
			} 
		    else {           
		    	isClick=1; 
		    	ctrl.sideNavOn();
		    }          
		}); 
	} 	   
};

ctrl.setMobile = function () {	
	ctrl.sel('.typeside').addClass('mobile');
   	$(".Doc .viewside").css('width', '0px');
   	ctrl.sel(".typeside").css('width', '0px');
   	ctrl.sel(".on").css('display','none');			
};

ctrl.sideNavOff = function () {	
   	$(".Doc .viewside").css('width', '0px');
   	ctrl.sel(".typeside").css('width', '0px');
   	ctrl.sel(".typeside").css('background','#f5f5f5');    	
   	ctrl.sel(".on").css('display','none');	
   	ctrl.sel("i.fa-chevron-right").css('display','none');
	ctrl.sel("i.fa-chevron-left").css('display','block');		
};

ctrl.sideNavOn = function () {	
   	$(".Doc .viewside").css('width', '500px');
   	ctrl.sel(".typeside").css('width', '500px');
   	ctrl.sel(".typeside").css('background','#d9d9d9');  	
   	ctrl.sel(".on").css('display','block');	
   	ctrl.sel("i.fa-chevron-right").css('display','block');
	ctrl.sel("i.fa-chevron-left").css('display','none');		
};