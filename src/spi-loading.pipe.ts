import { Injectable, PipeTransform, Pipe } from '@angular/core';
/**
 * Created by Ozgur Cimen on 26-Apr-17.
 */


@Pipe({
  name: 'spiLoadingPipe'
})
@Injectable()
export class SpiLoadingPipe implements PipeTransform {
  transform(value: any, args: any[] = null): string {
    return value;
  }
}
