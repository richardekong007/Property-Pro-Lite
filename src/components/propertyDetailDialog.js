import template from "../templates/propertyDetailDialog.js";
import Dialog from "./dialog.js";
import config from "../config.js";


class PropertyDetailDialog extends Dialog{

    constructor (container){
        super(container);
        this.dialogContainer;
        this.property;
    }

    addEventListener (){
        this.onCloseClick();
        this.onEditClick();
        this.onReportClick();
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
            this.emit("edit_property", this.property.id);
        });
    }

    onReportClick (){
        const reportBtn = this.dialogContainer .querySelector("#report-action");
        reportBtn.addEventListener("click", event =>{
            event.preventDefault();
            this.emit("report_click", this.property.id);
        });
    }

    onDeleteClick (){
        const delBtn = this.dialogContainer.querySelector("#delete-action");
        delBtn.addEventListener("click", event =>{
            event.preventDefault();
            this.deleteProperty(this.property.id);
        });
    }

    deleteProperty(id){
        fetch(`${config.baseUrl}/api/v1/property/${id}`, {
            mode:"cors",
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
        .then(res => {
            if (res.error){
                return Promise.reject(res.error);
            }
            this.emit("delete_property");
        })
        .catch(err => this.emit("deletion_error", err));
    }

    
}

export default PropertyDetailDialog;