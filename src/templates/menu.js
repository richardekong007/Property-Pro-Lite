
export function render(user){
    return `
            <img id = 'menu-closer' src = './vectors/error.svg' alt = 'close' width = '25px' height = '25px'/>
            <span class = 'menu-item smaller-text bold-text'>${user.first_name} ${user.last_name}</span><br>
            <span class = 'menu-item smaller-text'>${user.email}</span><br>
            <span class = 'menu-item smaller-text'>Properties:</span><br>
            <span class = 'menu-item smaller-text'>Available:</span><br>
            <span class = 'menu-item smaller-text'>Sold:</span><br><br>
            <span id = 'signout' class = 'menu-item smaller-text bold-text'>Sign out</span>
    `;
};