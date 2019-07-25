import {render} from "../templates/properties";
import PropertyViewer from "../components/propertyViewer.js";
import TinyEmitter from "tiny-emitter"
import Authenticator from "../authenticator.js";

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
        this.propertyViewer.render();
        this.addEventListeners();
    }

    renderByType(type) {
        this.container.innerHTML = render();
        const nestedContainer = document.querySelector("#properties-grid");
        this.propertyViewer = new PropertyViewer(nestedContainer);
        this.propertyViewer.renderByType(type)
            .catch(err => {
                this.emit("property_type_error", err);
            });
        this.addEventListeners();
    }

    addEventListeners (){
        this.addClick();
        this.propertyItemClick();
        this.propertyTypeChange();
        this.signoutClick();
    }

    addClick (){
        const addButton = this.container.querySelector("#add-property-button");
        addButton.addEventListener("click", event =>{
            event.preventDefault();
            this.emit("add_button_click");
        });
    }

    propertyItemClick(){
       
        this.propertyViewer.on("property_item_click", data =>{
            this.emit("property_item_click", data);
        });

    }

    propertyTypeChange (){
        const propertyTypes = document.querySelector(".property-type-options");
        propertyTypes.addEventListener("change", event =>{
            const selectedType = event.target.value;
            this.emit("type_change", selectedType);
        });
    }

    signoutClick (){
        const signout = document.querySelector("#sign-out");
        signout.addEventListener("click", event => {
            event.preventDefault();
            this.emit("signout");
        });
    }

}

export default Properties;