import Template from "../templates/signin.js";

class Signin {
    constructor (container){
        this.container = container;
    }

    render (){
        this.container.innerHTML = Template.render();
    }
}

module.exports = Signin;