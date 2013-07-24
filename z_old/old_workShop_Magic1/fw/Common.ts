// v1

//fw section
interface IBasicPresenter {// ~mediator to manage a view(s)/template(s)
	_transition(transEnum:number):void; //enum
}

declare var hasher;//simple router

interface IAppNRouter { // starts the app ~ action controller 
	_onUrlChanged(newUrl, oldUrl):void;
} 

function initHasher(inst) {
	hasher.changed.add(inst._onUrlChanged,inst)
	hasher.initialized.add(inst._onUrlChanged,inst)
	hasher.prependHash = '!' // SEO
	hasher.init()
}



// ajax/cors section 
var baseServiceUrl:string = 'http://localhost:8080/api/'

function call(srv:string, msg:any, callingview_, cb_) {// cors
    var smsg:string = JSON.stringify(msg)
    console.log('remote')
    console.log(smsg)

    var req = new XMLHttpRequest()
	var eurl:string = baseServiceUrl 
		+srv+ '?data='	
		+smsg+'&viewer='
		+ callingview_
		
    req.open('POST',eurl,true)

    req.onreadystatechange = function () {
        if (this.readyState == 4) {
            var dat = this.response
            console.log('response')
            console.log(dat)
            if(cb_!=null && dat!=null&& dat.length>3) {
                var ret = JSON.parse(dat)
                cb_(ret)
            }//fi
            else console.log(dat)
        }//fi
    }
    req.send('XMLHttpRequest2')
}//()

class DMsg {
	/*
	 * Common Domain Specific Msg, Event, JSON for Name Value Pairs Dictionary 
	 */
	static ERROR:string = "error_";
	static ARRAY:string = "array_";
	static TYPE: string = "type_"; // ex type of message for route

	putArray(array:Array):void {
		this[DMsg.ARRAY]=array;
	}

	putError(err:String):void {
		this[DMsg.ERROR]=err
	}
	
	putType( t:String):void {
		this[DMsg.TYPE]=t
	}
}


// single page section
declare var $;//selector
declare var List;//template
declare var TweenLite;//selector


function forward(ht,id,cb_) {
    $.get('view/'+ht+'.html', function(resp_) {
		console.log(ht)
        $('#kontainer').append(resp_)
        var cur=$('#'+id)
		var gid = id + Math.floor(Math.random()*9999999) //GUID 1 in 10mm
        cur.attr('id', gid)//change to guid - we could have many
		console.log(cur.attr('id'))
		if(!cur.attr('id')) throw new Error('id not found')
		if(cb_) cb_(gid)
    })//$.get
}//()

function cleanUpViews() {
    var views = $('#kontainer').children()
    console.log(views.length)
    while(views.length>1)  {
        var old = views.get(0)
        old.parentNode.removeChild(old)
        views = $('#kontainer').children()
    }
    console.log(views.length)
}//()

