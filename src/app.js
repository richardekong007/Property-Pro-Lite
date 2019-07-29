import Signin from "./components/signin.js";
import Signup from "./components/signup.js";
import PostPropertyDialog from "./components/postPropertyDialog.js";
import UpdatePropertyDialog from "./components/updatePropertyDialog.js";
import PropertyDetailDialog from "./components/propertyDetailDialog.js";
import PropertiesPage from "./components/properties.js";
import PropertyFlag from "./components/propertyFlag.js";
import ErrorDialog from "./components/errorDialog.js"
import InformationDialog from "./components/informationDialog.js";
import Authenticator from "./authenticator.js";
import ResetPasswordStep1 from "./components/resetPasswordStep1.js";
import ResetPasswordStep2 from "./components/resetPasswordStep2.js";


class App {
    constructor (container){
        this.signin = new Signin(container);
        this.signup = new Signup(container);
        this.postPropertyDialog = new PostPropertyDialog(container);
        this.updatePropertyDialog = new UpdatePropertyDialog(container);
        this.propertyDetailDialog = new PropertyDetailDialog(container);
        this.propertiesPage = new PropertiesPage(container);
        this.propertyFlag = new PropertyFlag(container);
        this.resetPasswordStep1 = new ResetPasswordStep1(container);
        this.resetPasswordStep2 = new ResetPasswordStep2(container);
    }

    init (){
        this.render();
    }

    addEventListener(){
        this.signinEvents();
        this.signupEvents();
        this.propertiesPageEvent();
        this.propertyDetailDialogEvent();
        this.postPropertyDialogEvent();
        this.updatePropertyDialogEvent();
        this.propertyFlagDialogEvent();
        this.receiveResetParams();
        this.passwordReset();
    }

    signinEvents (){
        
        this.signin.on("signin", data =>{
            this.propertiesPage.render();
            InformationDialog.getInstance().setMessage(`${data.first_name} signed in.`).show();
            this.setCredentials(data);
        });
        this.signin.on("error", error =>{
            ErrorDialog.getInstance().setMessage(error).show();
        })
        this.signin.on("signup", () => this.signup.render());

        this.signin.on("token_expired", message => {
            this.signin.render();
            InformationDialog.getInstance().setMessage(message).show();
        });

        this.signin.on("reloading", () =>{
            this.propertiesPage.render();
        });

        this.signin.on("forget_password_checked", () =>{
            this.resetPasswordStep1.render();
        });
    }

    signupEvents (){
        this.signup.on("signin_click", () => this.signin.render());
        this.signup.on("signup", data => {
            this.propertiesPage.render();
            InformationDialog.getInstance().setMessage(`${data.first_name} welcome.`).show();
            this.setCredentials(data);
        });
        this.signup.on("error", error => ErrorDialog.getInstance().setMessage(error).show());
    }

    propertiesPageEvent (){
        this.propertiesPage.on("add_button_click", () => {
            this.postPropertyDialog.show();
        });

        this.propertiesPage.on("property_item_click", data =>{
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

        this.propertiesPage.on("signout", () =>{
            InformationDialog.getInstance()
            .setMessage(`Good bye ${this.getUsername()}`)
            .show();
            this.signin.render();
            localStorage.clear();
        });

    }

    propertyDetailDialogEvent (){
        this.propertyDetailDialog.on("edit_property", data =>{
            this.updatePropertyDialog.setPropertyId(data)
            this.updatePropertyDialog.show();
            this.propertyDetailDialog.dismiss();
        });

        this.propertyDetailDialog.on("delete_property", () => {
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
            this.postPropertyDialog.clear();
            this.postPropertyDialog.dismiss();
            this.propertiesPage.render()
            InformationDialog.getInstance().setMessage("Property added!").show();
        });

        this.postPropertyDialog.on("error", error =>{
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
            this.propertyFlag.dismiss();
            InformationDialog.getInstance().setMessage("Report submitted").show()
        });

        this.propertyFlag.on("reported_error", error =>{
            ErrorDialog.getInstance().setMessage(error).show();
        });
    }

    receiveResetParams (){
        this.resetPasswordStep1.on("submit_email", data =>{
            this.resetPasswordStep1.setPasswordResetLink(data);
        });

        this.resetPasswordStep1.on("receive_reset_params", data =>{
            console.log(data);
            this.resetPasswordStep2.setData(data).render();
        });

        this.resetPasswordStep1.on("submit_email_error", err =>{
            ErrorDialog.getInstance().setMessage(err).show();
        });

        this.resetPasswordStep1.on("receive_params_error", err =>{
            ErrorDialog.getInstance().setMessage(err).show();
        });
    }

    passwordReset (){
        this.resetPasswordStep2.on("password_reset", data =>{
            InformationDialog.getInstance().setMessage(data).show();
            this.signin.render();
        });

        this.resetPasswordStep2.on("password_reset_error", err =>{
            ErrorDialog.getInstance().setMessage(err).show();
        });
    }
    
    setCredentials (data){
        localStorage.setItem("token",data.token);
        localStorage.setItem("username", `${data.first_name} ${data.last_name}`);
    }

    getUsername (){
        return !(localStorage.getItem("username"))? "": localStorage.getItem("username");
    }

    render (){
        const token = localStorage.getItem("token");
        if (!token){
            this.signin.render();
        } else if (Authenticator.isExpired()){
            this.signin.render();
            InformationDialog.getInstance().setMessage("Session Timeout!").show();
            localStorage.clear();
        } else{
            this.propertiesPage.render();
            InformationDialog.getInstance()
            .setMessage(`Welcome back ${this.getUsername()}`).show();
        }

        this.addEventListener();
    }

}

export default App;