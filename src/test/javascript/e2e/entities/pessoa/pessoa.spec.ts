/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { PessoaComponentsPage, PessoaDeleteDialog, PessoaUpdatePage } from './pessoa.page-object';

const expect = chai.expect;

describe('Pessoa e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let pessoaUpdatePage: PessoaUpdatePage;
  let pessoaComponentsPage: PessoaComponentsPage;
  let pessoaDeleteDialog: PessoaDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Pessoas', async () => {
    await navBarPage.goToEntity('pessoa');
    pessoaComponentsPage = new PessoaComponentsPage();
    await browser.wait(ec.visibilityOf(pessoaComponentsPage.title), 5000);
    expect(await pessoaComponentsPage.getTitle()).to.eq('bestmealApp.pessoa.home.title');
  });

  it('should load create Pessoa page', async () => {
    await pessoaComponentsPage.clickOnCreateButton();
    pessoaUpdatePage = new PessoaUpdatePage();
    expect(await pessoaUpdatePage.getPageTitle()).to.eq('bestmealApp.pessoa.home.createOrEditLabel');
    await pessoaUpdatePage.cancel();
  });

  it('should create and save Pessoas', async () => {
    const nbButtonsBeforeCreate = await pessoaComponentsPage.countDeleteButtons();

    await pessoaComponentsPage.clickOnCreateButton();
    await promise.all([
      pessoaUpdatePage.setTipoInput('tipo'),
      pessoaUpdatePage.setCpfInput('cpf'),
      pessoaUpdatePage.setCnpjInput('cnpj'),
      pessoaUpdatePage.setPrimeiroNomeInput('primeiroNome'),
      pessoaUpdatePage.setNomeMeioInput('nomeMeio'),
      pessoaUpdatePage.setSobreNomeInput('sobreNome'),
      pessoaUpdatePage.setSaudacaoInput('saudacao'),
      pessoaUpdatePage.setTituloInput('titulo'),
      pessoaUpdatePage.setCepInput('cep'),
      pessoaUpdatePage.setTipoLogradouroInput('tipoLogradouro'),
      pessoaUpdatePage.setNomeLogradouroInput('nomeLogradouro'),
      pessoaUpdatePage.setComplementoInput('complemento')
    ]);
    expect(await pessoaUpdatePage.getTipoInput()).to.eq('tipo', 'Expected Tipo value to be equals to tipo');
    expect(await pessoaUpdatePage.getCpfInput()).to.eq('cpf', 'Expected Cpf value to be equals to cpf');
    expect(await pessoaUpdatePage.getCnpjInput()).to.eq('cnpj', 'Expected Cnpj value to be equals to cnpj');
    expect(await pessoaUpdatePage.getPrimeiroNomeInput()).to.eq('primeiroNome', 'Expected PrimeiroNome value to be equals to primeiroNome');
    expect(await pessoaUpdatePage.getNomeMeioInput()).to.eq('nomeMeio', 'Expected NomeMeio value to be equals to nomeMeio');
    expect(await pessoaUpdatePage.getSobreNomeInput()).to.eq('sobreNome', 'Expected SobreNome value to be equals to sobreNome');
    expect(await pessoaUpdatePage.getSaudacaoInput()).to.eq('saudacao', 'Expected Saudacao value to be equals to saudacao');
    expect(await pessoaUpdatePage.getTituloInput()).to.eq('titulo', 'Expected Titulo value to be equals to titulo');
    expect(await pessoaUpdatePage.getCepInput()).to.eq('cep', 'Expected Cep value to be equals to cep');
    expect(await pessoaUpdatePage.getTipoLogradouroInput()).to.eq(
      'tipoLogradouro',
      'Expected TipoLogradouro value to be equals to tipoLogradouro'
    );
    expect(await pessoaUpdatePage.getNomeLogradouroInput()).to.eq(
      'nomeLogradouro',
      'Expected NomeLogradouro value to be equals to nomeLogradouro'
    );
    expect(await pessoaUpdatePage.getComplementoInput()).to.eq('complemento', 'Expected Complemento value to be equals to complemento');
    await pessoaUpdatePage.save();
    expect(await pessoaUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await pessoaComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Pessoa', async () => {
    const nbButtonsBeforeDelete = await pessoaComponentsPage.countDeleteButtons();
    await pessoaComponentsPage.clickOnLastDeleteButton();

    pessoaDeleteDialog = new PessoaDeleteDialog();
    expect(await pessoaDeleteDialog.getDialogTitle()).to.eq('bestmealApp.pessoa.delete.question');
    await pessoaDeleteDialog.clickOnConfirmButton();

    expect(await pessoaComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
