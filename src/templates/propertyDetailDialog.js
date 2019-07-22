
const template = (property = "") =>{
    const template = `
        <div class = "dialog-header">
            <span class = "dialog-title">Property Detail</span>
            <button class = "close-rect smaller-text">x</button>
        </div>
        <div class = "property-detail-content bit-smaller-text">
        <div class = "property-detail-images"></div>
        <form class = "property-detail-form">
            <div>
                <label class = "bold-text">Type:</label> 
                <span data-property-type>${property.type}</span>
                <br>
                <label class = "bold-text">Address:</label> 
                <span data-property-address>${property.address}</span>
                <br>
                <label class = "bold-text">Price:</label>
                <span data-property-price>${property.price}</span>
                <br>
                <label class = "bold-text">Status:</label>
                <span data-property-status>${property.status}</span>
                <br>
                <p class = "bold-text">Owner Contact Information</p>
                <label class = "bold-text">Email:</label>
                <span data-property-owner>${property.owner_email}</span>
                <br>
                <label class = "bold-text">Phone:</label>
                <span data-property-phone>${property.owner_phone_number}</span>
                <br>
                <label class = "bold-text">Posted On:</label>
                <span data-property-post-date>${property.created_on}</span>
            </div>   
            <div class = "action-section">
                <button id = "edit-action" class = "fab tooltip">
                    <img src = "./vectors/edit.svg" alt = "edit-icon" width = "20px" height = "20px"/>
                    <span class = "tooltiptext small-text">Edit property</span>
                </button>
                <br><br>    
                <button id = "delete-action" class = "fab tooltip">
                    <img src = "./vectors/dustbin.svg" alt = "delete-icon" width = "20px" height = "20px"/>
                    <span class = "tooltiptext small-text">Delete Property</span>
                </button>    
            </div> 
        </form>
        </div>`;

        return template;
};
    
export default template;
