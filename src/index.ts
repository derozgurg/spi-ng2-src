/**
 * Created by Ozgur Cimen on 26-Apr-17.
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpiLoadingComponent } from  './spi-loading.component';
import { SpiLoadingDirective } from './spi-loading.directive';
import { SpiLoadingPipe } from './spi-loading.pipe';
import { SpiProcessingService } from './service/spi-processing.service';
import { SpiSystemService } from './service/spi-system.service';
import { SpiNotificationService } from './service/spi-notification.service';
import { SpiClickOutsideDirective } from './directive/spi-clickoutside.pipe';

export * from './spi-loading.component';
export * from './spi-loading.directive';
export * from './spi-loading.pipe';
export * from './spi-loading.service';
export * from './service/spi-system.service';
export * from './service/spi-notification.service';
export * from './service/spi-processing.service';
export * from './directive/spi-clickoutside.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpiLoadingComponent,
    SpiLoadingDirective,
    SpiLoadingPipe,
    SpiClickOutsideDirective
  ],
  exports: [
    SpiLoadingComponent,
    SpiLoadingDirective,
    SpiLoadingPipe,
    SpiClickOutsideDirective
  ]
})
export class SpiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SpiModule,
      providers: [SpiProcessingService, SpiSystemService,SpiNotificationService]
    };
  }
}
