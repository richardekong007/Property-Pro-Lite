import Template from "../templates/signup";

class Signup {
    constructor(container){
        this.container = container;
    }

    render(){
        this.container.innerHTML = Template.render();
    };
}

module.exports = Signup;