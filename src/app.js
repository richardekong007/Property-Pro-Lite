import Signin from "./components/signin.js";
import Signup from "./components/signup.js";
import PostPropertyDialog from "./components/postPropertyDialog.js";

class App {
    constructor (container){
        this.signin = new Signin(container);
        this.signup = new Signup(container);
        this.postPropertyDialog = new PostPropertyDialog(container);
    }

    init (){
        //this.signin.render();
        //this.signup.render();
        this.postPropertyDialog.show();
    }
}

module.exports = App;