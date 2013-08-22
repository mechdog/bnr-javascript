test("can do stupid arithmetic", function() {
	ok((1+1) === 2, "One plus one is two (idiot)");
});

// test("can do bad math", function (){
// 	ok ((1+1) === 3, "Your slow");
// });


module("Testing the Module");
test("testing makeEntry", function (){
	expect(5);
	var values= {
		type: 'chupacabra',
		location: 'Big Nerd Ranch',
		witnesses: 100
	};

	var myEntry = makeEntry(values);

	ok(typeof makeEntry() !== "undefined", "makeEntry returns an object" );
	equal(values.type, myEntry.type, "type was ovverriden");
	equal(values.location, myEntry.location, "location was ovverriden");
	equal(values.witnesses, myEntry.witnesses, "witnesses was ovverriden");
	// deepEqual(values, myEntry, "values and myEntry are equivalent");
	notDeepEqual(values, myEntry, "values and myEntry are not equivalent");
});

test("example async", function () {
	stop();
	expect(1);
	setTimeout(function () {
		ok(true, "Its true: we ran 3 seconds later");
		start();
	}, 3000)
});
