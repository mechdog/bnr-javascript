var DetailView = {
	modelObject: null,
	init: function(newModelObject) {
		this.modelObject=newModelObject;
	},
	render: function ($domElement) {
 		var source = $("#entry-details-template").html();
        var template = Handlebars.compile(source);
        $domElement.append(template(this.modelObject));

	}

}

$(document).ready(function () {
	var id= parseInt(
			window.location.hash.substr(1, window.location.hash.length-1)
			,10);


	var creature;

	fixtures.map(function(obj) { 

			if (obj.id === id) {
				creature = obj;
			}

	   }  );

	var $form = $(".detail-form");
	DetailView.init(creature);
	DetailView.render($form);
	
	// $("[name='type']").val(creature.type);
	// $("[name='location']").val(creature.location);
	// $("[name='date]").val(creature.date);
	// $("[name='witnesses']").val(creature.witnesses);
	// $("[name='name'").val(creature.name);


});

