import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPessoa, Pessoa } from 'app/shared/model/pessoa.model';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'jhi-pessoa-update',
  templateUrl: './pessoa-update.component.html'
})
export class PessoaUpdateComponent implements OnInit {
  pessoa: IPessoa;
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    tipo: [],
    cpf: [],
    cnpj: [],
    primeiroNome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    nomeMeio: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    sobreNome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    saudacao: [],
    titulo: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    cep: [],
    tipoLogradouro: [],
    nomeLogradouro: [],
    complemento: [null, [Validators.required, Validators.minLength(0), Validators.maxLength(30)]]
  });

  constructor(protected pessoaService: PessoaService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ pessoa }) => {
      this.updateForm(pessoa);
      this.pessoa = pessoa;
    });
  }

  updateForm(pessoa: IPessoa) {
    this.editForm.patchValue({
      id: pessoa.id,
      tipo: pessoa.tipo,
      cpf: pessoa.cpf,
      cnpj: pessoa.cnpj,
      primeiroNome: pessoa.primeiroNome,
      nomeMeio: pessoa.nomeMeio,
      sobreNome: pessoa.sobreNome,
      saudacao: pessoa.saudacao,
      titulo: pessoa.titulo,
      cep: pessoa.cep,
      tipoLogradouro: pessoa.tipoLogradouro,
      nomeLogradouro: pessoa.nomeLogradouro,
      complemento: pessoa.complemento
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const pessoa = this.createFromForm();
    if (pessoa.id !== undefined) {
      this.subscribeToSaveResponse(this.pessoaService.update(pessoa));
    } else {
      this.subscribeToSaveResponse(this.pessoaService.create(pessoa));
    }
  }

  private createFromForm(): IPessoa {
    const entity = {
      ...new Pessoa(),
      id: this.editForm.get(['id']).value,
      tipo: this.editForm.get(['tipo']).value,
      cpf: this.editForm.get(['cpf']).value,
      cnpj: this.editForm.get(['cnpj']).value,
      primeiroNome: this.editForm.get(['primeiroNome']).value,
      nomeMeio: this.editForm.get(['nomeMeio']).value,
      sobreNome: this.editForm.get(['sobreNome']).value,
      saudacao: this.editForm.get(['saudacao']).value,
      titulo: this.editForm.get(['titulo']).value,
      cep: this.editForm.get(['cep']).value,
      tipoLogradouro: this.editForm.get(['tipoLogradouro']).value,
      nomeLogradouro: this.editForm.get(['nomeLogradouro']).value,
      complemento: this.editForm.get(['complemento']).value
    };
    return entity;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPessoa>>) {
    result.subscribe((res: HttpResponse<IPessoa>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
