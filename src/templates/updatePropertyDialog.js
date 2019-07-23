const template = `
    <div class = "dialog-container">
        <div class = "dialog-header">
            <span class = "dialog-title">Edit Advert</span>
            <button class = "close-rect smaller-text">x</button>
        </div>
        <form class = "property-form">
            <input type = "number" placeholder = "Property Price" title = "Property Price" data-price required/>
            <br>
            <label class = "checkbox bit-smaller-text">
                <input type = "checkbox" />
                Mark as sold
                <span class = "checkmark"></span>
            </label>
            <br><br>
            <button id = "done" class = "fab tooltip">
                <img src = "./vectors/tick.svg" alt ="tick" width = "25px" height = "25px"/>
                <span class = "tooltiptext small-text">Edit</span>
            </button>
        </form>
    <div>`;

    export default template;