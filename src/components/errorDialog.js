import Dialog from '../components/dialog.js';
import template from '../templates/errorDialog.js';

class ErrorDialog extends Dialog{
    constructor (){
        super(document.querySelector("body"));
        this.dialogContainer;
        this.message;
    }

    static getInstance (){
        return new ErrorDialog();
    }

    createDialog (){
        this.dialogContainer = super.createDialog();
        this.dialogContainer.innerHTML = template;
        this.addEventListener();
        return this.dialogContainer;
    }

    setMessage (message){
        this.message = message;
        const messageView = this.dialogContainer.querySelector(".message");
        messageView.textContent = this.message;
        return this;
    }

    addEventListener (){
        this.onCloseClick();
    }

    onCloseClick (){
        const closeBtn = this.dialogContainer.querySelector('button');
        closeBtn.addEventListener('click', event =>{
            event.preventDefault();
            this.dismiss();
        });
    }
}

export default ErrorDialog;