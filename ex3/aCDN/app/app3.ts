console.log ("ready 0.3")
viewDir = '../aCDN/views/'

declare var List;   // templates
declare var CloudAPI;   // templates
declare var $;

gapp = new GWebApp()//calls constructor

class GWebApp implements IAppNController {
    pg1:FirstPg;
    pg2:Pg2;
    constructor() {
        initHController(this)

    }//()

    _onUrlChanged(newUrl, oldUrl):void {
        console.log('controller sayz: ',newUrl)
        this.dispatch(newUrl,null)
    }

    dispatch(view:string, ctx:any):bool {
        console.log(view)

        return false;
    }//()


}//class


class FirstPg implements IModPresenter {

    _transition(transEnum:number, ctx:any):void {

    }

}

class Pg2 implements IModPresenter {

    _transition(transEnum:number, ctx:any):void {

    }

}


//forward('listTmpl', 'listTmpl', iloaded1)

function iloaded1(id){
    cleanUpViews()
    console.log ("loaded1 " + id)
    var but1 = document.getElementById('but1')
    but1.addEventListener('click', function() {
        console.log ("clicked ")

    })
}

