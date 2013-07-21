

function doA() {
    forward('List', 'List', onA)
}

function onA() {
	console.log('loaded')
	
	var options = {
		item: 'hacker-item'
	};

	var values = [
		{ name: 'Jonny', city:'Stockholm' }
		, { name: 'Jonas', city:'Berlin' }
	];

	var hackerList = new List('hacker-list', options, values);
		
}//()

function doB() {
    forward('Form', 'Form', onB)
}

function onB() {
    $("#dom1").fitText();
}



doB()

