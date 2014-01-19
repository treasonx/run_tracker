define([], function () {

	return function () {
		console.log('setup renderer');
		return function (column) {
			console.log(arguments);
			return column;
		};
	};

});
