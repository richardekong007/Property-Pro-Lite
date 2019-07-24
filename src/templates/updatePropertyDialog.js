const template = `
    <div class = "dialog-container" >
        <div class = "dialog-header">
            <span class = "dialog-title small-text">Edit Advert</span>
            <button class = "close-rect small-text">x</button>
        </div>
        <form class = "property-form">
            <br>
            <input type = "number" placeholder = "Property Price" title = "Property Price" style = "width:400px;" data-price required/>
            <br>
            <label class = "checkbox bit-smaller-text">
                <input type = "checkbox" />
                Mark as sold
                <span class = "checkmark"></span>
            </label>
            <br><br>
            <button id = "done" class = "fab tooltip">
                <img src = "./vectors/tick.svg" alt ="tick" width = "25px" height = "25px"/>
                <span class = "tooltiptext tiny-text">Edit</span>
            </button>
        </form>
    <div>`;

    export default template;