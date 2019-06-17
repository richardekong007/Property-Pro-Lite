exports.show = () =>{
    return `
            <div class = "dialog-container">
                <div class = "dialog-header">
                    <span class = "dialog-title">Post Advert</span>
                    <button class = "close-rect smaller-text">x</button>
                </div>
                <form class = "property-form">
                    <input type = "text" placeholder = "Property Address" title = "Property Address" required/>
                    <input type = "text" placeholder = "Property City" title = "Property City" required/>
                    <br>
                    <input type = "text" placeholder = "Property State" title = "Property State" required/>
                    <select class = "property-type">
                        <option value = "Property type"> Property type</option>
                        <option value = "Self-contained">Self-contained</option>
                        <option value = "2 Bedroom">2 Bedroom</option>
                        <option value = "3 Bedroom">3 Bedroom</option>
                        <option value = "Mini flat">Mini flat</option>
                        <option value = "Duplex">Duplex</option>
                        <option value = "Bungalow">Bungalow</option>
                    </select>
                    <br>
                    <input type = "number" placeholder = "Property Price" title = "Property Price" required/>
                    <input type = "file"/>
                    <br><br><br>
                    <button  class = "fab tooltip">
                        <img src = "../public/vectors/tick.svg" alt ="tick" width = "25px" height = "25px"/>
                        <span class = "tooltiptext small-text">Post</span>
                    </button>
                </form>
            <div>
    `;
};