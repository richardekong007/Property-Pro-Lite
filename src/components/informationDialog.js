import Dialog from "../components/dialog.js";
import template from "../templates/informationDialog.js";


class InformationDialog extends Dialog{

    constructor (){
        super(document.querySelector("body"));
        this.dialogContainer;
        this.message;
    }

    static getInstance (){
        return new InformationDialog();
    }

    createDialog (){
        this.dialogContainer = super.createDialog();
        this.dialogContainer.innerHTML = template;
        this.addEventListener();
        return this.dialogContainer;
    }

    addEventListener (){
        this.okClick();
    }

    okClick (){
        const okbtn = this.dialogContainer.querySelector("button");
        okbtn.addEventListener("click", event =>{
            event.preventDefault();
            this.dismiss();
        });
    }

    setMessage (message){
        this.message = message;
        const messageView = this.dialogContainer.querySelector(".message");
        messageView.textContent = this.message;
        return this;
    }
}

export default InformationDialog;