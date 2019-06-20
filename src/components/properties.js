import Template from "../templates/properties";
import PropertyViewer from "../components/propertyViewer.js";

class Properties {

    constructor(container){
        this.container = container;
        this.propertyViewer = null;
    }

    render() {
        this.container.innerHTML = Template.render();
        const nestedContainer =  document.querySelector("#properties-grid");
        this.propertyViewer = new PropertyViewer(nestedContainer);
        this.propertyViewer.render()
    }
}

module.exports = Properties;