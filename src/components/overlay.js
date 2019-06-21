exports.createOverlay = () =>{
    let overlay = document.createElement("div");
    overlay.setAttribute("id","overlay");
    overlay.setAttribute("class","dialog-overlay");
    return overlay;
};