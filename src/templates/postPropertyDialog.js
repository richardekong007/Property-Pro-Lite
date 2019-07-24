
const template = `
    <div class = "dialog-container" >
        <div class = "dialog-header" >
            <span class = "dialog-title small-text">Post Advert</span>
            <button class = "close-rect small-text">x</button>
        </div>
        <form class = "property-form">
            <br>
            <input type = "text" placeholder = "Property Address" title = "Property Address" data-address required/>
            <input type = "text" placeholder = "Property City" title = "Property City" data-city required/>
            <br>
            <input type = "text" placeholder = "Property State" title = "Property State" data-state required/>
            <select class = "property-type" data-type>
                <option value = "Property type"> Property type</option>
                <option value = "Self-contained">Self-contained</option>
                <option value = "2 Bedroom">2 Bedroom</option>
                <option value = "3 Bedroom">3 Bedroom</option>
                <option value = "Mini flat">Mini flat</option>
                <option value = "Duplex">Duplex</option>
                <option value = "Bungalow">Bungalow</option>
            </select>
            <br>
            <input type = "number" placeholder = "Property Price" title = "Property Price" data-price required/>
            <input type = "file" data-image-url/>
            <br><br><br>
            <button id = "done" class = "fab tooltip">
                <img src = "./vectors/tick.svg" alt ="tick" width = "25px" height = "25px"/>
                <span class = "tooltiptext tiny-text">Post Advert</span>
            </button>
        </form>
    </div>`;

    export default template;
