var entries = [ ];
var addEntry = function (entry) {
	if (entry !== null && typeof entry !== "undefined") {
		entries.push(entry);
	}

};



var removeEntry = function (entryToDelete) {
	entries = entries.filter(function (item) {
		return item.id !== entryToDelete.id;
	})
};

var updateEntry = function (updatedEntry) {
	var index = -1;
	entries.forEach(function (item, idx){
		if (item.id === updatedEntry.id) {
			index = idx;
		}
	});
	if (index !== -1) {
		entries[index] = updatedEntry;
	}
}

var storeEntries = function () {
	localStorage.setItem("entries", JSON.stringify(entries));
}

var retrieveEntries = function () {
	var storeEntries = localStorage.getItem("entries");
	if (storeEntries !== null) {
		entries = JSON.parse(storeEntries);
	}
};

var makeEntry = function(overrides) {
	var newEntry = {
		type: "",
		date: new Date(),
		location: "",
		witnesses: 1,
		name: ''
	};
	
	if (typeof overrides !== "undefined")
	{
		var keys = Object.keys(overrides);
		keys.forEach(function (key) {
			newEntry[key] = overrides[key];
		});
	}

	newEntry.id = Math.random().toString(36).slice(2);

	return newEntry;
};

$(document).ready( function () {
	retrieveEntries();

})

// var myFilter = function (anArray, callback) {
// 		var newArray = [];
// 		for (var i=0; i<anArray.length;  i++) {
// 			if (callback(currentItem)){
// 				newEntry.push(currentItem);
// 					}
// 			};

// 		return newArray;
// }
// var myUpdate = function (anArray, callback) {
// 	var itemIndex = -1;
// 	for (var i=0; i<anArray.length; i++) {
// 		var currentItem = anArray[i];
// 		if (callback(currentItem)) {
// 			itemIndex = i;
// 		}
// 	}
// 	return itemIndex;
// }
