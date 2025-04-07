import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {

  //Variável img
  imagem:string = '/assets/dia.jpg'

  //Função para alterar img
  alterarImagem(){
    if(this.imagem === '/assets/dia.jpg'){
      this.imagem = '/assets/noite.jpg';
    }else{
      this.imagem = '/assets/dia.jpg';
    }
  }

}
