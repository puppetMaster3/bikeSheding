console.log("ready 0.20");
viewDir = '../aCDN/views/';

var load1But = document.getElementById('load1');
load1But.addEventListener('click', function () {
    console.log("clicked 1");
    forward('view1', 'view1', iloaded1);
});
function iloaded1(id) {
    console.log("loaded1 " + id);
    var div = document.getElementById(id);
    TweenLite.to(div, .4, {
        css: { rotationZ: 45, rotation: 1 },
        onComplete: function () {
            console.log('animated');
        }
    });
}

var load2But = document.getElementById('load2');
load2But.addEventListener('click', function () {
    console.log("Test");
    forward('view2', iloaded2);
});

function iloaded2() {
    console.log("loaded2");
}
//@ sourceMappingURL=app2.js.map
