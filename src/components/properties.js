import {render} from "../templates/properties";
import PropertyViewer from "../components/propertyViewer.js";
import TinyEmitter from "tiny-emitter"
import Menu from "../components/menu.js";

class Properties extends TinyEmitter{

    constructor(container){
        super();
        this.container = container;
        this.user;
        this.properties;
        this.menu = new Menu(this.container);
        this.propertyViewer = null;
        this.numberOfCurrentUserProperties;
        this.propertiesSoldByCurrentUser;
        this.availablePropertiesOfUser;
        
    }

    setCurrentUser (user){
        this.user = user;
        return this;
    }

    getUserProperties (properties) {
        return properties.filter(({owner_email:owner_email}) => owner_email === this.user.email);
    }

    getAvailableProperties (properties){
        return properties
            .filter(({status:status}) => (status === "available") || (status === "Available"))
            .length;
    }

    getSoldProperties (properties) {
        return properties
            .filter(({status:status}) => (status === "sold") || (status === "Sold"))
            .length;
    }

    render () {
        this.container.innerHTML = render();
        const nestedContainer =  document.querySelector("#properties-grid");
        this.menu.setData(this.user).render();
        this.propertyViewer = new PropertyViewer(nestedContainer);
        this.propertyViewer.render();
        this.addEventListeners();
    }

    renderByType (type) {
        this.container.innerHTML = render();
        this.menu.setData(this.user).render();
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
        this.onPropertyFetch();
        this.propertyItemClick();
        this.propertyTypeChange();
        this.signoutClick();
        this.onOpenMenu();
        this.onCloseMenu();
    }

    addClick (){
        const addButton = this.container.querySelector("#add-property-button");
        addButton.addEventListener("click", event =>{
            event.preventDefault();
            this.emit("add_button_click");
        });
    }

    propertyItemClick (){  
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
        const signout = document.querySelector("#signout");
        signout.addEventListener("click", event => {
            event.preventDefault();
            this.emit("signout");
        });
    }

    onPropertyFetch (){

        this.propertyViewer.on("properties_fetched", data => {
            this.properties = this.getUserProperties(data);
            this.numberOfCurrentUserProperties = this.properties.length;
            this.availablePropertiesOfUser = this.getAvailableProperties(this.properties);
            this.propertiesSoldByCurrentUser = this.getSoldProperties(this.properties);
        });
    }

    onOpenMenu (){
        this.menu.on("menu_opened", () =>{
            document.querySelector("[data-prop-posted]")
                .textContent = `${!(this.numberOfCurrentUserProperties)?"None":this.numberOfCurrentUserProperties} Posted`;
            document.querySelector("[data-prop-available]")
                .textContent = `${!(this.availablePropertiesOfUser)?"None":this.availablePropertiesOfUser} Available`;
            document.querySelector("[data-prop-sold]")
                .textContent = `${!(this.propertiesSoldByCurrentUser)?"None":this.propertiesSoldByCurrentUser} Sold`;
            this.menu.open();
        });
    }

    onCloseMenu (){
        this.menu.on("menu_closed", () =>{
            this.menu.dismiss();
        });

    }

}

export default Properties;