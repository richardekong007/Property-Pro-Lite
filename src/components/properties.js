import {render} from "../templates/properties";
import PropertyViewer from "../components/propertyViewer.js";
import TinyEmitter from "tiny-emitter"
import Menu from "../components/menu.js";

class Properties extends TinyEmitter{

    constructor(container){
        super();
        this.container = container;
        this.user;
        this.menu = new Menu(this.container);
        this.propertyViewer = null;
        
    }

    setCurrentUser (user){
        this.user = user;
        return this;
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

    onOpenMenu (){
        this.menu.on("menu_opened", () =>{
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