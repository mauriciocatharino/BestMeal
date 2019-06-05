import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'cartao-credito',
        loadChildren: './cartao-credito/cartao-credito.module#BestmealCartaoCreditoModule'
      },
      {
        path: 'cartao-credito',
        loadChildren: './cartao-credito/cartao-credito.module#BestmealCartaoCreditoModule'
      },
      {
        path: 'cartao-credito',
        loadChildren: './cartao-credito/cartao-credito.module#BestmealCartaoCreditoModule'
      },
      {
        path: 'pessoa',
        loadChildren: './pessoa/pessoa.module#BestmealPessoaModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BestmealEntityModule {}
