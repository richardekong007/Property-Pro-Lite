import Template from "../templates/propertyDetailDialog.js";
import Overlay from "../components/overlay.js";
import TinyEmitter from "tiny-emitter";


class PropertyDetailDialog extends TinyEmitter{

    constructor(container){
        super();
        this.container = container;
        this.overlay = Overlay.createOverlay();
        this.dialog = this.createDialog();
    }

    show (){
        this.showDialog();
    }

    createDialog (){
        let dialogContainer = document.createElement("div");
        dialogContainer.setAttribute("class","dialog-container");
        dialogContainer.innerHTML = Template;
        const closeBtn = dialogContainer.querySelector(".close-rect");
        const editBtn = dialogContainer.querySelector("#edit-action");

        closeBtn.addEventListener("click",event =>{
            event.preventDefault();
            this.dismiss();
        });

        editBtn.addEventListener("click", event =>{
            event.preventDefault();
            this.emit("edit_property");
        });
        return dialogContainer;
    }

    dismiss (){
        this.container.removeChild(this.overlay);
        this.container.removeChild(this.dialog);
    }

    showDialog (){
        this.container.appendChild(this.overlay);
        this.container.appendChild(this.dialog);
    }
}

module.exports = PropertyDetailDialog;