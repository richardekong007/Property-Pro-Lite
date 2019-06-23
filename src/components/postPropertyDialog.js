import Template from "../templates/postPropertyDialog.js";
import Dialog from "./dialog.js";

class PostPropertyDialog extends Dialog{
    
    constructor(container){
        super(container);
    }

    createDialog () {
        
        let dialogContainer = super.createDialog();
        dialogContainer.innerHTML = Template;
        const form = dialogContainer.querySelector("form");
        const closebtn = dialogContainer.querySelector(".close-rect");
        closebtn.addEventListener("click", event =>{
            event.preventDefault();
            this.dismiss();
        });

        form.addEventListener("submit", event =>{
            event.preventDefault();
            if (event.target.querySelector("#done")){
                this.emit("add_property");
            }
        });
        return dialogContainer; 
    }
}

export default PostPropertyDialog;