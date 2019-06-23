import Template from "../templates/propertyDetailDialog.js";
import Dialog from "./dialog.js";


class PropertyDetailDialog extends Dialog{

    constructor(container){
        super(container);
    }

    createDialog (){
        let dialogContainer = super.createDialog()
        dialogContainer.innerHTML = Template;

        const form = dialogContainer.querySelector("form");
        const closeBtn = dialogContainer.querySelector(".close-rect");
        const editBtn = dialogContainer.querySelector("#edit-action");

        closeBtn.addEventListener("click",event =>{
            event.preventDefault();
            this.dismiss();
        });

        form.addEventListener("submit", event =>{
            event.preventDefault();
            if (event.target.querySelector("#delete-action")){
                this.emit("delete_property");
            }
        });

        editBtn.addEventListener("click", event =>{
            event.preventDefault();
            this.emit("edit_property");
        });
        return dialogContainer;
    }
}

export default PropertyDetailDialog;