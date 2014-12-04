ctrl.startup = function() {	
	if ('<%=bi.client.category%>' === 'mobile') {	
		ctrl.sel(".content").addClass('mobile');	
	}
};
