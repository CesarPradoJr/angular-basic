import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente11',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {

  //Objeto de formulario
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  //Visibilidade dos botoes
  btnCadastrar:boolean = true;

  //Vetor
  vetor:Pessoa[] = [];

  //Armazenar indice da pessoa selecionada
  indice:number = -1

  //Funcao de cadastro
  cadastrar(){
    //Cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa);

    //Limpeza do inputs
    this.formulario.reset();

    //Visualização via console
    console.table(this.vetor);
  }

  //Funcao de Selecao
  selecionar(indice:number){
    //Atribuir o indice da pessoa
    this.indice = indice;

    //Atribuir os dados da pessoa no formulário
    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade
    });

    //Visibilidade dos botoes
    this.btnCadastrar = false;
  }

  //Funcao de Alteracao
  alterar(){
    //Alterar vetor
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    //Limpar os inputs
    this.formulario.reset();

    //Visibilidade dos botoes
    this.btnCadastrar = true;

  }

  //Funcao de remocao
  remover(){

    this.vetor.splice(this.indice, 1);

    this.formulario.reset();

    this.btnCadastrar = true;
  }

  //Funca de cancelar
  cancelar(){
     
    this.formulario.reset();

    this.btnCadastrar = true;
  }
}
