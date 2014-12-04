var  menuShow = false;

ctrl.startup = function() {	
	if ('<%=bi.client.category%>' === 'mobile') {
		ctrl.setMobile();				
	};
	
	hover();
};

ctrl.setMobile = function () {	
	ctrl.sel("#header").addClass('mobile');
	ctrl.sel("#header").css('height','100px');	
	ctrl.sel("button.mobMenu").show();
	ctrl.sel("#menu").hide();
	$('.Banner .wrapper').css('margin-top','99px');				
};

function hover() {
	$( ".bu" ).hover(function() {		
		$( this ).find('.active').show();
	},function() {
		$( this ).find('.active').hide();					
	});
}

ctrl.clickMenu = function() {
	if (menuShow) {
		ctrl.sel("#menu").hide();
		menuShow = false;
	}
	else {
		ctrl.sel("#menu").show();
		ctrl.sel("#menu").css('float', 'left');
		menuShow = true;
	}
};

