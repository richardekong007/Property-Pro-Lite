import Signin from "./components/signin.js";
import Signup from "./components/signup.js";

class App {
    constructor (container){
        this.signin = new Signin(container);
        this.signup = new Signup(container);
    }

    init (){
        //this.signin.render();
        this.signup.render();
    }
}

module.exports = App;