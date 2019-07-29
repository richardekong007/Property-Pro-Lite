import TinyEmitter  from 'tiny-emitter';
import {render} from '../templates/passwordResetStep1.js';
import config from '../config.js';


class ResetPasswordStep1 extends TinyEmitter{
    constructor (container){
        super();
        this.container = container;
        this.passwordResetLink;
    }

    render (){
        this.container.innerHTML = render();
        this.container.querySelector('[data-email]').focus();
        this.addEventListener();
    }

    setPasswordResetLink(link){
        const linkContainer = this.container.querySelector("#reset-link-container")
        linkContainer.innerHTML = link;
        this.passwordResetLink = linkContainer.querySelector("a");
    }

    addEventListener (){
        this.onNext();
        this.onResetLinkClick();
    }

    onNext (){
        const form = this.container.querySelector('form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            const email = event.target.querySelector('[data-email]').value;
            const data = {email: email};
            this.submitEmail(data);
        });
    }

    onResetLinkClick (){
        const linkContainer = this.container.querySelector("#reset-link-container");
        linkContainer.addEventListener('click', event =>{
            event.preventDefault();
            if (this.passwordResetLink){
                const url = `${this.passwordResetLink.href}`;
                console.log(url);
                this.receiveResetParams(url);
            }
        });
    }

    submitEmail (data){
        fetch(`${config.host}/api/v1/auth/reset-password-step1`, {
            mode:'cors',
            method:'POST',
            body:JSON.stringify(data),
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
        .then(res => {
            if (res.error){
                 return Promise.reject(res.error);
            }
            this.emit("submit_email",res.data);
        })
        .catch(err => this.emit("submit_email_error", err));
    }

    receiveResetParams (url){
        fetch(url,{
            mode:'cors',
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
        .then(res => {
            if (res.error){
                return Promise.reject(res.error);
            }
            this.emit("receive_reset_params", res.data);
        })
        .catch(err => this.emit("receive_params_error", err));
    }

}

export default ResetPasswordStep1;