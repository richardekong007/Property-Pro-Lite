export function render(data){
    return `
        <div class = 'main-content'>
            <div class = 'home-image-container'>
                <img src = './images/estate.jpg' alt = 'image'/>
            </div>
            <div class = 'form-container'>
                <div class = 'form-header smaller-text'>Reset Password</div>
                <form id ='pass-reset-form'>
                    <input type = 'hidden' data-id value = ${data.id} />
                    <input type = 'hidden' data-token value = ${data.token} />
                    <input type = 'password' placeholder = 'New password' title = 'Provide new password' data-password required/> <br>
                    <br>
                    <button class = 'reset-pwd-button smaller-text'>Reset</button>
                </form>
            </div>
        </div>`;
}