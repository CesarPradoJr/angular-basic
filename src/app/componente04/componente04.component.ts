import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente04',
  imports: [CommonModule],
  templateUrl: './componente04.component.html',
  styleUrl: './componente04.component.css'
})
export class Componente04Component {

  //Variável para exibir ou ocultar div
  exibir:boolean = true;

  //Função para exibir ou ocultar div
  acao(){
    if(this.exibir === true){
      this.exibir = false;
    }else{
      this.exibir = true
    }
  }
}
