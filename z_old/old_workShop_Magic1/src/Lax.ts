


$(document).ready(function() {
	setTimeout(function() {
		$('#header').show()
		$('#footer').show()
		console.log('starting')
		
	},110)
});	

function doA() {
	console.log('a')
	var but = $('#a')
	TweenLite.to(but,1, {x:10})
	but = $('#b')
	TweenLite.to(but,1, {x:10})
	
	return false
}

