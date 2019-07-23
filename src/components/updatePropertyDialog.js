import Template from "../templates/updatePropertyDialog.js";
import Dialog from "./dialog.js";
import config from "../config.js";

class UpdatePropertyDialog extends Dialog {

    constructor(container){
        super(container); 
        this.dialogContainer;
        this.propertyId;
    }

    createDialog (){
        this.dialogContainer = super.createDialog();
        this.dialogContainer.innerHTML = Template;
        //const form = this.dialogContainer.querySelector("form");
        this.addEventListener();
        return this.dialogContainer;
    }

    addEventListener (){
        this.onCloseClick();
        this.onSoldClick();
    }

    setPropertyId (id){
        this.propertyId = id;
    }

    onCloseClick (){
        const closeBtn = this.dialogContainer.querySelector(".close-rect");
        closeBtn.addEventListener("click", event => {
            event.preventDefault();
            this.dismiss();
        });
    }


    onSoldClick (){
        const form = this.dialogContainer.querySelector("form");
        const soldCheckBox = this.dialogContainer.querySelector(".checkbox");
        soldCheckBox.addEventListener("change", event =>{
            event.preventDefault();
            if (event.target.checked){
                this.markAsSold(this.propertyId);
                form.reset();
            }
        });
    }


    markAsSold (id){
        fetch(`${config.baseUrl}/api/v1/property/${id}/sold`,{
            mode:"cors",
            method:"PATCH",
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
        .then(res =>{
            if (res.error){
                return Promise.reject(res.error);
            }
            this.emit("mark_sold")
        })
        .catch(err => this.emit("mark_sold_error", err));
    }
    
}

export default UpdatePropertyDialog;