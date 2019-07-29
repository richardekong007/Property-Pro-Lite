
import TinyEmitter from 'tiny-emitter';
import {render} from '../templates/passwordResetstep2.js';
import config from '../config.js';

class ResetPasswordStep2 extends TinyEmitter{

    constructor (container){
        super();
        this.container = container;
        this.data;
    }

    setData (data){
        this.data = data;
        return this;
    }

    render (){
        this.container.innerHTML = render(this.data);
        this.container.querySelector('[data-password]').focus();
        this.addEventListener();
    }

    addEventListener (){
        this.onResetClick();
    }

    onResetClick (){
        const form = this.container.querySelector('form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            const password = event.target.querySelector('[data-password]').value;
            this.data.password = password;
            this.resetPassword(this.data);
        });
    }

    resetPassword(data){
        fetch(`${config.host}/auth/reset-password-step2`, {
            mode:'cors',
            method:'POST',
            body:JSON.stringify(data),
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
        .then(res =>{
            if (res.error){
                return Promise.reject(res.error);
            }
            this.emit("password_reset", res.data);
        })
        .catch(err => this.emit("password_reset_error", err));
    }
}

export default ResetPasswordStep2;