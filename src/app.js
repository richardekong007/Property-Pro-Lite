import Signin from "./components/signin.js";
import Signup from "./components/signup.js";
import PostPropertyDialog from "./components/postPropertyDialog.js";
import UpdatePropertyDialog from "./components/updatePropertyDialog.js";
import PropertyDetailDialog from "./components/propertyDetailDialog.js";
import PropertiesPage from "./components/properties.js";

class App {
    constructor (container){
        this.signin = new Signin(container);
        this.signup = new Signup(container);
        this.postPropertyDialog = new PostPropertyDialog(container);
        this.updatePropertyDialog = new UpdatePropertyDialog(container);
        this.propertyDetailDialog = new PropertyDetailDialog(container);
        this.PropertiesPage = new PropertiesPage(container);
    }

    init (){
        //this.signin.render();
        //this.signup.render();
        //this.postPropertyDialog.show();
        //this.updatePropertyDialog.show();
        //this.propertyDetailDialog.show();
        this.PropertiesPage.render();

    }
}

module.exports = App;