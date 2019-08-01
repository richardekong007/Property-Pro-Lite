import {render} from '../templates/menu.js';
import TinyEmitter from 'tiny-emitter';


class Menu extends TinyEmitter{

    constructor(container){
        super(container);
        this.container = container;
        this.data;
    }

    setData (data){
        this.data = data;
        return this;
    }

    render (){
        const menu = this.container.querySelector('.menu');
        menu.innerHTML = render(this.data);
        this.addEventListener();

    }

    dismiss (){
        const menu = document.querySelector('.menu');
        menu.style.width = '0';
        menu.style.visibility = 'hidden';
    }

    open (){
        const menu = document.querySelector('.menu');
        menu.style.width = '150px';
        menu.style.height = '40%';
        menu.style.visibility = 'visible';
    }

    addEventListener (){
        this.onOpen();
        this.onCloseClick();
    }

    onCloseClick (){
        const close = document.querySelector('#menu-closer');
        close.addEventListener('click', event => {
            event.preventDefault();
            this.emit('menu_closed');
        });
    }

    onOpen (){
        const openPoint = document.querySelector('#profile');
        openPoint.addEventListener('click', event =>{
            event.preventDefault();
            this.emit('menu_opened');
        });
    }

}

export default Menu;