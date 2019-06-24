import {render} from "../templates/propertyViewer.js";
import tempProperties from "../temp/temporaryProperties.js";

class PropertyViewer {
    constructor(container){

        this.container = container;
    }

    render (){
        this.container.innerHTML = render(tempProperties);
    }


}

export default PropertyViewer;