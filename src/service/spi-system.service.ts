/**
 * Created by Ozgur Cimen on 28-Apr-17.
 */

import { Injectable } from '@angular/core';

declare var console:any;

@Injectable()
export class SpiSystemService{
    disableLogs(){
        console = {
            log:function(){},
            warn:function(){},
            error:function(){}
        };
    }
}