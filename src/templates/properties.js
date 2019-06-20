exports.render = () => {
    
    return `
        <div class = "property-container">
            <div id = "properties-title">Property Adverts</div>
            <div class = "property-type-holder">
            <form>
                    <label>Search by:</label>
                        <select class = "property-type-options">
                            <option value = "Property type"> Property type</option>
                            <option value = "Self-contained">Self-contained</option>
                            <option value = "2 Bedroom">2 Bedroom</option>
                            <option value = "3 Bedroom">3 Bedroom</option>
                            <option value = "Mini flat">Mini flat</option>
                            <option value = "Duplex">Duplex</option>
                            <option value = "Bungalow">Bungalow</option>
                        </select>
                </form>
            </div>
            <div id = "properties-grid"></div>
            <div id = "add-property-button" class = "fab tooltip">+
                <span class = "tooltiptext small-text">Add property</span>
            </div>
        </div>`;
};


