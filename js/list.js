var TableView = {
	render: function ($domElement) {
		var source = $("#entry-table-template").html();
		var template = Handlebars.compile(source);
		$domElement.html(template());
	}
};


var ListView = {
	modelObject: null,
	init: function (newModelObject) {	
		this.modelObject = newModelObject;

	},
	render: function ($domElement) {

		var source = $("#entry-listing-template").html();
		var template = Handlebars.compile(source);
		$domElement.append(template(this.modelObject));
		var that = this;
		console.log(that.modelObject.id);
		$domElement.find('[data-id="'+ that.modelObject.id + '"]').on('click', function (){
			var id = $(this).attr("data-id");
			window.location.hash="details/" + id;

		})
	}
};


var ListController = function (objects) {
	var $container = $("section.container");
	$container.empty();

	TableView.render($container);

	// Create a table body
	var $tbody = $("tbody").first();
	$(objects).each(function (idx, object){
		ListView.init(object);
		ListView.render($tbody);
	})
};




