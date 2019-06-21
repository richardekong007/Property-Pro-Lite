import Template from "../templates/postPropertyDialog.js";
import Overlay from "../components/overlay.js";
import TinyEmitter from "tiny-emitter";

class PostPropertyDialog extends TinyEmitter{
    constructor(container){
        super();
        this.container = container;
        this.overlay = Overlay.createOverlay();
        this.dialog = this.createDialog();
    }

    show (){
        this.container.appendChild(this.overlay);
        this.container.appendChild(this.dialog);
    }

    dismiss (){
        this.container.removeChild(this.overlay);
        this.container.removeChild(this.dialog);
    }

    createDialog () {
        let dialogContainer = document.createElement("div");
        dialogContainer.setAttribute("class","dialog-container");
        dialogContainer.innerHTML = Template;
    
        const closebtn = dialogContainer.querySelector(".close-rect");
        closebtn.addEventListener("click", event =>{
            event.preventDefault();
            this.dismiss();
            
        });
        return dialogContainer; 
    }
}

module.exports = PostPropertyDialog;