import Template from "../templates/signin.js";
import TinyEmitter from "tiny-emitter";

class Signin extends TinyEmitter{
    constructor (container){
        super();
        this.container = container;
    }

    render (){
        this.container.innerHTML = Template.render();
        this.container.querySelector("[data-username]").focus();
        this.addEventListener();
    }

    addEventListener(){
        this.openPropertiesPage();
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

    signupClick(){
        const signupText = this.container.querySelector("#signup-text");
        signupText.addEventListener("click", event =>{
            event.preventDefault();
            this.emit("signup");
        });
    }
}

module.exports = Signin;