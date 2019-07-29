import {render} from "../templates/propertyViewer.js";
import config from "../config.js";
import TinyEmitter from "tiny-emitter";

class PropertyViewer extends TinyEmitter{
    constructor(container){
        super();
        this.container = container;
    }

    render (){
        
        fetch(`${config.host}/api/v1/property`,{
            mode:"cors",
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
        .then(res =>{
            if (res.data.length > 0){
                this.container.innerHTML = render(res.data);
                this.emitIds(res.data, this.container.querySelectorAll(".property-item")); 
            }
        });
    }

    renderByType (type) {
       return fetch(`${config.host}/api/v1/property/type?type=${type}`,{
            mode:'cors',
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
        .then(res =>{
            if (res.error){
                return Promise.reject(res.error);
            }
            this.container.innerHTML = render(res.data);
            this.emitIds(res.data,this.container.querySelectorAll(".property-item"));
        });
    }

    emitIds (data, container){
        container.forEach((item, index) =>{
            item.addEventListener("click", () =>{
                this.emit("property_item_click", data[index]);
            });
        });
    }   

}

export default PropertyViewer;