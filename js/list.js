var ListView = {
	modelObject: null,
	init: function (newModelObject) {	
		this.modelObject = newModelObject;
	},
	render: function ($domElement) {
		// var $row = $("<tr>");
		// var $cell;
		// $cell = $("<td></td>", {text: this.modelObject.type});
		// $row.append($cell);
		// $cell = $("<td></td>", {text: this.modelObject.location});
		// $row.append($cell);
		// $cell = $("<td></td>", {text: this.modelObject.date});
		// $row.append($cell);
		// $cell = $("<td></td>", {text: this.modelObject.witnesses});
		// $row.append($cell);
		// $cell = $("<td></td>", {text: this.modelObject.name});
		// $row.append($cell);
		// var id=this.modelObject.id;

		// $row.on('click', function () {
		// 				window.location ="details.html#"+id 
		// 		});

		// $domElement.append($row);

		var source = $("#entry-listing-template").html();
		var template = Handlebars.compile(source);
		$domElement.append(template(this.modelObject));

	}
};

$(document).ready(function () {
	var $table=$(".table");
	var $tbody = $("<tbody>");
	$(fixtures).each(function(idx, object) {

		ListView.init(object);
		ListView.render($tbody);


		// var $row=$("<tr>");

		// var $cell;
		// $cell = $("<td></td>", {text: object.type});
		// $row.append($cell);
		// $cell = $("<td></td>", {text: object.location});
		// $row.append($cell);
		// $cell = $("<td></td>", {text: object.date});
		// $row.append($cell);
		// $cell = $("<td></td>", {text: object.witnesses});
		// $row.append($cell);
		// $cell = $("<td></td>", {text: object.name});
		// $row.append($cell);

		// $tbody.append($row);

	});

	$table.append($tbody);

	$('tbody').on('click', "tr" , function ()
	{
		window.location ="details.html#"+this.id 

	})
		
		
		// $row.on('click', function () {
		// 				window.location ="details.html#"+id 
		// 		});



});