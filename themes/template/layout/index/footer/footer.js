ctrl.startup = function() {
	if ('<%=bi.client.category%>' === 'mobile') {
		ctrl.sel(".footer").addClass('mobile');	
	}
};
