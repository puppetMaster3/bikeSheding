
console.log('starting')

$(document).ready(function() {
	setTimeout(function() {
		$('#header').show()
		$('#footer').show()
		console.log('ready')
		//doA()
	},250)
});	


function doA() {
    forward('Login', 'Login', onA)
}

function onA(id) {
	console.log('a')
	tweenOn(id)
	tweenOffOld()	
	
}//()

function doB() {
    forward('TList', 'TList', onB)
}

function onB(id) {
   console.log('b')
   tweenOn(id)
   tweenOffOld()

	if(true) return
	var options = {
		item: 'hacker-item'
	};

	var values = [
		{ name: 'Jonny', city:'Stockholm' }
		, { name: 'Jonas', city:'Berlin' }
	];

	var hackerList = new List('hacker-list', options, values);
}

function doC() {
    forward('Form', 'Form', onB)
}

function onC(id) {
	console.log('c')
	tweenOn(id)
    tweenOffOld()
}

function tweenOffOld() {
	var views = $('#kontainer').children()
    if(views.length>1)  {
        var old = views.get(0)
		TweenLite.to(old,1
            ,{css:{rotationY:90, transformOrigin:"-300% ",  rotation:1}
			,onComplete:function(){ console.log('off', views.length) } 
            });
    }//fi

}//()


function tweenOn(id) {
	TweenLite.from($('#'+id),.7
		,{css:{rotationY:-90, transformOrigin:"300% ",  rotation:-1}
		,onComplete:function(){} 
		});
	setTimeout(function() {
		cleanUpViews()
	},600)
    
}//()


