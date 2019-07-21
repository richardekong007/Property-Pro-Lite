import Template from "../templates/postPropertyDialog.js";
import Dialog from "./dialog.js";
import config from "../config.js";

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
            const formData = new FormData();
            formData.append("address", event.target.querySelector("[data-address]").value);
            formData.append("price", event.target.querySelector("[data-price]").value);
            formData.append("state", event.target.querySelector("[data-state]").value);
            formData.append("city", event.target.querySelector("[data-city]").value);
            formData.append("type", event.target.querySelector("[data-type]").value);
            formData.append("image_url", event.target.querySelector("[data-image-url]").files[0]);
            this.addProperty(formData);
        });
        return dialogContainer; 
    }

    addProperty (data){
    
        fetch(`${config.baseUrl}/api/v1/property`,{
            mode:"cors",
            method:"POST",
            body:data
        })
        .then(res => res.json())
        .then(res => {
            if (res.error){
                return Promise.reject(res.error);
            }
            this.emit("add_property",res.data);
        })
        .catch(err => this.emit("error",err));
    }

    clear (){
        this.container.querySelector(".property-form").reset();
    }
}

export default PostPropertyDialog;