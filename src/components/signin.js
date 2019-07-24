import {render} from "../templates/signin.js";
import TinyEmitter from "tiny-emitter";
import config from "../config.js";


class Signin extends TinyEmitter{
    constructor (container){
        super();
        this.container = container;
        this.baseUrl = config.baseUrl;
    }

    render (){
        this.container.innerHTML = render();
        this.container.querySelector("[data-email]").focus();
        this.addEventListener();
    }

    addEventListener(){
        this.openPropertiesPage();
        this.signInClick();
        this.signupClick();
    }

    openPropertiesPage(){
        const form = this.container.querySelector("#signin-form");
        form.addEventListener("submit", event =>{
            event.preventDefault();
            if (event.target.querySelector("button"))
                this.emit("view_properties");
        });
    }

    signInClick (){
        const form = this.container.querySelector("#signin-form");
        form.addEventListener("submit", event =>{
            event.preventDefault();
            const email = event.target.querySelector("[data-email]");
            const password = event.target.querySelector("[data-password]");
            const data = {
                email:email.value,
                password:password.value
            };
            this.signInUser(data);        
        });
    }

    signupClick(){
        const signupText = this.container.querySelector("#signup-text");
        signupText.addEventListener("click", event =>{
            event.preventDefault();
            this.emit("signup");
        });
    }

    signInUser (data){
        fetch(`${this.baseUrl}/api/v1/auth/signin`,{
            mode: "cors",
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res =>{
            if (res.error){
                return Promise.reject(res.error);
            }
            this.emit("signin", res.data);

        })
        .catch(err => this.emit("error",err));
    }
}

export default Signin;