import Template from "../templates/propertyDetailDialog.js";

class PropertyDetailDialog {

    constructor(container){
        this.container = container;
    }

    show (){
        this.container.innerHTML = Template.show();
    }
}

module.exports = PropertyDetailDialog;