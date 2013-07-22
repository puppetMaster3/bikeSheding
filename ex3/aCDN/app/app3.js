console.log("ready 0.3");
viewDir = '../aCDN/views/';

gapp = new GWebApp();

var GWebApp = (function () {
    function GWebApp() {
        initHController(this);
    }
    GWebApp.prototype._onUrlChanged = function (newUrl, oldUrl) {
        console.log('controller sayz: ', newUrl);
        this.dispatch(newUrl, null);
    };

    GWebApp.prototype.dispatch = function (view, ctx) {
        console.log(view);

        return false;
    };
    return GWebApp;
})();

var FirstPg = (function () {
    function FirstPg() {
    }
    FirstPg.prototype._transition = function (transEnum, ctx) {
    };
    return FirstPg;
})();

var Pg2 = (function () {
    function Pg2() {
    }
    Pg2.prototype._transition = function (transEnum, ctx) {
    };
    return Pg2;
})();

function iloaded1(id) {
    cleanUpViews();
    console.log("loaded1 " + id);
    var but1 = document.getElementById('but1');
    but1.addEventListener('click', function () {
        console.log("clicked ");
    });
}
//@ sourceMappingURL=app3.js.map
