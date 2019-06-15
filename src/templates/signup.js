exports.render = () =>{
    return `
        <div class = "main-content">
             <div class = "form-container">
                <div class = "form-header smaller-text">Sign up</div>
                <form id = "signup-form">
                    <input type = "text" placeholder = "First Name" title = "Username" required/>
                    <input type = "text" placeholder = "Last Name" title = "Last Name" required/>
                    <br>
                    <input type = "text" placeholder = "Email" title = "Email" required/>
                    <input type = "text" placeholder = "Phone" title = "Phone" required/>
                    <br>
                    <input type = "text" placeholder = "Address" title = "Address" required/>
                    <input type = "password" placeholder = "Password" title = "Password" required/>
                    <br>
                    <label class = "checkbox small-text">
                        <input type = "checkbox" />
                        Sign up as an Agent
                        <span class = "checkmark"></span>
                    </label>
                    <br>
                    <button class = 'login-button smaller-text'>Sign up</button>    
                </form>
                <p class = "form-container-text small-text">Already have an account?</p>
                <p id = "signin-text" class = 'bold-text smaller-text'>
                    <a href = "#">SIGN IN</a>
                </p>    
             </div>
             <div class = "home-image-container">
                <img src = "../public/images/estate.jpg" alt ='estate img'/>
             </div>
        </div>
    `;
}