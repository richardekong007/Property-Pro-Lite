import Signin from "./components/signin.js";

class App {
    constructor (container){
        this.signin = new Signin(container);
    }

    init (){
        this.signin.render();
    }
}

module.exports = App;