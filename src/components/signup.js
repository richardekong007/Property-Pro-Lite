import Template from "../templates/signup";
import TinyEmitter from "tiny-emitter";

class Signup extends TinyEmitter{
    constructor(container){
        super();
        this.container = container;
    }

    render(){
        this.container.innerHTML = Template.render();
        this.container.querySelector("[data-first-name]").focus();
        this.addEventListener();

    }

    addEventListener(){
        this.openSigninPage();
    }

    openSigninPage(){
        const form = this.container.querySelector("#signup-form");
        const signinText = this.container.querySelector("#signin-text");
        form.addEventListener("submit", event => {
            event.preventDefault();
            if (event.target.querySelector("button")){
                this.emit("signin");
            }
        });
        signinText.addEventListener("click", event =>{
            event.preventDefault();
            this.emit("signin_click");
        });
    }
}

module.exports = Signup;