import { Injectable } from '@angular/core';
/**
 * Created by Ozgur Cimen on 03-May-17.
 */

export class SpiAlertContent{
    public onclose:Function;
    private element:any;
    constructor(type:string, icon:string, message:string, duration:number){
        let template = ` 
            <div class="spi-alert-content ${type}" >
                <span class="close-icon" ><i class="fa fa-close"></i></span>
                <span class="spi-alert-icon fa fa-afw fa-2x ${icon}"></span>
                <span class="spi-alert-detail">${message}</span>
            </div>`;

        this.element = this.createElement(template);

        let closeElement = this.element.children[0];
        closeElement.onclick = close.bind(this);

        setTimeout(function(){
            this.element.classList.add('in');
        }.bind(this), 120);

        if(duration && duration < 0 ) return;

        let _duration = 2000;

        if(duration && duration > 0 ){
            _duration = duration;
        }

        setTimeout(close.bind(this), _duration);

        function close(){
            this.element.remove();
            this.element = null;
            if(this.onclose) this.onclose.call();
        }
    }

    public getElement(){
        return this.element;
    }

    private createElement(htmlText:string):any{
        let el = document.createElement('div');
        el.innerHTML = htmlText;
        return el.children[0];
    }
}

@Injectable()
export class SpiNotificationService{
    info(message:string, duration:number=0){
        this.push('info', 'fa-info-circle', message, duration);
    }

    warn(message:string, duration:number=0){
        this.push('warn', 'fa-warning', message, duration);
    }

    error(message:string, duration:number=0){
        this.push('error', 'fa-warning', message, duration);
    }

    succeed(message:string, duration:number=0){
        this.push('succeed', ' fa-check', message, duration);
    }

    private push(type:string, icon:string, message:string, duration:number){
        let elBody = document.getElementsByTagName('body')[0];
        let notificationContent:any = document.getElementsByClassName('spi-notification-content');
        let spiNotify = new SpiAlertContent(type, icon, message, duration);

        spiNotify.onclose = function () {
            spiNotify = null;
        };

        if(notificationContent == null || notificationContent.length === 0){
            notificationContent = document.createElement('div');
            notificationContent.classList.add('spi-notification-content');
            notificationContent.appendChild(spiNotify.getElement());
            elBody.appendChild(notificationContent);
        }else{
            notificationContent[0].appendChild(spiNotify.getElement());
        }
    }
}
