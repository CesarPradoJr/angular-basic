import { Component } from '@angular/core';

@Component({
  selector: 'app-componente08',
  imports: [],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {

  //Variável de média
  media:number = 1;

  //Vetor de nomes
  nomes:string[] = ['Ana', 'Bia', 'Carlos', 'Diego', 'Eliane', 'Felicity', 'Gustavo', 'Heloísa', 'Igor', 'Júlia'];

  //Linguagem
  linguagem:string = 'CSS';
}
