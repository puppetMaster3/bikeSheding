
// mklink /d fw ..\zworkShop_ajaxApi\fw
                                                                                             1
declare var TweenLite; //animation  - tween
declare var S; //string
declare var List; //animation
declare var buzz; // sounds

var app:MyApp;

$(document).ready(function() {
	setTimeout(function() {
		$('#header').show()
		$('#footer').show()
		
		app = new MyApp()//global
		
	},250)
});	


class MyApp implements IAppNRouter {
	tlogin:Login;
	tlist:TList;
	tform:TForm;
	left:Left;
	mySound:any;

	constructor() {
		this.mySound = new buzz.sound('assets/sound1.mp3')
		this.tlogin = new Login()
		this.tlist  = new TList()
		this.tform  = new TForm()
		this.left   = new Left()

		this.left.init();//new

		// template code to set up the simple router
		initHasher(this)
		console.log('started')
	}

	dispatch(view:string,ctx:any):bool {
		this.mySound.play();
		console.log(view)

		hasher.setHash(view,ctx)//set the url
		return false

	}//()

	_onUrlChanged(newUrl, oldUrl):void {
		console.log('hasher ',newUrl)
		// first time 
		if(newUrl.trim().length<1) {
			console.log('empty dis')
			this.dispatch('login',null)
		}
			
		if(S(newUrl).endsWith('/')) {
			newUrl = newUrl.substring(0,newUrl.length-1);
			console.log(newUrl)
		}
		
		if('login'==newUrl)
			this.tlogin._transition(1);
		if('tlist'==newUrl)
			this.tlist._transition(1);
		if('tform'==newUrl)
			this.tform._transition(1);
		
	}//()
	
}//class



class Left implements IBasicPresenter {
	init():void {
		//open('Left',null)
	}

	_transition(transEnum:number):void {}

}

class Login implements IBasicPresenter  {

	_transition(transEnum:number):void {
	    forward('Login', 'Login', this.onLoaded)
	}
	
	onLoaded(id):void {
		tweenOn(id)
		tweenOffOld()
	}
}//class

class TList implements IBasicPresenter  {

	_transition(transEnum:number):void {
	    forward('TList', 'TList', this.onLoaded)
	}
	
	onLoaded(id):void {
		tweenOn(id)
		tweenOffOld()
		
		var options = {
			item: 'hacker-item'
		};
		var values = [
			{ name: 'Jonny', city:'Stockholm' }
			, { name: 'Jonas', city:'Berlin' }
		];
		var hackerList = new List('hacker-list', options, values);
	}
}//class

class TForm implements IBasicPresenter  {

	_transition(transEnum:number):void {
	    forward('Form', 'Form', this.onLoaded)
	}
	
	onLoaded(id):void {
		tweenOn(id)
		tweenOffOld()
	}
}//class

function tweenOffOld() {
	var views = $('#kontainer').children()
    if(views.length>1)  {
        var old = views.get(0)
		console.log(old)
		//old.css("z-index","-1");
		TweenLite.to(old,.4
            ,{css:{rotationY:90, transformOrigin:"-300% ", rotation:1
				,z:-100,width:1, height:1}
			,onComplete:function(){ console.log('off', views.length) } 
            });
    }//fi

}//()

function tweenOn(id) {
	$('#'+id).css("z-index","100");
	TweenLite.from($('#'+id),1.1
		,{css:{rotationY:-90, transformOrigin:"300% ", rotation:-1}
		,onComplete:function(){} 
		});
	setTimeout(function() {
		cleanUpViews()
	},600)
    
}//()

