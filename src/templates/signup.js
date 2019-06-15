exports.render = () =>{
    return `
        <div>
             <div>
                <div class = "form-header smaller-text">Sign up</div>
                <form>
                    <input type = "text" placeholder = "First Name" title = "Username" required/>
                    <input type = "text" placeholder = "Last Name" title = "Last Name" required/>
                    <br>
                    <input type = "text" placeholder = "Email" title = "Email" required/>
                    <input type = "text" placeholder = "Phone" title = "Phone" required/>
                    <br>
                    <input type = "text" placeholder = "Address" title = "Address" required/>
                    <input type = "password" placeholder = "Password" title = "Password" required/>
                    <label class = "checkbox">
                        <input type = "checkbox" />
                        Signing up as an Agent?
                        <span class = "checkmark"></span>
                    </label>
                    <br>
                    <button>Signup</button>    
                </form>
                <p>Already have an account?</p>
                <p>
                    <a href = "#">SIGN IN</a>
                </p>    
             </div>
             <div>
                <img src = "../public/images/estate.jpg' alt ='estate img'/>
             </div>
        </div>
    `;
}