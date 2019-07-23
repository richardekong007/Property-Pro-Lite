import Template from '../templates/propertyFlag.js';
import Dialog from "./dialog.js";
import config from "../config.js";

class PropertyFlag extends Dialog {

    constructor (container){
        super(container);
        this.dialogContainer;
        this.propertyId;
    }

    addEventListener (){
        this.onDoneClick();
        this.onCloseClick();
    }

    createDialog (){
        this.dialogContainer = super.createDialog();
        this.dialogContainer.innerHTML = Template;
        this.addEventListener();
        return this.dialogContainer;
    }

    reset (){
        this.dialogContainer.querySelector("form").reset();
    }

    setPropertyId (id){
        this.propertyId = id;
    }

    onCloseClick (){
        const closeBtn = this.dialogContainer.querySelector(".close-rect");
        closeBtn.addEventListener("click", event =>{
            event.preventDefault();
            this.dismiss();
        });
    }

    onDoneClick (){
        const form = this.dialogContainer.querySelector("form");
        form.addEventListener("submit", event =>{
            event.preventDefault();
            const reason = event.target.querySelector("[data-reason]").value;
            const description = event .target.querySelector("[data-desc]").value;
            const data = {
                property_id: this.propertyId,
                reason: reason,
                description:description
            };
            
            this.reportAds(data);
        });
    }

    reportAds (data){
        fetch(`${config.baseUrl}/api/v1/flag`,{
            mode:"cors",
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            if (res.error)return Promise.reject(res.error);
            this.emit("property_reported");
            this.reset();

        })
        .catch(err => this.emit("reported_error", err));
    }
}

export default PropertyFlag;