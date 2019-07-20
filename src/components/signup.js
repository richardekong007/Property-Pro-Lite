import {render} from "../templates/signup";
import TinyEmitter from "tiny-emitter";
import config from "../config.js";

class Signup extends TinyEmitter{
    constructor(container){
        super();
        this.container = container;
    }

    render(){
        this.container.innerHTML = render();
        this.container.querySelector("[data-first-name]").focus();
        this.addEventListener();

    }

    addEventListener(){
        this.openSigninPage();
        this.signupClick();
    }

    openSigninPage(){
        const signinText = this.container.querySelector("#signin-text");
        signinText.addEventListener("click", event =>{
            event.preventDefault();
            this.emit("signin_click");
        });
    }

    signupClick (){
        const form = this.container.querySelector("#signup-form");
        form.addEventListener("submit", event =>{
            event.preventDefault();
            const firstName = event.target.querySelector("[data-first-name]");
            const lastName = event.target.querySelector("[data-last-name]");
            const email = event.target.querySelector("[data-email]");
            const password = event.target.querySelector("[data-password]");
            const phone = event.target.querySelector("[data-phone]");
            const address = event.target.querySelector("[data-address]");
            this.signupUser({
                email:email.value,
                first_name: firstName.value,
                last_name: lastName.value,
                password:password.value,
                address:address.value,
                phone_number:phone.value
            });
        });
    }

    signupUser (data){
        fetch(`${config.baseUrl}/api/v1/auth/signup`,{
            mode:"cors",
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            if (res.error){
                return Promise.reject(res.error);
            }
            this.emit("signup", res.data);
        })
        .catch(err => this.emit("error", err));
    }

    
}
export default Signup;