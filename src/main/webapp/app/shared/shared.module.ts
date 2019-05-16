import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BestmealSharedLibsModule, BestmealSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [BestmealSharedLibsModule, BestmealSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [BestmealSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BestmealSharedModule {
  static forRoot() {
    return {
      ngModule: BestmealSharedModule
    };
  }
}
