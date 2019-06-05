import { browser, ExpectedConditions, element, by, ElementFinder } from 'protractor';

export class PessoaComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-pessoa div table .btn-danger'));
  title = element.all(by.css('jhi-pessoa div h2#page-heading span')).first();

  async clickOnCreateButton(timeout?: number) {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(timeout?: number) {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons() {
    return this.deleteButtons.count();
  }

  async getTitle() {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class PessoaUpdatePage {
  pageTitle = element(by.id('jhi-pessoa-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  tipoInput = element(by.id('field_tipo'));
  cpfInput = element(by.id('field_cpf'));
  cnpjInput = element(by.id('field_cnpj'));
  primeiroNomeInput = element(by.id('field_primeiroNome'));
  nomeMeioInput = element(by.id('field_nomeMeio'));
  sobreNomeInput = element(by.id('field_sobreNome'));
  saudacaoInput = element(by.id('field_saudacao'));
  tituloInput = element(by.id('field_titulo'));
  cepInput = element(by.id('field_cep'));
  tipoLogradouroInput = element(by.id('field_tipoLogradouro'));
  nomeLogradouroInput = element(by.id('field_nomeLogradouro'));
  complementoInput = element(by.id('field_complemento'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setTipoInput(tipo) {
    await this.tipoInput.sendKeys(tipo);
  }

  async getTipoInput() {
    return await this.tipoInput.getAttribute('value');
  }

  async setCpfInput(cpf) {
    await this.cpfInput.sendKeys(cpf);
  }

  async getCpfInput() {
    return await this.cpfInput.getAttribute('value');
  }

  async setCnpjInput(cnpj) {
    await this.cnpjInput.sendKeys(cnpj);
  }

  async getCnpjInput() {
    return await this.cnpjInput.getAttribute('value');
  }

  async setPrimeiroNomeInput(primeiroNome) {
    await this.primeiroNomeInput.sendKeys(primeiroNome);
  }

  async getPrimeiroNomeInput() {
    return await this.primeiroNomeInput.getAttribute('value');
  }

  async setNomeMeioInput(nomeMeio) {
    await this.nomeMeioInput.sendKeys(nomeMeio);
  }

  async getNomeMeioInput() {
    return await this.nomeMeioInput.getAttribute('value');
  }

  async setSobreNomeInput(sobreNome) {
    await this.sobreNomeInput.sendKeys(sobreNome);
  }

  async getSobreNomeInput() {
    return await this.sobreNomeInput.getAttribute('value');
  }

  async setSaudacaoInput(saudacao) {
    await this.saudacaoInput.sendKeys(saudacao);
  }

  async getSaudacaoInput() {
    return await this.saudacaoInput.getAttribute('value');
  }

  async setTituloInput(titulo) {
    await this.tituloInput.sendKeys(titulo);
  }

  async getTituloInput() {
    return await this.tituloInput.getAttribute('value');
  }

  async setCepInput(cep) {
    await this.cepInput.sendKeys(cep);
  }

  async getCepInput() {
    return await this.cepInput.getAttribute('value');
  }

  async setTipoLogradouroInput(tipoLogradouro) {
    await this.tipoLogradouroInput.sendKeys(tipoLogradouro);
  }

  async getTipoLogradouroInput() {
    return await this.tipoLogradouroInput.getAttribute('value');
  }

  async setNomeLogradouroInput(nomeLogradouro) {
    await this.nomeLogradouroInput.sendKeys(nomeLogradouro);
  }

  async getNomeLogradouroInput() {
    return await this.nomeLogradouroInput.getAttribute('value');
  }

  async setComplementoInput(complemento) {
    await this.complementoInput.sendKeys(complemento);
  }

  async getComplementoInput() {
    return await this.complementoInput.getAttribute('value');
  }

  async save(timeout?: number) {
    await this.saveButton.click();
  }

  async cancel(timeout?: number) {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class PessoaDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-pessoa-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-pessoa'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
