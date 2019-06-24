const renderProperties = properties => {
    return properties.map(property =>{
        return `
            <div class = "property-item bold-text">
                <img src = "./images/estate.jpg" alt = "property image" width= "250px" height = "250px"/><br>
                <span>${property.address}</span><br>
                <span>${property.price}</span><br>
                <span>${property.status}</span><br>
            </div>`;
    }).join("");
};

export function render(properties){
    if (properties && properties.length){
        return renderProperties(properties);
    }

    return `<h4 class = "text-center">No property found</h4>`;
}

