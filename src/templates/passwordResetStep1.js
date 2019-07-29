export function render(){
    return `
        <div class = 'main-content'>
            <div class = 'home-image-container'>
                <img src = './images/estate.jpg' alt = 'image'/>
            </div>
            <div class = 'form-container'>
                <div class = 'form-header smaller-text'>Reset Password</div>
                <form id ='pass-reset-form'>
                    <input type = 'text' placeholder = 'Provide your email for this account' title = 'Provide email' data-email required/>
                    <br>
                    <button class = 'reset-pwd-button smaller-text'>Next</button>
                    <br><br>
                    <span id = "reset-link-container"/>
                </form>
            </div>
        </div>`;
}