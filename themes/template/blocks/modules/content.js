exports.run = function(inData, callback)  {
	var  rtnData = {errCode: 0};
	if (inData._loc == 'en') {
		rtnData.value = {

			list: [
			{
				slogn: 'Features',
				title: 'Using',
				body: 'Jass can be used from the command line or as part of a web framework.'
			},
			{
				title: 'Using',
				body: 'Jass can be used from the command line or as part of a web framework.'
			},
			{
				title: 'Using',
				body: 'Jass can be used from the command line or as part of a web framework.'
			},
			{
				title: 'Using',
				body: 'Jass can be used from the command line or as part of a web framework.'
			},
			{
				title: 'Using',
				body: 'Jass can be used from the command line or as part of a web framework.'
			},
			{
				title: 'Using',
				body: 'Jass can be used from the command line or as part of a web framework.'
			}
			]
		};
	}
	else if (inData._loc == 'zh') {
		rtnData.value = {
			list: [
			{
				slogn: 'Features',
				title: 'Using',
				body: 'Jass can be used from the command line or as part of a web framework.'
			},
			{
				title: 'Using',
				body: 'Jass can be used from the command line or as part of a web framework.'
			},
			{
				title: 'Using',
				body: 'Jass can be used from the command line or as part of a web framework.'
			},
			{
				title: 'Using',
				body: 'Jass can be used from the command line or as part of a web framework.'
			},
			{
				title: 'Using',
				body: 'Jass can be used from the command line or as part of a web framework.'
			},
			{
				title: 'Using',
				body: 'Jass can be used from the command line or as part of a web framework.'
			}
			]
		};
	}
	callback( rtnData );
};
