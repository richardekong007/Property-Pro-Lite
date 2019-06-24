import {render} from "../templates/properties";
import PropertyViewer from "../components/propertyViewer.js";
import TinyEmitter from "tiny-emitter"

class Properties extends TinyEmitter{

    constructor(container){
        super();
        this.container = container;
        this.propertyViewer = null;
    }

    render() {
        this.container.innerHTML = render();
        const nestedContainer =  document.querySelector("#properties-grid");
        this.propertyViewer = new PropertyViewer(nestedContainer);
        this.propertyViewer.render()
        this.addEventListeners();
    }

    addEventListeners (){
        this.addClick();
        this.propertyItemClick();
    }

    addClick (){
        const addButton = this.container.querySelector("#add-property-button");
        addButton.addEventListener("click", event =>{
            event.preventDefault();
            this.emit("add_button_click");
        });
    }

    propertyItemClick(){
        const propertyGrid = document.querySelector("#properties-grid")
            .querySelectorAll(".property-item");
        propertyGrid.forEach(item =>{
            item.addEventListener("click", event =>{
                event.preventDefault();
                this.emit("property_item_click");
            });
        });

    }

}

export default Properties;