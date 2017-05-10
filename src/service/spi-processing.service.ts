/**
 * Created by Ozgur Cimen on 03-May-17.
 */
import { Inject, Injectable } from '@angular/core';

/**
 * Created by Ozgur Cimen on 28-Apr-17.
 */
@Injectable()
export class SpiProcessingService{

    private backDrop:any;
    private loadingContent:any;
    private oldStyle: string;
    private isLoadingOpen:boolean;
    private isLoadingHiding:boolean;

    showLoading(text:string = 'Loading...', delay:number = 0){
        if(this.isLoadingOpen) return;

        this.isLoadingHiding = false;
        this.isLoadingOpen = true;
        let elBody = document.getElementsByTagName('body')[0];
        this.oldStyle = elBody.style.overflow;
        elBody.style.overflow = 'hidden';

        this.backDrop = document.createElement('div');
        this.backDrop.classList.add('spi-backdrop-content');

        this.loadingContent = document.createElement('div');
        this.loadingContent.classList.add('loading-content');

        this.loadingContent.innerHTML = `
         <svg class="spinner" width="20px" height="20px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
          </svg>
          <span style="position: relative; margin-left: 5px; top: -5px;">${text}</span>
        `;

        this.backDrop.appendChild(this.loadingContent);
        elBody.appendChild(this.backDrop);

        setTimeout(function () {
            this.loadingContent.classList.add('in');
        }.bind(this), 120);

        if(delay > 0 )
            setTimeout(this.hideLoading.bind(this), delay);
    }

    hideLoading(){
        if(!this.isLoadingOpen )return;
        if(this.isLoadingHiding) return;
        this.isLoadingHiding = true;

        this.loadingContent.classList.remove('in');
        this.loadingContent.classList.add('out');
        setTimeout(function () {
            let elBody = document.getElementsByTagName('body')[0];
            elBody.removeChild(this.backDrop);
            elBody.style.overflow = this.oldStyle;
            elBody = null;
            this.loadingContent = null;
            this.backDrop = null;
            this.isLoadingHiding = false;
            this.isLoadingOpen = false;
        }.bind(this), 500);
    }
}
