var snapper = new Snap({
    element: document.getElementById('content')
});

viewDir = '../aCDN/view/';
forward('read', 'read', this._onLoaded);
function onLoaded() {
    console.log("ready");
}
//@ sourceMappingURL=app.js.map
