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
                this.container.innerHTML = render(res.data);
            }
        });
    }

    renderByType (type) {
       return fetch(`${config.baseUrl}/api/v1/property/type?type=${type}`,{
            mode:'cors',
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
        .then(res =>{
            if (res.error){
                return Promise.reject(res.error);
            }
            this.container.innerHTML = render(res.data);
        });
    }


}

export default PropertyViewer;