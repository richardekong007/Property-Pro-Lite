export function render(){
    return `
        <div class = 'main-content'>
            <div class = 'home-image-container'>
                <img src = './images/estate.jpg' alt = 'image'/>
            </div>
            <div class = 'form-container'>
                <div class = 'form-header smaller-text'>Sign In</div>
                <form id ='signin-form'>
                    <input type = 'text' placeholder = 'Email' title = 'Provide email' data-email required/> <br>
                    <input type = 'password' placeholder = 'Password' title = 'Provide Password' data-password required/> <br>
                    <label class = "checkbox tiny-text"> 
                        <input type = "checkbox" id = "forget-pass">
                        Forget Password?
                        <span class = "checkmark"></span>
                    <label> <br>
                    <button class = 'login-button smaller-text'>Sign in</button>
                </form>
                <p class = 'form-container-text smaller-text'>Don't have an account?</p>
                <p id = 'signup-text' class = 'bold-text smaller-text' > 
                    <a href = '#'>
                    SIGN UP NOW
                    </a>
                </p>
            </div>
        </div>`;
}