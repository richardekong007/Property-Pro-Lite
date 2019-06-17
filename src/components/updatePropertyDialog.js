import Template from "../templates/updatePropertyDialog.js";

class UpdatePropertyDialog {
    constructor(container){
        this.container = container;
    }

    show () {
        this.container.innerHTML = Template.show();
    }
}

module.exports = UpdatePropertyDialog;