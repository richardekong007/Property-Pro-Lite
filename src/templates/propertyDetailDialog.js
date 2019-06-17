exports.show = () =>{
    return `
        <div class = "dialog-container">
            <div class = "dialog-header">
                <span class = "dialog-title">Property Detail</span>
                <button class = "close-rect smaller-text">x</button>
            </div>
            <div class = "property-detail-content bit-smaller-text">
                <div class = "property-detail-images"></div>
                <form class = "property-detail-form">
                    <div class = "col">
                        <label class = "bold-text">Type:</label> 
                        <span data-property-type>Sample Text</span>
                        <br>
                        <label class = "bold-text">Address:</label> 
                        <span data-property-address>Sample Text</span>
                        <br>
                        <label class = "bold-text">Price:</label>
                        <span data-property-price>Sample Text</span>
                        <br>
                        <label class = "bold-text">Status:</label>
                        <span data-property-status>Sample Text</span>
                        <br>
                        <p class = "bold-text">Owner Contact Information</p>
                        <label class = "bold-text">Owner:</label>
                        <span data-property-owner>Sample Text</span>
                        <br>
                        <label class = "bold-text">Phone:</label>
                        <span data-property-phone>Sample Text</span>
                        <br>
                        <label class = "bold-text">Posted On:</label>
                        <span data-property-post-date>Sample Text</span>
                    </div>    
                </form>
            </div>
        </div>`;
};