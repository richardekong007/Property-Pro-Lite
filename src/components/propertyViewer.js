import {render} from "../templates/propertyViewer.js";
import config from "../config.js";

class PropertyViewer {
    constructor(container){
        this.container = container;
    }

    render (){
        
        fetch(`${config.baseUrl}/api/v1/property`,{
            mode:"cors",
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
        .then(res =>{
            if (res.data.length > 0){
                const data = res.data;
                this.container.innerHTML = render(data);
            }
        });
    }


}

export default PropertyViewer;