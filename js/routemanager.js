var RouteManager = (function () {
	var parseRoute = function () {
		var hash= window.location.hash;
		var id=null;
		if (hash.indexOf("/") !== -1) {
			id = hash.split("/")[1];
			hash = hash.split("/")[0];
		}

		switch (hash) {
			case "#details":
				console.log("saw details dude");
				DetailController(findEntry(id));
				break;
			case "#list":
				console.log("List this punk");
				ListController(entries);
				break;
			default:
				ListController(entries);
				break;
		}
	};

	var __intialize = function () {
			$(window).on('hashchange', parseRoute);
			parseRoute();
	};

	return {
		init: __intialize
	}
})();
// RouteManager.init();

