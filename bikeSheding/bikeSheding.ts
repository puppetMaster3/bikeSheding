/* v0.0712 - 95% of times you should not change this file
 (c) bikeSheding  @ http://github.com/puppetMaster3/bikeSheding
*/

console.log('bS')

//presenter section
interface IModPresenter {// ~ like direct mediator to manage a view(s)/template(s) and hold state
	_transition(transEnum:number, ctx:any):void; //enum
}

declare var hasher;//simple router

interface IAppNRouter { // starts the app + action controller
	_onUrlChanged(newUrl, oldUrl):void;
	dispatch(view:string, ctx:any):bool; //returns FALSE -for buttons
}

function initHRouter(inst) {
	console.log('hRouter ready')
 	hasher.changed.add(inst._onUrlChanged, inst)
	hasher.initialized.add(inst._onUrlChanged, inst)
	hasher.prependHash = '!' // SEO
	hasher.init()
}

/*
Single page section
*/
var viewDir:string;

function open(ht, id, cb_):void {
    console.log(viewDir)
	$.get(viewDir + ht + '.html', function (resp_) {
		console.log(ht)
        $('#'+id).append(resp_)

        if (cb_) cb_()
	})//$.get
}//()

/*
 *  returns #id
 */
function forward(ht, id, cb_):void {
    //console.log(viewDir) // todo: tx?
	$.get(viewDir + ht + '.html', function (resp_) {
		//console.log(ht, id)
		    $('#kontainer').append(resp_)
		var cur = $('#' + id)
		var gid = id + Math.floor(Math.random() * 9999999) //GUID 1 in 10mm
		cur.attr('id', gid)//change to guid - we could have many
		//console.log(cur.attr('id'))
		if (!cur.attr('id')) throw new Error('id not found')
		try{
            var t:number = $('header').height()
            var b:number = $('footer').position().top
		    cur.height(b - t)
        } catch (err) { console.log(err)} // need more view measure functions
		if (cb_) cb_(gid)
	})//$.get
}//()

function cleanUpViews():void {
	var views = $('#kontainer').children()
	//console.log(views.length)
	while (views.length > 1) {
		var old = views.get(0)
		old.parentNode.removeChild(old)
		views = $('#kontainer').children()
	}
	//console.log(views.length)
}//()

// misc utils section
function isEmailValid(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function getGuerryString(key) {
    key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
    var match = location.search.match(new RegExp("[?&]"+key+"=([^&]+)(&|$)"));
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
}

function loadScript(src, cb){
    var s,
        r,
        t;
    r = false;
    s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.onload = s.onreadystatechange = function() {
        //console.log( this.readyState ); //uncomment this line to see which ready states are called.
        if ( !r && (!this.readyState || this.readyState == 'complete') ) {
            r = true;
            if(cb) cb();
        }
    };
    t = document.getElementsByTagName('script')[0];
    t.parent.insertBefore(s, t);
}
