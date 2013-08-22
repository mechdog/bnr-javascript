var DetailView = {
	modelObject: null,
	init: function(newModelObject) {
		this.modelObject=newModelObject;
	},
	render: function ($domElement) {
		$domElement.find("[name='type']").val(this.modelObject.type);
		$domElement.find("[name='location']").val(this.modelObject.location);
		$domElement.find("[name='date']").val(this.modelObject.date);
		$domElement.find("[name='witnesses']").val(this.modelObject.witnesses);
		$domElement.find("[name='name']").val(this.modelObject.name);

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

	var $form = $(".details-form");
	DetailView.init(creature);
	DetailView.render($form);
	
	// $("[name='type']").val(creature.type);
	// $("[name='location']").val(creature.location);
	// $("[name='date]").val(creature.date);
	// $("[name='witnesses']").val(creature.witnesses);
	// $("[name='name'").val(creature.name);


});

