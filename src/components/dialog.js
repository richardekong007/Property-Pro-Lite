import TinyEmitter from "tiny-emitter";
import {createOverlay} from "./overlay.js"

class Dialog extends TinyEmitter{

    constructor(container){
        super();
        this.container = container;
        this.overlay = createOverlay();
        this.dialog = this.createDialog();
    }

    createDialog(){
        let dialogContainer = document.createElement("div");
        dialogContainer.setAttribute("class","dialog-container");
        return dialogContainer;
    }

    show (){
        this.container.appendChild(this.overlay);
        this.container.appendChild(this.dialog);
    }

    dismiss (){
        this.container.removeChild(this.overlay);
        this.container.removeChild(this.dialog);
    }
}

export default Dialog;