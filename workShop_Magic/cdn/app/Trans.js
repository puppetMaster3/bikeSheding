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
1;
var app;
$(document).ready(function () {
    setTimeout(function () {
        $('#header').show();
        $('#footer').show();
        app = new MyApp();
    }, 250);
});
var MyApp = (function () {
    function MyApp() {
        this.tlogin = new Login();
        this.tlist = new TList();
        this.tform = new TForm();
        initHasher(this);
        console.log('started');
    }
    MyApp.prototype.dispatch = function (view, ctx) {
        console.log(view);
        hasher.setHash(view, ctx);
    };
    MyApp.prototype._onUrlChanged = function (newUrl, oldUrl) {
        console.log('hasher ', newUrl);
        if(newUrl.trim().length < 1) {
            console.log('empty dis');
            this.dispatch('login', null);
        }
        if(S(newUrl).endsWith('/')) {
            newUrl = newUrl.substring(0, newUrl.length - 1);
            console.log(newUrl);
        }
        if('login' == newUrl) {
            this.tlogin._transition(1);
        }
        if('tlist' == newUrl) {
            this.tlist._transition(1);
        }
        if('tform' == newUrl) {
            this.tform._transition(1);
        }
    };
    return MyApp;
})();
var Login = (function () {
    function Login() { }
    Login.prototype._transition = function (transEnum) {
        forward('Login', 'Login', this.onLoaded);
    };
    Login.prototype.onLoaded = function (id) {
        tweenOn(id);
        tweenOffOld();
    };
    return Login;
})();
var TList = (function () {
    function TList() { }
    TList.prototype._transition = function (transEnum) {
        forward('TList', 'TList', this.onLoaded);
    };
    TList.prototype.onLoaded = function (id) {
        tweenOn(id);
        tweenOffOld();
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
    };
    return TList;
})();
var TForm = (function () {
    function TForm() { }
    TForm.prototype._transition = function (transEnum) {
        forward('Form', 'Form', this.onLoaded);
    };
    TForm.prototype.onLoaded = function (id) {
        tweenOn(id);
        tweenOffOld();
    };
    return TForm;
})();
function tweenOffOld() {
    var views = $('#kontainer').children();
    if(views.length > 1) {
        var old = views.get(0);
        console.log(old);
        TweenLite.to(old, 0.4, {
            css: {
                rotationY: 90,
                transformOrigin: "-300% ",
                rotation: 1,
                z: -100,
                width: 1,
                height: 1
            },
            onComplete: function () {
                console.log('off', views.length);
            }
        });
    }
}
function tweenOn(id) {
    $('#' + id).css("z-index", "100");
    TweenLite.from($('#' + id), 1.1, {
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
