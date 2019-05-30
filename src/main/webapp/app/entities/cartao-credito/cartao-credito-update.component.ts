import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICartaoCredito, CartaoCredito } from 'app/shared/model/cartao-credito.model';
import { CartaoCreditoService } from './cartao-credito.service';
import { CustomNameValidatorService } from '../../shared/validators/custom-name-service';
import { CustomDateValidatorService } from '../../shared/validators/custom-date-service';
import moment = require('moment');

@Component({
  selector: 'jhi-cartao-credito-update',
  templateUrl: './cartao-credito-update.component.html'
})
export class CartaoCreditoUpdateComponent implements OnInit {
  mesano: string = moment().format('MM/YYYY'); // >> alterado aqui
  cartaoCredito: ICartaoCredito;
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    nomeCartao: [
      null,
      [Validators.required, Validators.minLength(10), Validators.maxLength(40), this.nameValidatorService.forbiddenNameValidator(/bosco/i)]
    ], // >>> Alterado aqui
    bandeira: [],
    numero: [],
    cvv: [],
    validade: [
      null,
      [Validators.required, Validators.minLength(7), Validators.maxLength(7), this.dateValidateService.expireDateValidator(this.mesano)]
    ]
  });

  constructor(
    protected cartaoCreditoService: CartaoCreditoService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    protected nameValidatorService: CustomNameValidatorService,
    protected dateValidateService: CustomDateValidatorService // >>> Alterado aqui
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ cartaoCredito }) => {
      this.updateForm(cartaoCredito);
      this.cartaoCredito = cartaoCredito;
    });
  }

  updateForm(cartaoCredito: ICartaoCredito) {
    this.editForm.patchValue({
      id: cartaoCredito.id,
      nomeCartao: cartaoCredito.nomeCartao,
      bandeira: cartaoCredito.bandeira,
      numero: cartaoCredito.numero,
      cvv: cartaoCredito.cvv,
      validade: cartaoCredito.validade
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const cartaoCredito = this.createFromForm();
    if (cartaoCredito.id !== undefined) {
      this.subscribeToSaveResponse(this.cartaoCreditoService.update(cartaoCredito));
    } else {
      this.subscribeToSaveResponse(this.cartaoCreditoService.create(cartaoCredito));
    }
  }

  private createFromForm(): ICartaoCredito {
    const entity = {
      ...new CartaoCredito(),
      id: this.editForm.get(['id']).value,
      nomeCartao: this.editForm.get(['nomeCartao']).value,
      bandeira: this.editForm.get(['bandeira']).value,
      numero: this.editForm.get(['numero']).value,
      cvv: this.editForm.get(['cvv']).value,
      validade: this.editForm.get(['validade']).value
    };
    return entity;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICartaoCredito>>) {
    result.subscribe((res: HttpResponse<ICartaoCredito>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
