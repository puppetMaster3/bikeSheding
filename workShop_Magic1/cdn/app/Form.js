var ci = 0;
function forward(ht, cb_) {
    $.get('view/' + ht + '.html', function (resp_) {
        console.log(ht);
        $('#kontainer').append(resp_);
        _cleanUpViews();
        if(cb_) {
            cb_();
        }
    });
}
function _cleanUpViews() {
    var views = $('#kontainer').children();
    console.log(views.length);
    while(views.length > 1) {
        var old = views.get(0);
        old.parentNode.removeChild(old);
        views = $('#kontainer').children();
    }
    console.log(views.length);
}
$(document).ready(function () {
    setTimeout(function () {
        $('#header').show();
        $('#footer').show();
        console.log('starting');
    }, 110);
});
function doA() {
    console.log('a');
    var but = $('#a');
    TweenLite.to(but, 1, {
        x: 10
    });
    but = $('#b');
    TweenLite.to(but, 1, {
        x: 10
    });
    return false;
}
