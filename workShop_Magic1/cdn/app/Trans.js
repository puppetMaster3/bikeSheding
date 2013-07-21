function initHasher(inst) {
    hasher.changed.add(inst._onUrlChanged, inst);
    hasher.initialized.add(inst._onUrlChanged, inst);
    hasher.prependHash = '!';
    hasher.init();
}
var baseServiceUrl = 'http://localhost:8080/api/';
function call(srv, msg, callingview_, cb_) {
    var smsg = JSON.stringify(msg);
    console.log('remote');
    console.log(smsg);
    var req = new XMLHttpRequest();
    var eurl = baseServiceUrl + srv + '?data=' + smsg + '&viewer=' + callingview_;
    req.open('POST', eurl, true);
    req.onreadystatechange = function () {
        if(this.readyState == 4) {
            var dat = this.response;
            console.log('response');
            console.log(dat);
            if(cb_ != null && dat != null && dat.length > 3) {
                var ret = JSON.parse(dat);
                cb_(ret);
            } else {
                console.log(dat);
            }
        }
    };
    req.send('XMLHttpRequest2');
}
var DMsg = (function () {
    function DMsg() { }
    DMsg.ERROR = "error_";
    DMsg.ARRAY = "array_";
    DMsg.TYPE = "type_";
    DMsg.prototype.putArray = function (array) {
        this[DMsg.ARRAY] = array;
    };
    DMsg.prototype.putError = function (err) {
        this[DMsg.ERROR] = err;
    };
    DMsg.prototype.putType = function (t) {
        this[DMsg.TYPE] = t;
    };
    return DMsg;
})();
function forward(ht, id, cb_) {
    $.get('view/' + ht + '.html', function (resp_) {
        console.log(ht);
        $('#kontainer').append(resp_);
        var cur = $('#' + id);
        var gid = id + Math.floor(Math.random() * 9999999);
        cur.attr('id', gid);
        console.log(cur.attr('id'));
        if(!cur.attr('id')) {
            throw new Error('id not found');
        }
        if(cb_) {
            cb_(gid);
        }
    });
}
function cleanUpViews() {
    var views = $('#kontainer').children();
    console.log(views.length);
    while(views.length > 1) {
        var old = views.get(0);
        old.parentNode.removeChild(old);
        views = $('#kontainer').children();
    }
    console.log(views.length);
}
console.log('starting');
$(document).ready(function () {
    setTimeout(function () {
        $('#header').show();
        $('#footer').show();
        console.log('ready');
    }, 250);
});
function doA() {
    forward('Login', 'Login', onA);
}
function onA(id) {
    console.log('a');
    tweenOn(id);
    tweenOffOld();
}
function doB() {
    forward('TList', 'TList', onB);
}
function onB(id) {
    console.log('b');
    tweenOn(id);
    tweenOffOld();
    if(true) {
        return;
    }
    var options = {
        item: 'hacker-item'
    };
    var values = [
        {
            name: 'Jonny',
            city: 'Stockholm'
        }, 
        {
            name: 'Jonas',
            city: 'Berlin'
        }
    ];
    var hackerList = new List('hacker-list', options, values);
}
function doC() {
    forward('Form', 'Form', onB);
}
function onC(id) {
    console.log('c');
    tweenOn(id);
    tweenOffOld();
}
function tweenOffOld() {
    var views = $('#kontainer').children();
    if(views.length > 1) {
        var old = views.get(0);
        TweenLite.to(old, 1, {
            css: {
                rotationY: 90,
                transformOrigin: "-300% ",
                rotation: 1
            },
            onComplete: function () {
                console.log('off', views.length);
            }
        });
    }
}
function tweenOn(id) {
    TweenLite.from($('#' + id), 0.7, {
        css: {
            rotationY: -90,
            transformOrigin: "300% ",
            rotation: -1
        },
        onComplete: function () {
        }
    });
    setTimeout(function () {
        cleanUpViews();
    }, 600);
}
