import Signin from "./components/signin.js";
import Signup from "./components/signup.js";
import PostPropertyDialog from "./components/postPropertyDialog.js";
import UpdatePropertyDialog from "./components/updatePropertyDialog.js";
import PropertyDetailDialog from "./components/propertyDetailDialog.js";
import PropertiesPage from "./components/properties.js";
import PropertyFlag from "./components/propertyFlag.js";
import ErrorDialog from "./components/errorDialog.js"
import InformationDialog from "./components/informationDialog.js";


class App {
    constructor (container){
        this.signin = new Signin(container);
        this.signup = new Signup(container);
        this.postPropertyDialog = new PostPropertyDialog(container);
        this.updatePropertyDialog = new UpdatePropertyDialog(container);
        this.propertyDetailDialog = new PropertyDetailDialog(container);
        this.propertiesPage = new PropertiesPage(container);
        this.propertyFlag = new PropertyFlag(container);
    }

    init (){
        this.signin.render();
        this.addEventListener();
    }

    addEventListener(){
        this.signinEvents();
        this.signupEvents();
        this.propertiesTemplateEvent();
        this.propertyDetailDialogEvent();
        this.postPropertyDialogEvent();
        this.updatePropertyDialogEvent();
        this.propertyFlagDialogEvent();
    }

    signinEvents (){
        
        this.signin.on("signin", data =>{
            this.propertiesPage.render();
            InformationDialog.getInstance().setMessage(`${data.first_name} signed in.`).show();
        });
        this.signin.on("error", error =>{
            ErrorDialog.getInstance().setMessage(error).show();
        })
        this.signin.on("signup", () => this.signup.render());
    }

    signupEvents (){
        this.signup.on("signin_click", () => this.signin.render());
        this.signup.on("signup", data => {
            console.log(data);
            this.signin.render();
        });
        this.signup.on("error", error => console.log(error));
    }

    propertiesTemplateEvent (){
        this.propertiesPage.on("add_button_click", () => {
            this.postPropertyDialog.show();
        });

        this.propertiesPage.on("property_item_click", data =>{
            console.log("property id:",data)
            this.propertyDetailDialog.setContent(data);
            this.propertyDetailDialog.show();
        });

        this.propertiesPage.on("type_change", selectedType =>{
            this.propertiesPage.renderByType(selectedType);
        });

        this.propertiesPage.on("property_type_error", error =>{
            this.propertiesPage.render();
            ErrorDialog.getInstance().setMessage(error).show();
        });
    }

    propertyDetailDialogEvent (){
        this.propertyDetailDialog.on("edit_property", data =>{
            this.updatePropertyDialog.setPropertyId(data)
            this.updatePropertyDialog.show();
            this.propertyDetailDialog.dismiss();
        });

        this.propertyDetailDialog.on("delete_property", () => {
            //alert("Property deleted!");
            this.propertyDetailDialog.dismiss();
            this.propertiesPage.render();
            InformationDialog.getInstance().setMessage("Property deleted!").show();
        });

        this.propertyDetailDialog.on("deletion_error", error =>{
            ErrorDialog.getInstance().setMessage(error).show();
        });

        this.propertyDetailDialog.on("report_click", data =>{
            this.propertyFlag.setPropertyId(data);
            this.propertyFlag.show();
            this.propertyDetailDialog.dismiss();
        });
    }

    postPropertyDialogEvent (){
        this.postPropertyDialog.on("add_property", data =>{
            console.log(data);
            this.postPropertyDialog.clear();
            this.postPropertyDialog.dismiss();
            this.propertiesPage.render()
            InformationDialog.getInstance().setMessage("Property added!").show();
        });

        this.postPropertyDialog.on("error", error =>{
            console.log(error);
            ErrorDialog.getInstance().setMessage(error).show();
        });
    }

    updatePropertyDialogEvent (){
        this.updatePropertyDialog.on("mark_sold", () =>{
            this.propertiesPage.render();
        });

        this.updatePropertyDialog.on("mark_sold_error", error => {
            ErrorDialog.getInstance().setMessage(error).show();
        });

        this.updatePropertyDialog.on("update_property", ()=>{
            this.propertiesPage.render();
        });

        this.updatePropertyDialog.on("update_property_error", error =>{
            ErrorDialog.getInstance().setMessage(error).show();
        });
    }

    propertyFlagDialogEvent (){

        this.propertyFlag.on("property_reported", () =>{
            //alert("Report submitted");
            this.propertyFlag.dismiss();
            InformationDialog.getInstance().setMessage("Report submitted").show()
        });

        this.propertyFlag.on("reported_error", error =>{
            ErrorDialog.getInstance().setMessage(error).show();
        });
    }

}

export default App;