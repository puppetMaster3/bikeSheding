snapper = new Snap({
    element: document.getElementById('content')
});

viewDir = '../aCDN/view/';
showRead();
function onLoaded() {
    console.log("loaded");
    cleanUpViews();
    snapper.close();
}
function showRead() {
    forward('read', 'read', onLoaded);
}

cAPI = new CloudAPI();
var editBut = document.getElementById('edit');
editBut.addEventListener('click', function () {
    console.log('edit');
    forward('form', 'form', onLoaded);
});
//@ sourceMappingURL=app.js.map
