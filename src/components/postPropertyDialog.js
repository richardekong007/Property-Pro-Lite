import Template from "../templates/postPropertyDialog.js";

class PostPropertyDialog{
    constructor(container){
        this.container = container;
    }

    show (){
        //temporary operation
        this.container.innerHTML = Template.show();
    }
}

module.exports = PostPropertyDialog;