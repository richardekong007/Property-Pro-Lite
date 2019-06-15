exports.render = () =>{
    return `
        <div class = 'main-content'>
            <div id = 'main-image-container'>
                <img src = '../public/images/estate.jpg' alt = 'image'/>
            </div>
            <div class = 'form-container'>
                <div class = 'form-header smaller-text'>Sign In</div>
                <form id ='signin-form'>
                    <input type = 'text' placeholder = 'Username' title = 'Provide username' required/> <br>
                    <input type = 'password' placeholder = 'Password' title = 'Provide Password' required/> <br>
                    <label class = "checkbox small-text"> 
                        <input type = "checkbox">
                        Forget Password?
                        <span class = "checkmark"></span>
                    <label> <br>
                    <button class = 'login-button smaller-text'>SIGN IN</button> <br>
                </form>
                <p class= 'form-container-text'>Don't have an account?</p>
                <p id ='signup-text' class = 'bold-text smaller-text' > 
                    <a href = '#'>
                    SIGN UP NOW
                    </a>
                </p>
            </div>
        </div>`;
};