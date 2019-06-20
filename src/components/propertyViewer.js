import Template from "../templates/propertyViewer.js";
import tempProperties from "../temp/temporaryProperties.js";

class PropertyViewer {
    constructor(container){

        this.container = container;
    }

    render (){
        this.container.innerHTML = Template.render(tempProperties);
    }


}

module.exports = PropertyViewer;