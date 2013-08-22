var RouteManager = (function () {
	var parseRoute = function () {
		var hash= window.location.hash;
		switch (hash) {
			case "#details":
				console.log("saw details dude");
				window.location.href = "details.html";
				break;
			case "#list":
				console.log("List this punk");
				window.location.href = "list.html";
				break;
			default:
				break;
		}
	};

	var __intialize = function () {
			$(window).on('hashchange', parseRoute);
	};

	return {
		init: __intialize
	}
})();
RouteManager.init();

