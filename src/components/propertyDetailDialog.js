import template from "../templates/propertyDetailDialog.js";
import Dialog from "./dialog.js";


class PropertyDetailDialog extends Dialog{

    constructor (container){
        super(container);
        this.dialogContainer;
        this.property;
    }

    addEventListener (){
        this.onCloseClick();
        this.onEditClick();
        this.onDeleteClick();
    }

    createDialog (){
        this.dialogContainer = super.createDialog()
        this.dialogContainer.innerHTML = template();
        this.addEventListener();
        return this.dialogContainer;
    }

    setContent (property){
        this.property = property;
        this.dialogContainer.innerHTML = template(property);
        this.addEventListener();
    }

    onCloseClick (){
        const closeBtn = this.dialogContainer.querySelector(".close-rect");
        closeBtn.addEventListener("click",event =>{
            event.preventDefault();
            this.dismiss();
        });
    }

    onEditClick (){
        const editBtn = this.dialogContainer.querySelector("#edit-action");
        editBtn.addEventListener("click", event =>{
            event.preventDefault();
            this.emit("edit_property");
        });
    }

    onDeleteClick (){
        const form = this.dialogContainer.querySelector("form");
        form.addEventListener("submit", event =>{
            event.preventDefault();
            if (event.target.querySelector("#delete-action")){
                this.emit("delete_property");
            }
        });
    }
}

export default PropertyDetailDialog;