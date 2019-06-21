import Template from "../templates/updatePropertyDialog.js";
import TinyEmitter from "tiny-emitter";
import Overlay from "../components/overlay.js";

class UpdatePropertyDialog extends TinyEmitter{
    constructor(container){
        super();
        this.container = container;
        this.overlay = Overlay.createOverlay();
        this.dialog = this.createDialog(); 
    }

    show () {
        document.body.appendChild(this.overlay);
        document.body.appendChild(this.dialog);
    }

    dismiss (){
        document.body.removeChild(this.overlay);
        document.body.removeChild(this.dialog);
    }

    createDialog (){
        let dialogContainer = document.createElement("div");
        dialogContainer.setAttribute("class","dialog-container");
        dialogContainer.innerHTML = Template;
        const closeBtn = dialogContainer.querySelector(".close-rect");
        closeBtn.addEventListener("click", event =>{
            event.preventDefault();
            this.dismiss();
        });
        return dialogContainer;
    }
}

module.exports = UpdatePropertyDialog;