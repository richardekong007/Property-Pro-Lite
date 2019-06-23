import Template from "../templates/updatePropertyDialog.js";
import Dialog from "./dialog.js";

class UpdatePropertyDialog extends Dialog {

    constructor(container){
        super(container); 
    }

    createDialog (){
        let dialogContainer = super.createDialog();
        dialogContainer.innerHTML = Template;
        const form = dialogContainer.querySelector("form");
        const closeBtn = dialogContainer.querySelector(".close-rect");

        form.addEventListener("submit", event => {
            event.preventDefault();
            if (event.target.querySelector("#done")){
                this.emit("update_property");
            }
        });

        closeBtn.addEventListener("click", event =>{
            event.preventDefault();
            this.dismiss();
        });

        return dialogContainer;
    }
}

export default UpdatePropertyDialog;